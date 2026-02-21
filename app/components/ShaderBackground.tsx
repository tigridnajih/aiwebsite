'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_speed;
  uniform sampler2D u_waterTexture;
  uniform float u_waterStrength;
  uniform float u_ripple_time;
  uniform vec2 u_ripple_position;
  uniform float u_ripple_strength;
  
  varying vec2 vUv;

  vec4 cosmicOcean(vec2 u, float t) {
    vec2 p = vec2(u.x * 0.2, u.y);
    float a=0., d=0., i=0.;
    for (; i < 8.; d += sin(i++ * p.y + a + t*0.08))
       a += cos(i - d + 0.1 * t - a * p.x);
    // Darkened the base blues
    vec3 c = mix(vec3(0,0.02,0.1), vec3(0.05,0.1,0.4), smoothstep(-1.,1.,cos(a)));
    // Increased black dominance by adjusting the exponent and step
    c = mix(c, vec3(0.0,0.0,0.0), pow(smoothstep(0.3,1.,sin(d*2.)), 2.5));
    return vec4(c, 1.0);
  }

  void main() {
    vec2 r = u_resolution;
    vec2 FC = gl_FragCoord.xy;
    vec2 screenP = (FC.xy * 2.0 - r) / r.y;
    
    vec2 wCoord = vec2(FC.x / r.x, FC.y / r.y);
    float waterHeight = texture2D(u_waterTexture, wCoord).r;
    float waterInfluence = clamp(waterHeight * u_waterStrength, -0.5, 0.5);
    
    // Get gradient background
    vec2 gradientUV = screenP;

// Continuous baseline turbulence
float baseNoise =
    sin(screenP.x * 1.7 + u_time * 0.3) *
    cos(screenP.y * 1.3 - u_time * 0.25);

float swirl =
    sin((screenP.x + screenP.y) * 0.8 + u_time * 0.15);

gradientUV += vec2(baseNoise * 0.08, swirl * 0.06);
    float totalWaterInfluence = clamp(waterInfluence * u_waterStrength, -0.8, 0.8);
    
    // Apply water distortion to gradient
    gradientUV += vec2(totalWaterInfluence * 0.3, totalWaterInfluence * 0.2);
    
    // Add ripple effects
    float rippleTime = u_time - u_ripple_time;
    vec2 ripplePos = u_ripple_position * r;
    float rippleDist = distance(FC.xy, ripplePos);
    
    float clickRipple = 0.0;
    if (rippleTime < 3.0 && rippleTime > 0.0) {
      float rippleRadius = rippleTime * 150.0;
      float rippleWidth = 30.0;
      float rippleDecay = 1.0 - rippleTime / 3.0;
      clickRipple = exp(-abs(rippleDist - rippleRadius) / rippleWidth) * rippleDecay * u_ripple_strength;
    }
    
    float totalWaterEffect = totalWaterInfluence + clickRipple * 0.2;
    gradientUV += vec2(totalWaterEffect * 0.4, totalWaterEffect * 0.3);
    
    float modifiedTime = u_time * u_speed + totalWaterEffect * 2.0;
    vec4 gradientColor = cosmicOcean(gradientUV, modifiedTime);
    
    gl_FragColor = vec4(gradientColor.rgb, 1.0);
  }
`;

export default function ShaderBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const waterSettingsRef = useRef({
    resolution: 256,
    damping: 0.913,
    tension: 0.02,
    rippleStrength: 0.1,
    mouseIntensity: 0.2,
    clickIntensity: 1.0,
    rippleRadius: 8,
    splatForce: 50000,
    splatThickness: 0.3,
    vorticityInfluence: 0.2,
    swirlIntensity: 0.2,
    pressure: 0.5,
    velocityDissipation: 0.08,
    densityDissipation: 1.0,
    displacementScale: 0.01,
    impactForce: 50000,
    spiralIntensity: 0.4,
    rippleSize: 0.2
  });
  const waterBuffersRef = useRef<any>(null);
  const waterTextureRef = useRef<THREE.DataTexture | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    const container = containerRef.current;
    const initialWidth = container.clientWidth;
    const initialHeight = container.clientHeight;
    const pixelRatio = Math.min(window.devicePixelRatio, 2);

    renderer.setSize(initialWidth, initialHeight);
    renderer.setPixelRatio(pixelRatio);
    container.appendChild(renderer.domElement);

    const waterSettings = waterSettingsRef.current;
    const resolution = waterSettings.resolution;

    const waterBuffers = {
      current: new Float32Array(resolution * resolution),
      previous: new Float32Array(resolution * resolution),
      velocity: new Float32Array(resolution * resolution * 2),
      vorticity: new Float32Array(resolution * resolution),
      pressure: new Float32Array(resolution * resolution)
    };
    waterBuffersRef.current = waterBuffers;

    for (let i = 0; i < resolution * resolution; i++) {
      waterBuffers.current[i] = 0.0;
      waterBuffers.previous[i] = 0.0;
      waterBuffers.velocity[i * 2] = 0.0;
      waterBuffers.velocity[i * 2 + 1] = 0.0;
      waterBuffers.vorticity[i] = 0.0;
      waterBuffers.pressure[i] = 0.0;
    }

    const waterTexture = new THREE.DataTexture(
      waterBuffers.current,
      waterSettings.resolution,
      waterSettings.resolution,
      THREE.RedFormat,
      THREE.FloatType
    );
    waterTexture.minFilter = THREE.LinearFilter;
    waterTexture.magFilter = THREE.LinearFilter;
    waterTexture.needsUpdate = true;
    waterTextureRef.current = waterTexture;

    const settings = {
      animationSpeed: 1.3,
      waterStrength: 0.55,
      rippleStrength: 0.3,
      motionDecay: 0.08,
      rippleDecay: 1.0,
      waveHeight: 0.01,
      swirlingMotion: 0.2
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_time: { value: 0.0 },
        u_resolution: { value: new THREE.Vector2(initialWidth * pixelRatio, initialHeight * pixelRatio) },
        u_speed: { value: settings.animationSpeed },
        u_waterTexture: { value: waterTexture },
        u_waterStrength: { value: settings.waterStrength },
        u_ripple_time: { value: -10.0 },
        u_ripple_position: { value: new THREE.Vector2(0.5, 0.5) },
        u_ripple_strength: { value: settings.rippleStrength }
      }
    });
    materialRef.current = material;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    camera.position.z = 1;

    // Add moving dots (Particle System)
    const particlesCount = 150;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);
    const velocityArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position (normalized -1 to 1)
      posArray[i] = (Math.random() - 0.5) * 2;
      posArray[i + 1] = (Math.random() - 0.5) * 2;
      posArray[i + 2] = 0.5; // Slightly in front of the background

      // Velocity
      velocityArray[i] = (Math.random() - 0.5) * 0.002;
      velocityArray[i + 1] = (Math.random() - 0.5) * 0.002;
      velocityArray[i + 2] = 0;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    const clock = new THREE.Clock();
    let animationFrameId: number;

    function updateParticles() {
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount * 3; i += 3) {
        // Apply velocity
        positions[i] += velocityArray[i];
        positions[i + 1] += velocityArray[i + 1];

        // Wrap around logic
        if (positions[i] > 1.2) positions[i] = -1.2;
        if (positions[i] < -1.2) positions[i] = 1.2;
        if (positions[i + 1] > 1.2) positions[i + 1] = -1.2;
        if (positions[i + 1] < -1.2) positions[i + 1] = 1.2;
      }
      particlesGeometry.attributes.position.needsUpdate = true;
    }

    function updateWaterSimulation() {
      if (!waterBuffersRef.current || !waterTextureRef.current) return;

      const waterBuffers = waterBuffersRef.current;
      const waterTexture = waterTextureRef.current;

      const { current, previous, velocity, vorticity } = waterBuffers;
      const { damping, resolution, tension } = waterSettingsRef.current;
      const safeTension = Math.min(tension, 0.05);
      const velocityDissipation = settings.motionDecay;
      const densityDissipation = settings.rippleDecay;
      const vorticityInfluence = Math.min(Math.max(settings.swirlingMotion, 0.0), 0.5);

      for (let i = 0; i < resolution * resolution * 2; i++) {
        velocity[i] *= 1.0 - velocityDissipation;
      }

      for (let i = 1; i < resolution - 1; i++) {
        for (let j = 1; j < resolution - 1; j++) {
          const index = i * resolution + j;
          const left = velocity[(index - 1) * 2 + 1];
          const right = velocity[(index + 1) * 2 + 1];
          const bottom = velocity[(index - resolution) * 2];
          const top = velocity[(index + resolution) * 2];
          vorticity[index] = (right - left - (top - bottom)) * 0.5;
        }
      }

      if (vorticityInfluence > 0.001) {
        for (let i = 1; i < resolution - 1; i++) {
          for (let j = 1; j < resolution - 1; j++) {
            const index = i * resolution + j;
            const velIndex = index * 2;
            const left = Math.abs(vorticity[index - 1]);
            const right = Math.abs(vorticity[index + 1]);
            const bottom = Math.abs(vorticity[index - resolution]);
            const top = Math.abs(vorticity[index + resolution]);
            const gradX = (right - left) * 0.5;
            const gradY = (top - bottom) * 0.5;
            const length = Math.sqrt(gradX * gradX + gradY * gradY) + 1e-5;
            const safeVorticity = Math.max(-1.0, Math.min(1.0, vorticity[index]));
            const forceX = (gradY / length) * safeVorticity * vorticityInfluence * 0.1;
            const forceY = (-gradX / length) * safeVorticity * vorticityInfluence * 0.1;
            velocity[velIndex] += Math.max(-0.1, Math.min(0.1, forceX));
            velocity[velIndex + 1] += Math.max(-0.1, Math.min(0.1, forceY));
          }
        }
      }

      for (let i = 1; i < resolution - 1; i++) {
        for (let j = 1; j < resolution - 1; j++) {
          const index = i * resolution + j;
          const velIndex = index * 2;
          const top = previous[index - resolution];
          const bottom = previous[index + resolution];
          const left = previous[index - 1];
          const right = previous[index + 1];

          current[index] = (top + bottom + left + right) / 2 - current[index];
          current[index] = current[index] * damping + previous[index] * (1 - damping);
          current[index] += (0 - previous[index]) * safeTension;

          const velMagnitude = Math.sqrt(velocity[velIndex] * velocity[velIndex] + velocity[velIndex + 1] * velocity[velIndex + 1]);
          const safeVelInfluence = Math.min(velMagnitude * settings.waveHeight, 0.1);
          current[index] += safeVelInfluence;
          current[index] *= 1.0 - densityDissipation * 0.01;
          current[index] = Math.max(-2.0, Math.min(2.0, current[index]));
        }
      }

      for (let i = 0; i < resolution; i++) {
        current[i] = 0;
        current[(resolution - 1) * resolution + i] = 0;
        velocity[i * 2] = 0;
        velocity[i * 2 + 1] = 0;
        velocity[((resolution - 1) * resolution + i) * 2] = 0;
        velocity[((resolution - 1) * resolution + i) * 2 + 1] = 0;
        current[i * resolution] = 0;
        current[i * resolution + (resolution - 1)] = 0;
        velocity[i * resolution * 2] = 0;
        velocity[i * resolution * 2 + 1] = 0;
        velocity[(i * resolution + (resolution - 1)) * 2] = 0;
        velocity[(i * resolution + (resolution - 1)) * 2 + 1] = 0;
      }

      const temp = waterBuffers.current;
      waterBuffers.current = waterBuffers.previous;
      waterBuffers.previous = temp;

      waterTexture.image.data = waterBuffers.current;
      waterTexture.needsUpdate = true;
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      material.uniforms.u_time.value = clock.getElapsedTime();
      updateWaterSimulation();
      updateParticles();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      waterTexture.dispose();
    };
  }, []);

  const addRipple = (clientX: number, clientY: number, strength = 1.0) => {
    if (!containerRef.current || !waterBuffersRef.current || !waterSettingsRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    if (x < 0 || x > rect.width || y < 0 || y > rect.height) return;

    const { resolution, rippleRadius, rippleSize, impactForce, spiralIntensity } = waterSettingsRef.current;
    const normalizedX = x / rect.width;
    const normalizedY = 1.0 - y / rect.height;

    const texX = Math.floor(normalizedX * resolution);
    const texY = Math.floor(normalizedY * resolution);
    const radius = Math.max(rippleRadius, Math.floor(rippleSize * resolution));
    const rippleStrength = strength * (impactForce / 100000);
    const radiusSquared = radius * radius;

    const waterBuffers = waterBuffersRef.current;

    for (let i = -radius; i <= radius; i++) {
      for (let j = -radius; j <= radius; j++) {
        const distanceSquared = i * i + j * j;
        if (distanceSquared <= radiusSquared) {
          const posX = texX + i;
          const posY = texY + j;
          if (posX >= 0 && posX < resolution && posY >= 0 && posY < resolution) {
            const index = posY * resolution + posX;
            const velIndex = index * 2;
            const distance = Math.sqrt(distanceSquared);
            const falloff = 1.0 - distance / radius;
            const rippleValue = Math.cos(distance / radius * Math.PI * 0.5) * rippleStrength * falloff;

            waterBuffers.previous[index] += rippleValue;

            const angle = Math.atan2(j, i);
            const velocityStrength = rippleValue * spiralIntensity;
            waterBuffers.velocity[velIndex] += Math.cos(angle) * velocityStrength;
            waterBuffers.velocity[velIndex + 1] += Math.sin(angle) * velocityStrength;

            const swirlAngle = angle + Math.PI * 0.5;
            const swirlStrength = Math.min(velocityStrength * 0.3, 0.1);
            waterBuffers.velocity[velIndex] += Math.cos(swirlAngle) * swirlStrength;
            waterBuffers.velocity[velIndex + 1] += Math.sin(swirlAngle) * swirlStrength;
          }
        }
      }
    }
  };

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      addRipple(event.clientX, event.clientY, waterSettingsRef.current.mouseIntensity);
    };

    const onClick = (event: MouseEvent) => {
      addRipple(event.clientX, event.clientY, waterSettingsRef.current.clickIntensity);
    };

    const onResize = () => {
      if (!containerRef.current || !rendererRef.current || !materialRef.current) return;
      const container = containerRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;
      const pixelRatio = Math.min(window.devicePixelRatio, 2);

      rendererRef.current.setSize(width, height);
      rendererRef.current.setPixelRatio(pixelRatio);
      materialRef.current.uniforms.u_resolution.value.set(width * pixelRatio, height * pixelRatio);
    }

    const resizeObserver = new ResizeObserver(() => {
      onResize();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
