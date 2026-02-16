'use client';

import React, { useEffect, useRef } from 'react';

const ShaderCube: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl');
        if (!gl) {
            console.error('WebGL not supported');
            return;
        }

        const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

        const fragmentShaderSourceMain = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;

      #define TIME        iTime
      #define RESOLUTION  iResolution
      #define PI          3.141592654
      #define TAU         (2.0*PI)

      #define ROT(a)      mat2(cos(a), sin(a), -sin(a), cos(a))

      const vec4 hsv2rgb_K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 hsv2rgb(vec3 c) {
        vec3 p = abs(fract(c.xxx + hsv2rgb_K.xyz) * 6.0 - hsv2rgb_K.www);
        return c.z * mix(hsv2rgb_K.xxx, clamp(p - hsv2rgb_K.xxx, 0.0, 1.0), c.y);
      }
      #define HSV2RGB(c)  (c.z * mix(hsv2rgb_K.xxx, clamp(abs(fract(c.xxx + hsv2rgb_K.xyz) * 6.0 - hsv2rgb_K.www) - hsv2rgb_K.xxx, 0.0, 1.0), c.y))

      #define TOLERANCE           0.0001
      #define MAX_RAY_LENGTH      10.0
      #define MAX_RAY_MARCHES     80
      #define NORM_OFF            0.005

      const vec3 sunCol    = HSV2RGB(vec3(0.6, 0.95, 1E-2));
      const vec3 sunDir    = normalize(vec3(0.,0., 1.));

      const vec3 lightCol0 = HSV2RGB(vec3(0.7, 0.85, 1.0));
      const vec3 lightPos0 = 4.0*vec3(1.0, 1.0, -2.0);

      const vec3 lightCol1 = HSV2RGB(vec3(0.8, 0.75, 1.0));
      const vec3 lightPos1 = 2.0*vec3(-1.0, -1.0, -2.0);
        
      const vec3 bottomBoxCol = HSV2RGB(vec3(0.7, 0.80, 0.5));
      const vec3 topBoxCol    = HSV2RGB(vec3(0.57, 0.90, 1.));
        
      mat3 rot(vec3 d, vec3 z) {
        vec3  v = cross( z, d );
        float c = dot( z, d );
        float k = 1.0/(1.0+c);

        return mat3( v.x*v.x*k + c,     v.y*v.x*k - v.z,    v.z*v.x*k + v.y,
                     v.x*v.y*k + v.z,   v.y*v.y*k + c,      v.z*v.y*k - v.x,
                     v.x*v.z*k - v.y,   v.y*v.z*k + v.x,    v.z*v.z*k + c    );
      }

      vec3 aces_approx(vec3 v) {
        v = max(v, 0.0);
        v *= 0.6;
        float a = 2.51;
        float b = 0.03;
        float c = 2.43;
        float d = 0.59;
        float e = 0.14;
        return clamp((v*(a*v+b))/(v*(c*v+d)+e), 0.0, 1.0);
      }

      float rayPlane(vec3 ro, vec3 rd, vec4 p) {
        return -(dot(ro,p.xyz)+p.w)/dot(rd,p.xyz);
      }

      float box(vec2 p, vec2 b) {
        vec2 d = abs(p)-b;
        return length(max(d,0.0)) + min(max(d.x,d.y),0.0);
      }
        
      mat3 g_rot;

      float sphere4(vec3 p, float r) {
        p*=p;
        return pow(dot(p,p), 0.25) -r;
      }

      float df(vec3 p) {
        p *= g_rot;
        return sphere4(p, 1.);
      }

      #define BACKSTEP
      float rayMarch(vec3 ro, vec3 rd, float tinit, out int iter) {
        float t = tinit;
        #if defined(BACKSTEP)
          vec2 dti = vec2(1e10,0.0);
        #endif  
        int lastI = 0;
        for (int i = 0; i < MAX_RAY_MARCHES; ++i) {
          float d = df(ro + rd*t);
          #if defined(BACKSTEP)
            if (d<dti.x) { dti=vec2(d,t); }
          #endif  
          if (d < TOLERANCE || t > MAX_RAY_LENGTH) {
            break;
          }
          t += d;
          lastI = i;
        }
        #if defined(BACKSTEP)
          if(lastI == MAX_RAY_MARCHES - 1) { t=dti.y; }
        #endif  
        iter = lastI;
        return t;
      }

      vec3 normal(vec3 pos) {
        vec2  eps = vec2(NORM_OFF,0.0);
        vec3 nor;
        nor.x = df(pos+eps.xyy) - df(pos-eps.xyy);
        nor.y = df(pos+eps.yxy) - df(pos-eps.yxy);
        nor.z = df(pos+eps.yyx) - df(pos-eps.yyx);
        return normalize(nor);
      }

      vec3 render0(vec3 ro, vec3 rd) {
        vec3 col = vec3(0.0);
        vec3 ld0 = normalize(lightPos0-ro);
        vec3 ld1 = normalize(lightPos1-ro);
        float tp0  = rayPlane(ro, rd, vec4(0.0, -1.0, 0.0, -5.0));
        float tp1  = rayPlane(ro, rd, vec4(0.0, -1.0, 0.0, 6.0));
        if (tp0 > 0.0) {
          col += bottomBoxCol*exp(-0.5*(length((ro + tp0*rd).xz)));
        }
        if (tp1 > 0.0) {
          vec3 pos  = ro + tp1*rd;
          vec2 pp = pos.xz;
          float db = box(pp, vec2(5.0, 9.0))-3.0;
          col += topBoxCol*rd.y*rd.y*smoothstep(0.25, 0.0, db);
          col += 0.2*topBoxCol*exp(-0.5*max(db, 0.0));
          col += 0.05*sqrt(topBoxCol)*max(-db, 0.0);
        }
        col += 1E-2*lightCol0/(1.002-dot(ld0, rd));
        col += 2E-2*lightCol1/(1.005-dot(ld1, rd));
        col += sunCol/(1.001-dot(sunDir, rd));
        return col; 
      }

      vec3 render1(vec3 ro, vec3 rd) {
        int ii;
        float t = rayMarch(ro, rd, 0., ii);
        vec3 col = render0(ro, rd);
        if (t < MAX_RAY_LENGTH) {
          vec3 p = ro+rd*t;
          vec3 n = normal(p);
          vec3 r = reflect(rd, n);
          vec3 rcol = render0(p, r);
          float fre = 1.0+dot(rd,n);
          fre *= fre;
          fre = mix(0.5, 1.0, fre);
          vec3 ld0 = normalize(lightPos0-p);
          vec3 ld1 = normalize(lightPos1-p);
          float dif0 = pow(max(dot(ld0, n), 0.), 4.0)*0.5;
          float dif1 = pow(max(dot(ld1, n), 0.), 4.0)*0.5;
          col = vec3(0.);
          col += dif0*lightCol0;
          col += dif1*lightCol1;
          col += rcol*fre;
          
          // Original Shadertoy code had texture(iChannel0, tp) here.
          // Since we are rebuilding, we can skip or replace it if it was a recursive texture.
          // For now, let's keep it clean without the recursion.
        }
        return col;
      }

      void main() {
        vec2 fragCoord = gl_FragCoord.xy;
        vec2 q = fragCoord/RESOLUTION.xy;
        vec2 p = -1. + 2. * q;
        p.x *= RESOLUTION.x/RESOLUTION.y;

        float a = TIME*0.25;
        vec3 r0 = vec3(1.0, sin(vec2(sqrt(0.5), 1.0)*a));
        vec3 r1 = vec3(cos(vec2(sqrt(0.5), 1.0)*a), 1.0);
        g_rot = rot(normalize(r0), normalize(r1));

        vec3 ro = vec3(0.0, 0.5, -3.0);
        vec3 la = vec3(0.0);
        vec3 ww = normalize(la-ro);
        vec3 uu = normalize(cross(vec3(0.,1.,0.), ww));
        vec3 vv = cross(ww, uu);
        vec3 rd = normalize(p.x*uu + p.y*vv + 2.*ww);

        vec3 col = render1(ro, rd);
        col -= 4E-2*vec3(1.,2.,3.).zyx*(length(p)+0.25); 
        col = aces_approx(col);
        col = sqrt(col);
        gl_FragColor = vec4(col, 1.0);
      }
    `;

        const fragmentShaderSourceFXAA = `
      precision highp float;
      uniform sampler2D iChannel0;
      uniform vec2 iResolution;

      #define RESOLUTION iResolution

      vec4 fxaa(sampler2D tex, vec2 uv, vec2 texelSz) {
        const float span_max = 8.0;
        const float reduce_min = (1.0/128.0);
        const float reduce_mul = (1.0/32.0);
        const vec3 luma = vec3(0.299, 0.587, 0.114);

        vec3 rgbCC = texture2D(tex, uv).rgb;
        vec3 rgb00 = texture2D(tex, uv+vec2(-0.5,-0.5)*texelSz).rgb;
        vec3 rgb10 = texture2D(tex, uv+vec2(+0.5,-0.5)*texelSz).rgb;
        vec3 rgb01 = texture2D(tex, uv+vec2(-0.5,+0.5)*texelSz).rgb;
        vec3 rgb11 = texture2D(tex, uv+vec2(+0.5,+0.5)*texelSz).rgb;

        float lumaCC = dot(rgbCC, luma);
        float luma00 = dot(rgb00, luma);
        float luma10 = dot(rgb10, luma);
        float luma01 = dot(rgb01, luma);
        float luma11 = dot(rgb11, luma);

        vec2 dir = vec2((luma01 + luma11) - (luma00 + luma10), (luma00 + luma01) - (luma10 + luma11));
        float dirReduce = max((luma00 + luma10 + luma01 + luma11) * reduce_mul, reduce_min);
        float rcpDir = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
        dir = clamp(dir * rcpDir, -span_max, span_max) * texelSz.xy;

        vec4 A = 0.5 * (texture2D(tex, uv - dir * (1.0/6.0)) + texture2D(tex, uv + dir * (1.0/6.0)));
        vec4 B = A * 0.5 + 0.25 * (texture2D(tex, uv - dir * (0.5)) + texture2D(tex, uv + dir * (0.5)));

        float lumaMin = min(lumaCC, min(min(luma00, luma10), min(luma01, luma11)));
        float lumaMax = max(lumaCC, max(max(luma00, luma10), max(luma01, luma11)));
        float lumaB = dot(B.rgb, luma);

        return ((lumaB < lumaMin) || (lumaB > lumaMax)) ? A : B;
      }

      void main() {
        vec2 isz = 1.0/RESOLUTION.xy;
        vec2 q = gl_FragCoord.xy * isz;
        gl_FragColor = fxaa(iChannel0, q, sqrt(2.0)*isz);
      }
    `;

        const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
            const shader = gl.createShader(type);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error('Shader compile error:', gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const createProgram = (gl: WebGLRenderingContext, vsSource: string, fsSource: string) => {
            const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
            const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
            if (!vs || !fs) return null;
            const program = gl.createProgram();
            if (!program) return null;
            gl.attachShader(program, vs);
            gl.attachShader(program, fs);
            gl.linkProgram(program);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                console.error('Program link error:', gl.getProgramInfoLog(program));
                return null;
            }
            return program;
        };

        const programMain = createProgram(gl, vertexShaderSource, fragmentShaderSourceMain);
        const programFXAA = createProgram(gl, vertexShaderSource, fragmentShaderSourceFXAA);
        if (!programMain || !programFXAA) return;

        const positions = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

        // FBO setup for FXAA
        const texture = gl.createTexture();
        const fb = gl.createFramebuffer();

        const updateFBO = () => {
            const width = canvas.clientWidth * window.devicePixelRatio;
            const height = canvas.clientHeight * window.devicePixelRatio;
            canvas.width = width;
            canvas.height = height;

            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

            gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        };

        window.addEventListener('resize', updateFBO);
        updateFBO();

        let animationFrameId: number;
        const startTime = performance.now();

        const render = () => {
            const time = (performance.now() - startTime) / 1000;

            // Pass 1: Main Render
            gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.useProgram(programMain);

            const posLocMain = gl.getAttribLocation(programMain, 'position');
            gl.enableVertexAttribArray(posLocMain);
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.vertexAttribPointer(posLocMain, 2, gl.FLOAT, false, 0, 0);

            gl.uniform1f(gl.getUniformLocation(programMain, 'iTime'), time);
            gl.uniform2f(gl.getUniformLocation(programMain, 'iResolution'), canvas.width, canvas.height);
            gl.drawArrays(gl.TRIANGLES, 0, 6);

            // Pass 2: FXAA
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.useProgram(programFXAA);

            const posLocFXAA = gl.getAttribLocation(programFXAA, 'position');
            gl.enableVertexAttribArray(posLocFXAA);
            gl.vertexAttribPointer(posLocFXAA, 2, gl.FLOAT, false, 0, 0);

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.uniform1i(gl.getUniformLocation(programFXAA, 'iChannel0'), 0);
            gl.uniform2f(gl.getUniformLocation(programFXAA, 'iResolution'), canvas.width, canvas.height);
            gl.drawArrays(gl.TRIANGLES, 0, 6);

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', updateFBO);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: '100%', height: '100%', display: 'block' }}
        />
    );
};

export default ShaderCube;
