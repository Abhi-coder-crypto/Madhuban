import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Cloud, Float, Sparkles, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useLocation } from 'wouter';
import generatedCaustics from '@assets/generated_images/seamless_water_caustics_texture.png';
import generatedJungle from '@assets/generated_images/bioluminescent_magical_jungle_forest_background.png';

function BackgroundPlane() {
  const texture = useTexture(generatedJungle);
  const { viewport } = useThree();
  
  return (
    <mesh position={[0, 0, -10]} scale={[viewport.width + 10, viewport.height + 10, 1]}>
      <planeGeometry />
      <meshBasicMaterial map={texture} toneMapped={false} color="#444" />
    </mesh>
  );
}

function WaterEffect() {
  const caustics = useTexture(generatedCaustics);
  const meshRef = useRef<THREE.Mesh>(null);
  
  caustics.wrapS = caustics.wrapT = THREE.RepeatWrapping;
  
  useFrame((state) => {
    if (meshRef.current) {
      // Animate texture offset for flow effect
      caustics.offset.x = state.clock.elapsedTime * 0.02;
      caustics.offset.y = state.clock.elapsedTime * 0.01;
      
      // Gentle wave motion
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[20, 20, 64, 64]} />
      <meshStandardMaterial 
        map={caustics}
        transparent
        opacity={0.4}
        color="#00ffff"
        emissive="#004444"
        emissiveIntensity={0.5}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function FloatingParticles() {
  return (
    <group>
      <Sparkles 
        count={200} 
        scale={12} 
        size={4} 
        speed={0.4} 
        opacity={0.7} 
        color="#ccffff" 
      />
      <Sparkles 
        count={100} 
        scale={10} 
        size={6} 
        speed={0.2} 
        opacity={0.5} 
        color="#00ff88" 
      />
    </group>
  );
}

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  useFrame(() => {
    // Gentle parallax camera movement based on mouse
    camera.position.lerp(vec.set(mouse.x * 0.5, mouse.y * 0.5, camera.position.z), 0.02);
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

export default function Scene() {
  const [location] = useLocation();

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#02040a']} />
        <fog attach="fog" args={['#02040a', 5, 15]} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ff88" />
        
        <BackgroundPlane />
        <WaterEffect />
        <FloatingParticles />
        <Cloud opacity={0.3} speed={0.2} bounds={[10, 2, 1.5]} segments={20} color="#062d2d" position={[0, -2, -5]} />
        
        <Rig />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
    </div>
  );
}
