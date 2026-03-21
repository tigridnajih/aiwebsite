'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export default function CityBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- BASIC parameters ---
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    if (width > 800) {
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    containerRef.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(50, width / height, 1, 500);
    camera.position.set(0, 5, 20);

    const scene = new THREE.Scene();
    const city = new THREE.Object3D();
    const smoke = new THREE.Object3D();
    const town = new THREE.Object3D();

    let createCarPos = true;
    const uSpeed = 0.001;

    // --- FOG background ---
    const setcolor = 0xF02050; 
    
    scene.background = new THREE.Color(setcolor);
    scene.fog = new THREE.Fog(setcolor, 10, 35);

    // --- RANDOM Function ---
    function mathRandom(num = 8) {
      return -Math.random() * num + Math.random() * num;
    }

    // --- CHANGE building colors ---
    let setTintNum = true;
    function setTintColor() {
      const setColor = 0x000000; // Black buildings
      setTintNum = !setTintNum;
      return setColor;
    }

    // --- CREATE City ---
    function initCity() {
      for (let i = 1; i < 100; i++) {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({
          color: setTintColor(),
          side: THREE.DoubleSide
        });
        const wmaterial = new THREE.MeshLambertMaterial({
          color: 0xFFFFFF,
          wireframe: true,
          transparent: true,
          opacity: 0.03,
          side: THREE.DoubleSide
        });

        const cube = new THREE.Mesh(geometry, material);
        const floor = new THREE.Mesh(geometry, material);
        const wfloor = new THREE.Mesh(geometry, wmaterial);

        cube.add(wfloor);
        cube.castShadow = true;
        cube.receiveShadow = true;
        
        floor.scale.y = 0.05;
        cube.scale.y = 0.1 + Math.abs(mathRandom(8));
        
        const cubeWidth = 0.9;
        cube.scale.x = cube.scale.z = cubeWidth + mathRandom(1 - cubeWidth);
        cube.position.x = Math.round(mathRandom());
        cube.position.z = Math.round(mathRandom());
        cube.position.y = cube.scale.y / 2; // Fixed: Align to ground

        floor.position.set(cube.position.x, 0, cube.position.z);

        town.add(floor);
        town.add(cube);
      }

      // Particulars
      const gmaterial = new THREE.MeshToonMaterial({ color: 0xFFFF00, side: THREE.DoubleSide });
      const gparticular = new THREE.CircleGeometry(0.01, 3);
      const aparticular = 5;

      for (let h = 1; h < 300; h++) {
        const particular = new THREE.Mesh(gparticular, gmaterial);
        particular.position.set(mathRandom(aparticular), mathRandom(aparticular), mathRandom(aparticular));
        particular.rotation.set(mathRandom(), mathRandom(), mathRandom());
        smoke.add(particular);
      }

      const pmaterial = new THREE.MeshPhongMaterial({
        color: 0x000000,
        side: THREE.DoubleSide,
        opacity: 0.9,
        transparent: true
      });
      const pgeometry = new THREE.PlaneGeometry(60, 60);
      const pelement = new THREE.Mesh(pgeometry, pmaterial);
      pelement.rotation.x = -90 * Math.PI / 180;
      pelement.position.y = -0.001;
      pelement.receiveShadow = true;

      city.add(pelement);
    }

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 4);
    const lightFront = new THREE.SpotLight(0xFFFFFF, 20, 10);
    const lightBack = new THREE.PointLight(0xFFFFFF, 0.5);

    lightFront.rotation.x = 45 * Math.PI / 180;
    lightFront.rotation.z = -45 * Math.PI / 180;
    lightFront.position.set(5, 5, 5);
    lightFront.castShadow = true;
    lightFront.shadow.mapSize.width = 6000;
    lightFront.shadow.mapSize.height = 6000;
    lightFront.penumbra = 0.1;
    lightBack.position.set(0, 6, 0);

    smoke.position.y = 2;

    scene.add(ambientLight);
    city.add(lightFront);
    scene.add(lightBack);
    scene.add(city);
    city.add(smoke);
    city.add(town);

    // --- GRID Helper ---
    const gridHelper = new THREE.GridHelper(60, 120, 0xFF0000, 0x000000);
    city.add(gridHelper);

    // --- MOUSE function ---
    const mouse = new THREE.Vector2(0, 0);
    function onMouseMove(event: MouseEvent) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener('mousemove', onMouseMove);

    // --- LINES / CAR world ---
    const createCars = (cScale = 2, cPos = 20, cColor = 0xFFFF00) => {
      const cMat = new THREE.MeshToonMaterial({ color: cColor, side: THREE.DoubleSide });
      const cGeo = new THREE.BoxGeometry(1, cScale / 40, cScale / 40);
      const cElem = new THREE.Mesh(cGeo, cMat);
      const cAmp = 3;

      if (createCarPos) {
        createCarPos = false;
        cElem.position.x = -cPos;
        cElem.position.z = mathRandom(cAmp);
        gsap.to(cElem.position, {
          x: cPos,
          duration: 3,
          repeat: -1,
          yoyo: true,
          delay: Math.abs(mathRandom(3))
        });
      } else {
        createCarPos = true;
        cElem.position.x = mathRandom(cAmp);
        cElem.position.z = -cPos;
        cElem.rotation.y = 90 * Math.PI / 180;
        gsap.to(cElem.position, {
          z: cPos,
          duration: 5,
          repeat: -1,
          yoyo: true,
          delay: Math.abs(mathRandom(3)),
          ease: "power1.inOut"
        });
      }
      cElem.receiveShadow = true;
      cElem.castShadow = true;
      cElem.position.y = Math.abs(mathRandom(5));
      city.add(cElem);
    };

    function generateLines() {
      for (let i = 0; i < 60; i++) {
        createCars(0.1, 20);
      }
    }

    // --- ANIMATE ---
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      city.rotation.y -= ((mouse.x * 8) - camera.rotation.y) * uSpeed;
      city.rotation.x -= (-(mouse.y * 2) - camera.rotation.x) * uSpeed;
      if (city.rotation.x < -0.05) city.rotation.x = -0.05;
      else if (city.rotation.x > 1) city.rotation.x = 1;

      smoke.rotation.y += 0.01;
      smoke.rotation.x += 0.01;

      camera.lookAt(city.position);
      renderer.render(scene, camera);
    };

    // Start
    generateLines();
    initCity();
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      // Dispose geometries/materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach(m => m.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ overflow: 'hidden' }}
    />
  );
}
