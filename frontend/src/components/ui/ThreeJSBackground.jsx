"use client";

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';

// Interactive cursor effect component
function CursorEffect() {
  const cursorRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (cursorRef.current) {
      cursorRef.current.position.x = mousePosition.x * 15;
      cursorRef.current.position.y = mousePosition.y * 10;
      cursorRef.current.rotation.z += 0.01;
      
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      cursorRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={cursorRef} position={[0, 0, 5]}>
      <mesh>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
      </mesh>
      
      <mesh>
        <ringGeometry args={[1.6, 2.0, 16]} />
        <meshBasicMaterial color="#4f9eff" transparent opacity={0.8} side={THREE.DoubleSide} />
      </mesh>
      
      {[...Array(6)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i * 1.0) * (0.3 + i * 0.1),
            Math.cos(i * 1.0) * (0.3 + i * 0.1),
            0
          ]}
        >
          <sphereGeometry args={[0.08 + i * 0.02, 8, 8]} />
          <meshBasicMaterial
            color={`hsl(${200 + i * 25}, 70%, 60%)`}
            transparent
            opacity={0.4 - i * 0.05}
          />
        </mesh>
      ))}
    </group>
  );
}

// Dust particle component
function DustParticle({ position, size, delay = 0 }) {
  const meshRef = useRef();
  
  useEffect(() => {
    if (meshRef.current) {
      gsap.fromTo(meshRef.current.material, 
        { opacity: 0 },
        { opacity: 0.6, duration: 2, delay, ease: "power2.out" }
      );
      
      gsap.to(meshRef.current.position, {
        y: `+=${Math.random() * 20 - 10}`,
        x: `+=${Math.random() * 15 - 7.5}`,
        duration: 10 + Math.random() * 8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: delay + 0.5
      });
      
      gsap.to(meshRef.current.rotation, {
        y: Math.PI * 2,
        duration: 25 + Math.random() * 15,
        repeat: -1,
        ease: "none",
        delay
      });
    }
  }, [delay]);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle floating motion
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.01;
      meshRef.current.position.x += Math.cos(state.clock.elapsedTime * 0.3 + delay) * 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshBasicMaterial 
        color="#ffffff" 
        transparent 
        opacity={0.4}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Dust particle cluster
function DustCluster({ count = 50, radius = 30 }) {
  const groupRef = useRef();
  const particles = useMemo(() => {
    console.log(`Creating ${count} dust particles with radius ${radius}`);
    const particleData = [];
    for (let i = 0; i < count; i++) {
      particleData.push({
        position: [
          (Math.random() - 0.5) * radius * 2,
          (Math.random() - 0.5) * radius * 2,
          (Math.random() - 0.5) * radius
        ],
        size: 0.1 + Math.random() * 0.3, // Small dust particles
        delay: i * 0.1
      });
    }
    console.log('Dust particle data:', particleData);
    return particleData;
  }, [count, radius]);

  useEffect(() => {
    if (groupRef.current) {
      gsap.fromTo(groupRef.current.position, 
        { y: -20 },
        { y: 0, duration: 4, ease: "power3.out" }
      );
    }
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 1;
      groupRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, index) => (
        <DustParticle
          key={index}
          position={particle.position}
          size={particle.size}
          delay={particle.delay}
        />
      ))}
    </group>
  );
}

// Embroidery pattern component
function EmbroideryPattern({ count = 50, radius = 10, patternType = "circle", delay = 0 }) {
  const meshRef = useRef();
  const points = useMemo(() => {
    const positions = [];
    const colors = [];
    
    for (let i = 0; i < count; i++) {
      let x, y, z;
      
      if (patternType === "spiral") {
        const t = (i / count) * Math.PI * 4;
        const r = radius * (0.3 + (i / count) * 0.7);
        x = Math.cos(t) * r;
        y = Math.sin(t) * r;
        z = (Math.random() - 0.5) * 3;
      } else if (patternType === "wave") {
        const t = (i / count) * Math.PI * 2;
        x = (i / count - 0.5) * radius * 2;
        y = Math.sin(t * 3) * radius * 0.5;
        z = (Math.random() - 0.5) * 2;
      } else {
        const angle = (i / count) * Math.PI * 2;
        const r = radius * (0.8 + Math.random() * 0.4);
        x = Math.cos(angle) * r;
        y = Math.sin(angle) * r;
        z = (Math.random() - 0.5) * 2;
      }
      
      positions.push(x, y, z);
      const intensity = 0.3 + Math.random() * 0.4;
      colors.push(intensity, intensity, intensity);
    }
    
    return { positions, colors };
  }, [count, radius, patternType]);

  useEffect(() => {
    if (meshRef.current) {
      gsap.fromTo(meshRef.current.scale, 
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, duration: 2, delay, ease: "back.out(1.7)" }
      );
      
      gsap.fromTo(meshRef.current.material, 
        { opacity: 0 },
        { opacity: 0.6, duration: 1.5, delay: delay + 0.5, ease: "power2.out" }
      );
    }
  }, [delay]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
      meshRef.current.rotation.x += 0.0005;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2 + radius) * 0.2;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={new Float32Array(points.positions)}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={new Float32Array(points.colors)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0}
        sizeAttenuation
      />
    </points>
  );
}

// Floating embroidery elements
function FloatingEmbroidery() {
  const groupRef = useRef();
  
  useEffect(() => {
    if (groupRef.current) {
      gsap.fromTo(groupRef.current.position, 
        { y: -20 },
        { y: 0, duration: 3, ease: "power3.out" }
      );
      
      gsap.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }
  }, []);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <EmbroideryPattern count={30} radius={8} patternType="circle" delay={0} />
      <EmbroideryPattern count={40} radius={12} patternType="spiral" delay={0.3} />
      <EmbroideryPattern count={25} radius={6} patternType="wave" delay={0.6} />
      <EmbroideryPattern count={35} radius={10} patternType="circle" delay={0.9} />
      
      {[...Array(8)].map((_, i) => (
        <FloatingRing key={i} index={i} />
      ))}
    </group>
  );
}

// Individual floating ring
function FloatingRing({ index }) {
  const meshRef = useRef();
  
  useEffect(() => {
    if (meshRef.current) {
      gsap.fromTo(meshRef.current.scale, 
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, duration: 1.5, delay: index * 0.2, ease: "elastic.out(1, 0.3)" }
      );
      
      gsap.to(meshRef.current.position, {
        y: `+=${Math.random() * 10 - 5}`,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.1
      });
    }
  }, [index]);

  return (
    <mesh
      ref={meshRef}
      position={[
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      ]}
      rotation={[
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ]}
    >
      <ringGeometry args={[0.5, 1, 8]} />
      <meshBasicMaterial
        color={`hsl(0, 0%, ${60 + Math.random() * 30}%)`}
        transparent
        opacity={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Particle field
function ParticleField() {
  const pointsRef = useRef();
  
  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 150; i++) {
      positions.push(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20
      );
    }
    return positions;
  }, []);

  useEffect(() => {
    if (pointsRef.current) {
      gsap.fromTo(pointsRef.current.material, 
        { opacity: 0 },
        { opacity: 0.2, duration: 2, ease: "power2.out" }
      );
      
      gsap.to(pointsRef.current.rotation, {
        y: Math.PI * 4,
        duration: 30,
        repeat: -1,
        ease: "none"
      });
    }
  }, []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={150}
          array={new Float32Array(particles)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#ffffff"
        transparent
        opacity={0}
        sizeAttenuation
      />
    </points>
  );
}

// Floating story elements
function FloatingStoryElements() {
  const groupRef = useRef();
  
  useEffect(() => {
    if (groupRef.current) {
      gsap.fromTo(groupRef.current.position, 
        { z: -20 },
        { z: 0, duration: 2.5, ease: "power3.out" }
      );
      
      gsap.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        duration: 25,
        repeat: -1,
        ease: "none"
      });
    }
  }, []);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(6)].map((_, i) => (
        <FloatingBookPage key={i} index={i} />
      ))}
      
      {[...Array(4)].map((_, i) => (
        <FloatingOrb key={`orb-${i}`} index={i} />
      ))}
    </group>
  );
}

// Floating book page
function FloatingBookPage({ index }) {
  const meshRef = useRef();
  
  useEffect(() => {
    if (meshRef.current) {
      gsap.fromTo(meshRef.current.scale, 
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, duration: 1.8, delay: index * 0.15, ease: "back.out(1.7)" }
      );
      
      gsap.to(meshRef.current.position, {
        y: `+=${Math.random() * 8 - 4}`,
        duration: 4 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.2
      });
    }
  }, [index]);

  return (
    <mesh
      ref={meshRef}
      position={[
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15
      ]}
      rotation={[
        Math.random() * Math.PI * 0.5,
        Math.random() * Math.PI * 0.5,
        Math.random() * Math.PI * 0.5
      ]}
    >
      <planeGeometry args={[1.5, 2]} />
      <meshBasicMaterial
        color={`hsl(0, 0%, ${70 + Math.random() * 20}%)`}
        transparent
        opacity={0.15}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Floating orb
function FloatingOrb({ index }) {
  const meshRef = useRef();
  
  useEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.scale, {
        x: 1.2,
        y: 1.2,
        z: 1.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.5
      });
      
      gsap.to(meshRef.current.position, {
        y: `+=${Math.random() * 12 - 6}`,
        duration: 5 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.3
      });
    }
  }, [index]);

  return (
    <mesh
      ref={meshRef}
      position={[
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20
      ]}
    >
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
    </mesh>
  );
}

// Main background component
function ThreeJSBackground() {
  const canvasRef = useRef();
  
  useEffect(() => {
    console.log('ThreeJSBackground mounted with full features');
    if (canvasRef.current) {
      console.log('Canvas ref found');
    }
    
    // Debug: Check if components are rendering
    setTimeout(() => {
      console.log('Checking Three.js components...');
      console.log('CursorEffect should be visible');
      console.log('DustCluster should be visible with 80 dust particles');
      console.log('FloatingEmbroidery should be visible');
      console.log('ParticleField should be visible');
      console.log('FloatingStoryElements should be visible');
    }, 2000);
  }, []);

  return (
    <div className="absolute inset-0 -z-10" ref={canvasRef}>
      <Canvas
        camera={{ position: [0, 0, 25], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        performance={{ min: 0.5 }}
        onCreated={({ gl, scene, camera }) => {
          console.log('Three.js Canvas created successfully');
          console.log('Scene children count:', scene.children.length);
          console.log('Camera position:', camera.position);
          console.log('GL renderer:', gl);
        }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.6} />
        <pointLight position={[0, 0, 10]} intensity={0.5} />
        
        {/* Test object to verify Three.js is working */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshBasicMaterial color="red" />
        </mesh>
        
        <CursorEffect />
        <DustCluster count={80} radius={25} />
        <FloatingEmbroidery />
        <ParticleField />
        <FloatingStoryElements />
        

        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
}

export default ThreeJSBackground;
