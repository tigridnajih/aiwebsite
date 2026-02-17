'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const InteractiveBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // --- Scene Setup ---
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        const pixelRatio = Math.min(window.devicePixelRatio, 2);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(pixelRatio);
        containerRef.current.appendChild(renderer.domElement);

        // --- Water Simulation State ---
        const waterSettings = {
            resolution: 256,
            damping: 0.913,
            tension: 0.02,
            rippleRadius: 8,
            impactForce: 50000,
            rippleSize: 0.1,
            spiralIntensity: 0.2,
            swirlingMotion: 0.2,
            waveHeight: 0.01,
            motionDecay: 0.08,
            rippleDecay: 1.0,
        };

        const res = waterSettings.resolution;
        let current = new Float32Array(res * res);
        let previous = new Float32Array(res * res);
        let velocity = new Float32Array(res * res * 2);
        let vorticity = new Float32Array(res * res);

        const waterTexture = new THREE.DataTexture(
            current,
            res,
            res,
            THREE.RedFormat,
            THREE.FloatType
        );
        waterTexture.minFilter = THREE.LinearFilter;
        waterTexture.magFilter = THREE.LinearFilter;

        // --- Shaders ---
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
            uniform sampler2D u_waterTexture;
            uniform float u_waterStrength;
            uniform int u_gradientTheme;
            varying vec2 vUv;

            vec4 electricPlasma(vec2 u, float t) {
                float a=0., d=0., i=0.;
                for (; i < 8.; d += sin(i++ * u.y + a))
                    a += sin(i - d + 0.15 * t - a * u.x);
                vec3 c = mix(vec3(0.1,0.0,0.8), vec3(0.5,0.2,1.0), .5+.5*cos(a));
                c = mix(c, vec3(1.0), .5+.5*sin(d));
                return vec4(c, 1.0);
            }

            vec4 cosmicOcean(vec2 u, float t) {
                vec2 p = vec2(u.x * 0.2, u.y);
                float a=0., d=0., i=0.;
                for (; i < 8.; d += sin(i++ * p.y + a + t*0.08))
                    a += cos(i - d + 0.1 * t - a * p.x);
                vec3 c = mix(vec3(0,0.05,0.2), vec3(0.1,0.2,0.7), smoothstep(-1.,1.,cos(a)));
                c = mix(c, vec3(0.8,0.8,1.0), pow(smoothstep(0.5,1.,sin(d*2.)), 4.0));
                return vec4(c, 1.0);
            }

            void main() {
                vec2 r = u_resolution;
                vec2 FC = gl_FragCoord.xy;
                vec2 screenP = (FC.xy * 2.0 - r) / r.y;
                
                vec2 wCoord = FC.xy / r.xy;
                float waterHeight = texture2D(u_waterTexture, wCoord).r;
                float waterInfluence = clamp(waterHeight * u_waterStrength, -0.5, 0.5);
                
                vec2 gradientUV = screenP + vec2(waterInfluence * 0.3, waterInfluence * 0.2);
                float modifiedTime = u_time * 1.3 + waterInfluence * 2.0;

                // Simple blend between a few themes or just one for now
                gl_FragColor = cosmicOcean(gradientUV, modifiedTime);
            }
        `;

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                u_time: { value: 0.0 },
                u_resolution: { value: new THREE.Vector2(window.innerWidth * pixelRatio, window.innerHeight * pixelRatio) },
                u_waterTexture: { value: waterTexture },
                u_waterStrength: { value: 0.55 },
                u_gradientTheme: { value: 4 } // Cosmic Ocean
            }
        });

        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
        scene.add(mesh);
        camera.position.z = 1;

        // --- Interaction ---
        const addRipple = (x: number, y: number, strength: number = 1.0) => {
            const normalizedX = x / window.innerWidth;
            const normalizedY = 1.0 - y / window.innerHeight;
            const texX = Math.floor(normalizedX * res);
            const texY = Math.floor(normalizedY * res);
            const radius = waterSettings.rippleRadius;
            const radiusSquared = radius * radius;

            for (let i = -radius; i <= radius; i++) {
                for (let j = -radius; j <= radius; j++) {
                    if (i * i + j * j <= radiusSquared) {
                        const posX = texX + i;
                        const posY = texY + j;
                        if (posX >= 0 && posX < res && posY >= 0 && posY < res) {
                            previous[posY * res + posX] += strength * 0.15;
                        }
                    }
                }
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            addRipple(e.clientX, e.clientY, 1.0);
        };

        window.addEventListener('mousemove', handleMouseMove);

        // --- Animation Loop ---
        const clock = new THREE.Clock();
        const animate = () => {
            const elapsed = clock.getElapsedTime();
            material.uniforms.u_time.value = elapsed;

            // Water simulation step
            for (let i = 1; i < res - 1; i++) {
                for (let j = 1; j < res - 1; j++) {
                    const idx = i * res + j;
                    current[idx] = (previous[idx - 1] + previous[idx + 1] + previous[idx - res] + previous[idx + res]) / 2 - current[idx];
                    current[idx] *= waterSettings.damping;
                }
            }
            [current, previous] = [previous, current];
            waterTexture.image.data = current;
            waterTexture.needsUpdate = true;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        // --- Resize ---
        const handleResize = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const dpr = Math.min(window.devicePixelRatio, 2);
            renderer.setSize(w, h);
            renderer.setPixelRatio(dpr);
            material.uniforms.u_resolution.value.set(w * dpr, h * dpr);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }} />
    );
};

export default InteractiveBackground;
