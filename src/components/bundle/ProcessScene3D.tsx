"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export type PlacementMode = "center" | "offset" | "cinematic";

interface ProcessScene3DProps {
  progress: number;
  activeChapter: number;
  placementMode?: PlacementMode;
}

export function ProcessScene3D({
  progress,
  activeChapter,
  placementMode = "center",
}: ProcessScene3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(progress);
  const chapterRef = useRef(activeChapter);
  const placementRef = useRef(placementMode);
  const prevProgressRef = useRef(progress);

  progressRef.current = progress;
  chapterRef.current = activeChapter;
  placementRef.current = placementMode;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 0, 16);

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // -------------------------------------------------------------
    // STUDIO LIGHTING SYSTEM (WARM TERRACOTTA & OBSIDIAN REFLECTIONS)
    // -------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0x241810, 1.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff3ea, 1.4);
    dirLight.position.set(6, 12, 12);
    scene.add(dirLight);

    const keyLight = new THREE.PointLight(0xf95721, 6.5, 55);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xff8c38, 4.5, 50);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffe2a0, 3.5, 40);
    scene.add(rimLight);

    // Root Transform Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // -------------------------------------------------------------
    // AMBIENT FLUID HORIZON WAVE (SUBTLE LUXURY DEPTH BEHIND OBJECTS)
    // -------------------------------------------------------------
    const waveGeo = new THREE.PlaneGeometry(42, 22, 38, 20);
    const waveMat = new THREE.MeshStandardMaterial({
      color: 0x18100a,
      roughness: 0.35,
      metalness: 0.75,
      transparent: true,
      opacity: 0.22,
      wireframe: false,
    });
    const waveMesh = new THREE.Mesh(waveGeo, waveMat);
    waveMesh.position.set(0, 0, -6);
    scene.add(waveMesh);

    // -------------------------------------------------------------
    // CHAPTER 0: THE SPARK (FACETED LUXURY CRYSTAL & DUAL GIMBALS)
    // -------------------------------------------------------------
    const sparkGroup = new THREE.Group();

    // Outer Faceted Crystal Prism
    const icoGeo = new THREE.IcosahedronGeometry(3.5, 0);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0xf95721,
      roughness: 0.16,
      metalness: 0.84,
      flatShading: true,
      emissive: 0xc34811,
      emissiveIntensity: 0.3,
    });
    const sparkCrystal = new THREE.Mesh(icoGeo, crystalMat);
    sparkGroup.add(sparkCrystal);

    // Inner Glowing Core
    const innerCoreGeo = new THREE.OctahedronGeometry(1.8, 0);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0xfff4e6,
      emissive: 0xffa033,
      emissiveIntensity: 1.0,
      roughness: 0.1,
      metalness: 0.2,
      flatShading: true,
    });
    const sparkInnerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    sparkGroup.add(sparkInnerCore);

    // Satin Gold Orbital Ring
    const gimbalGeo1 = new THREE.TorusGeometry(5.2, 0.09, 16, 100);
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf5a623,
      roughness: 0.2,
      metalness: 0.92,
    });
    const sparkRing1 = new THREE.Mesh(gimbalGeo1, goldMat);
    sparkRing1.rotation.x = Math.PI / 3;
    sparkGroup.add(sparkRing1);

    // Terracotta Outer Ring
    const gimbalGeo2 = new THREE.TorusGeometry(6.2, 0.07, 16, 100);
    const terracottaMat = new THREE.MeshStandardMaterial({
      color: 0xe4642a,
      roughness: 0.24,
      metalness: 0.88,
    });
    const sparkRing2 = new THREE.Mesh(gimbalGeo2, terracottaMat);
    sparkRing2.rotation.y = Math.PI / 3.2;
    sparkGroup.add(sparkRing2);

    masterGroup.add(sparkGroup);

    // -------------------------------------------------------------
    // CHAPTER 1: THE CRAFT (ARCHITECTURAL MONOLITHS & CODE RAILS)
    // -------------------------------------------------------------
    const craftGroup = new THREE.Group();
    const slabs: THREE.Mesh[] = [];

    for (let i = 0; i < 3; i++) {
      const slabGeo = new THREE.BoxGeometry(5.6, 3.6, 0.24);
      const slabMat = new THREE.MeshStandardMaterial({
        color: 0x1e1510,
        roughness: 0.18,
        metalness: 0.88,
      });
      const slabMesh = new THREE.Mesh(slabGeo, slabMat);
      slabMesh.position.z = (i - 1) * 1.6;
      slabMesh.rotation.y = (i - 1) * 0.15;

      // Glowing Edge Rail on Top
      const edgeGeo = new THREE.BoxGeometry(5.64, 0.08, 0.26);
      const edgeMat = new THREE.MeshStandardMaterial({
        color: i === 1 ? 0x38bdf8 : 0xf95721,
        emissive: i === 1 ? 0x38bdf8 : 0xf95721,
        emissiveIntensity: 0.9,
        roughness: 0.1,
      });
      const edgeMesh = new THREE.Mesh(edgeGeo, edgeMat);
      edgeMesh.position.y = 1.78;
      slabMesh.add(edgeMesh);

      craftGroup.add(slabMesh);
      slabs.push(slabMesh);
    }
    masterGroup.add(craftGroup);

    // -------------------------------------------------------------
    // CHAPTER 2: THE POLISH (TITANIUM PHONE MONOLITH & STAGING HALO)
    // -------------------------------------------------------------
    const polishGroup = new THREE.Group();

    // Dark Titanium Phone Chassis
    const phoneGeo = new THREE.BoxGeometry(3.8, 7.6, 0.4);
    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x1a1410,
      roughness: 0.2,
      metalness: 0.94,
    });
    const phoneChassis = new THREE.Mesh(phoneGeo, titaniumMat);
    polishGroup.add(phoneChassis);

    // Ultra-Gloss Front Glass Screen
    const screenGeo = new THREE.PlaneGeometry(3.5, 7.2);
    const screenGlassMat = new THREE.MeshStandardMaterial({
      color: 0x080605,
      roughness: 0.06,
      metalness: 0.7,
    });
    const phoneScreen = new THREE.Mesh(screenGeo, screenGlassMat);
    phoneScreen.position.z = 0.21;
    polishGroup.add(phoneScreen);

    // Dual Camera Bump on Back
    const camBumpGeo = new THREE.BoxGeometry(1.4, 1.4, 0.1);
    const camBumpMat = new THREE.MeshStandardMaterial({
      color: 0x281e18,
      roughness: 0.2,
      metalness: 0.9,
    });
    const camBump = new THREE.Mesh(camBumpGeo, camBumpMat);
    camBump.position.set(-1.0, 2.7, -0.25);
    polishGroup.add(camBump);

    // Glowing Staging Pulse Ring
    const haloGeo = new THREE.TorusGeometry(5.2, 0.07, 16, 100);
    const haloMat = new THREE.MeshStandardMaterial({
      color: 0xf95721,
      emissive: 0xe4642a,
      emissiveIntensity: 0.65,
      roughness: 0.2,
      metalness: 0.85,
    });
    const phoneHalo = new THREE.Mesh(haloGeo, haloMat);
    phoneHalo.rotation.x = Math.PI / 2.3;
    polishGroup.add(phoneHalo);

    masterGroup.add(polishGroup);

    // -------------------------------------------------------------
    // CHAPTER 3: THE DEBUT (DEEP OBSIDIAN GLOBE & ORBIT SATELLITES)
    // -------------------------------------------------------------
    const debutGroup = new THREE.Group();

    // Solid Deep Obsidian Globe
    const globeGeo = new THREE.SphereGeometry(3.9, 48, 48);
    const globeMat = new THREE.MeshStandardMaterial({
      color: 0x140e0a,
      roughness: 0.24,
      metalness: 0.86,
    });
    const globeMesh = new THREE.Mesh(globeGeo, globeMat);
    debutGroup.add(globeMesh);

    // Luminous Atmospheric Horizon Rim (Fresnel BackSide Halo)
    const atmoGeo = new THREE.SphereGeometry(4.06, 36, 36);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: 0xf95721,
      transparent: true,
      opacity: 0.26,
      side: THREE.BackSide,
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    debutGroup.add(atmoMesh);

    // Solid Satellite Orbit Ring 1 (Gold)
    const orbitGeo1 = new THREE.TorusGeometry(5.4, 0.08, 16, 100);
    const orbitRing1 = new THREE.Mesh(orbitGeo1, goldMat);
    orbitRing1.rotation.x = Math.PI / 3;
    debutGroup.add(orbitRing1);

    // Solid Satellite Orbit Ring 2 (Terracotta)
    const orbitGeo2 = new THREE.TorusGeometry(6.2, 0.06, 16, 100);
    const orbitRing2 = new THREE.Mesh(orbitGeo2, terracottaMat);
    orbitRing2.rotation.y = Math.PI / 3.2;
    debutGroup.add(orbitRing2);

    // Global Edge Beacons
    const beaconCoords = [
      [1.8, 2.2, 2.5],
      [-2.2, 1.6, 2.7],
      [2.5, -1.2, 2.6],
      [-1.5, -2.4, 2.5],
      [3.0, 0.5, 2.3],
    ];
    const beaconGeo = new THREE.SphereGeometry(0.16, 16, 16);
    const beaconMat = new THREE.MeshStandardMaterial({
      color: 0x34a853,
      emissive: 0x34a853,
      emissiveIntensity: 0.95,
      roughness: 0.1,
    });
    beaconCoords.forEach(([x, y, z]) => {
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.set(x, y, z).normalize().multiplyScalar(3.96);
      debutGroup.add(beacon);
    });

    masterGroup.add(debutGroup);

    // -------------------------------------------------------------
    // INTERACTIVE MOUSE DRAG & ORBIT PHYSICS
    // -------------------------------------------------------------
    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;
    let dragRotationX = 0;
    let dragRotationY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let scrollVelocity = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;
      container.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2.0;
      targetMouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2.0;

      if (isDragging) {
        const deltaX = e.clientX - prevPointerX;
        const deltaY = e.clientY - prevPointerY;
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;

        dragRotationY += deltaX * 0.008;
        dragRotationX += deltaY * 0.008;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
      if (container) {
        container.style.cursor = "grab";
      }
    };

    container.style.cursor = "grab";
    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerUp);

    const onResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", onResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const prog = progressRef.current;
      const activeIdx = chapterRef.current;
      const currentPlacement = placementRef.current;

      // Scroll speed kick
      const deltaProg = Math.abs(prog - prevProgressRef.current);
      prevProgressRef.current = prog;
      scrollVelocity = THREE.MathUtils.lerp(scrollVelocity, deltaProg * 20, 0.1);

      // Lerp mouse
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Dynamic Placement Targets
      let targetPosX = 0;
      let targetPosY = 0;
      let targetCameraZ = 16;
      let targetCameraY = 0;

      if (currentPlacement === "center") {
        targetPosX = 0;
        targetPosY = 0;
        targetCameraZ = 16;
      } else if (currentPlacement === "offset") {
        targetPosX = 2.4;
        targetPosY = 0.2;
        targetCameraZ = 16.5;
      } else if (currentPlacement === "cinematic") {
        targetPosX = 0;
        targetPosY = -0.5;
        targetCameraZ = 14;
        targetCameraY = 1.2;
      }

      // Smoothly glide position to chosen placement
      masterGroup.position.x = THREE.MathUtils.lerp(masterGroup.position.x, targetPosX, 0.08);
      masterGroup.position.y = THREE.MathUtils.lerp(
        masterGroup.position.y,
        targetPosY + Math.sin(elapsed * 1.3) * 0.2,
        0.08,
      );
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetCameraZ, 0.08);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetCameraY, 0.08);

      // Orbit dynamic studio lights
      keyLight.position.x = Math.sin(elapsed * 0.7) * 14;
      keyLight.position.y = Math.cos(elapsed * 0.5) * 12;
      keyLight.position.z = Math.sin(elapsed * 0.4) * 8 + 10;

      fillLight.position.x = -Math.cos(elapsed * 0.6) * 14;
      fillLight.position.y = -Math.sin(elapsed * 0.8) * 12;
      fillLight.position.z = Math.cos(elapsed * 0.5) * 8 + 10;

      // Undulate ambient horizon terrain wave
      if (!prefersReducedMotion) {
        const posAttr = waveGeo.attributes.position;
        const pArr = posAttr.array as Float32Array;
        for (let i = 0; i < posAttr.count; i++) {
          const vx = pArr[i * 3];
          const vy = pArr[i * 3 + 1];
          pArr[i * 3 + 2] =
            Math.sin(vx * 0.22 + elapsed * 0.8) * 0.45 +
            Math.cos(vy * 0.32 + elapsed * 0.7) * 0.45;
        }
        posAttr.needsUpdate = true;
      }

      // Master rotation driven by: drag physics + scroll progress + subtle cursor tilt
      masterGroup.rotation.y =
        dragRotationY +
        prog * Math.PI * 2.5 +
        (prefersReducedMotion ? 0 : elapsed * 0.22) +
        scrollVelocity * 0.35;
      masterGroup.rotation.x = dragRotationX + mouseY * 0.25 + Math.sin(prog * Math.PI) * 0.15;
      masterGroup.rotation.z = mouseX * 0.15 + Math.sin(elapsed * 0.4) * 0.05;

      // Cross-fade visibility and scale between stages
      const s0Target = activeIdx === 0 ? 1 : 0.001;
      const s1Target = activeIdx === 1 ? 1 : 0.001;
      const s2Target = activeIdx === 2 ? 1 : 0.001;
      const s3Target = activeIdx === 3 ? 1 : 0.001;

      sparkGroup.scale.lerp(new THREE.Vector3(s0Target, s0Target, s0Target), 0.1);
      craftGroup.scale.lerp(new THREE.Vector3(s1Target, s1Target, s1Target), 0.1);
      polishGroup.scale.lerp(new THREE.Vector3(s2Target, s2Target, s2Target), 0.1);
      debutGroup.scale.lerp(new THREE.Vector3(s3Target, s3Target, s3Target), 0.1);

      sparkGroup.visible = sparkGroup.scale.x > 0.03;
      craftGroup.visible = craftGroup.scale.x > 0.03;
      polishGroup.visible = polishGroup.scale.x > 0.03;
      debutGroup.visible = debutGroup.scale.x > 0.03;

      // Individual object micro-rotations
      sparkCrystal.rotation.y = elapsed * 0.4;
      sparkInnerCore.rotation.x = -elapsed * 0.55;
      sparkRing1.rotation.z = elapsed * 0.25;
      sparkRing2.rotation.z = -elapsed * 0.2;

      slabs.forEach((slab, idx) => {
        slab.rotation.y = (idx - 1) * 0.12 + Math.sin(elapsed + idx) * 0.06;
      });

      phoneHalo.rotation.z = elapsed * 0.3;
      orbitRing1.rotation.z = elapsed * 0.25;
      orbitRing2.rotation.z = -elapsed * 0.2;
      globeMesh.rotation.y = elapsed * 0.16;

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("resize", onResize);

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }

      waveGeo.dispose();
      waveMat.dispose();
      icoGeo.dispose();
      crystalMat.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      gimbalGeo1.dispose();
      goldMat.dispose();
      gimbalGeo2.dispose();
      terracottaMat.dispose();
      phoneGeo.dispose();
      titaniumMat.dispose();
      screenGeo.dispose();
      screenGlassMat.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      globeGeo.dispose();
      globeMat.dispose();
      atmoGeo.dispose();
      atmoMat.dispose();
      orbitGeo1.dispose();
      orbitGeo2.dispose();
      beaconGeo.dispose();
      beaconMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 w-full h-full overflow-hidden select-none touch-none"
      aria-hidden="true"
    />
  );
}
