'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  varying vec2 vUv;

  // Simplex 3D noise (needed for smooth time variation)
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

    i = mod(i, 289.0 );
    vec4 p = permute( permute( permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    float n_ = 1.0/7.0;
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

  // Get high-gloss heightmap
  float getHeight(vec2 p) {
    float time = u_time * 0.15;
    
    // Mouse turbulence
    vec2 m = (u_mouse / u_resolution.xy) * 2.0 - 1.0;
    float mDist = distance(p, m);
    float mouseTurb = 1.0 - smoothstep(0.0, 0.8, mDist);
    
    // Multi-layered thick fluid noise
    float h = snoise(vec3(p * 1.5, time)) * 0.5;
    h += snoise(vec3(p * 3.0 + vec2(time*0.2, -time*0.1), time * 0.5)) * 0.25;
    h += snoise(vec3(p * 6.0, time * 0.2)) * 0.125;
    
    // Apply mouse turbulence
    h += mouseTurb * 0.2 * snoise(vec3(p * 10.0, time * 2.0));
    
    return h;
  }

  void main() {
    vec2 res = u_resolution.xy;
    float ratio = res.x / res.y;
    vec2 uv = (gl_FragCoord.xy * 2.0 - res) / min(res.x, res.y);
    
    // Calculate normal from height differences
    float e = 0.01;
    float h = getHeight(uv);
    float hx = getHeight(uv + vec2(e, 0.0));
    float hy = getHeight(uv + vec2(0.0, e));
    
    vec3 normal = normalize(vec3((hx - h) / e, (hy - h) / e, 1.0));
    
    // Fluid Light Rig
    vec3 lightDir = normalize(vec3(sin(u_time * 0.3), cos(u_time * 0.2), 1.5));
    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    
    // Diffuse & Specular (Shining)
    float diff = max(dot(normal, lightDir), 0.0);
    vec3 reflectDir = reflect(-lightDir, normal);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 40.0); // High sharpness for high gloss
    
    // Palette
    vec3 baseColor = vec3(0.01, 0.02, 0.05); // Near black
    vec3 fluidColor = mix(
        vec3(0.05, 0.1, 0.4),  // Deep Blue
        vec3(0.3, 0.1, 0.6),  // Deep Purple
        smoothstep(-0.5, 0.5, h)
    );
    
    // Accumulate shading
    vec3 finalColor = baseColor;
    finalColor += fluidColor * diff * 1.5;
    finalColor += vec3(1.0, 1.0, 1.0) * spec * 0.8; // Bright white specular reflection
    
    // Add glowing "rims" for that ultra-premium feel
    float rim = 1.0 - max(dot(normal, viewDir), 0.0);
    finalColor += fluidColor * pow(rim, 3.0) * 0.5;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export default function ShaderBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });

    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2() },
        u_mouse: { value: new THREE.Vector2() },
      },
      vertexShader,
      fragmentShader,
    });

    materialRef.current = material;
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const handleResize = () => {
      const { clientWidth, clientHeight } = containerRef.current!;
      const dpr = Math.min(window.devicePixelRatio, 2);
      renderer.setPixelRatio(dpr);
      renderer.setSize(clientWidth, clientHeight);
      material.uniforms.u_resolution.value.set(clientWidth * dpr, clientHeight * dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.set(e.clientX, window.innerHeight - e.clientY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    let animationFrameId: number;
    const animate = (time: number) => {
      material.uniforms.u_time.value = time * 0.001;
      material.uniforms.u_mouse.value.copy(mouseRef.current);
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
