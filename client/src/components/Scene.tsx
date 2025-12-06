import { useRef, useState, useEffect, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import * as THREE from 'three';

function SoftParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const { positions, speeds, count } = useMemo(() => {
    const count = 60;
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
      speeds[i] = 0.08 + Math.random() * 0.12;
    }
    
    return { positions, speeds, count };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const pos = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        pos[idx + 1] += speeds[i] * 0.015;
        pos[idx] += Math.sin(state.clock.elapsedTime * 0.2 + i) * 0.002;
        if (pos[idx + 1] > 5) pos[idx + 1] = -5;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#5ab795"
        transparent
        opacity={0.35}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function KoiFish({ delay, yOffset }: { delay: number; yOffset: number }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime * 0.08 + delay;
      const x = ((t * 3) % 28) - 14;
      groupRef.current.position.x = x;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.3 + yOffset;
      groupRef.current.rotation.z = Math.sin(t * 1.2) * 0.06;
      groupRef.current.rotation.y = x > 0 ? 0 : Math.PI;
    }
  });

  return (
    <group ref={groupRef} position={[-14, yOffset, -5]}>
      <mesh scale={[0.6, 0.2, 0.1]}>
        <sphereGeometry args={[1, 8, 6]} />
        <meshBasicMaterial color="#1a3833" transparent opacity={0.18} />
      </mesh>
      <mesh position={[0.5, 0, 0]} scale={[0.3, 0.15, 0.08]}>
        <coneGeometry args={[1, 1, 4]} />
        <meshBasicMaterial color="#1a3833" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function UnderwaterBackground() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current && meshRef.current.material) {
      const mat = meshRef.current.material as THREE.MeshBasicMaterial;
      const t = state.clock.elapsedTime * 0.05;
      const r = 0.04 + Math.sin(t) * 0.01;
      const g = 0.12 + Math.sin(t * 0.7) * 0.02;
      const b = 0.11 + Math.sin(t * 0.5) * 0.015;
      mat.color.setRGB(r, g, b);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -10]}>
      <planeGeometry args={[40, 25]} />
      <meshBasicMaterial color="#0a1f1c" />
    </mesh>
  );
}

function CausticEffect() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    
    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, 'rgba(90, 183, 149, 0.15)');
    gradient.addColorStop(0.5, 'rgba(90, 183, 149, 0.05)');
    gradient.addColorStop(1, 'rgba(90, 183, 149, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
    
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 4);
    return tex;
  }, []);

  useFrame((state) => {
    if (texture) {
      texture.offset.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.2;
      texture.offset.y = Math.cos(state.clock.elapsedTime * 0.06) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -6]}>
      <planeGeometry args={[30, 20]} />
      <meshBasicMaterial 
        map={texture} 
        transparent 
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function Rig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useMemo(() => new THREE.Vector3(), []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    target.set(mouse.current.x * 0.15, mouse.current.y * 0.1, 5);
    camera.position.lerp(target, 0.012);
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

function SceneContent() {
  return (
    <>
      <UnderwaterBackground />
      <CausticEffect />
      <SoftParticles />
      <KoiFish delay={0} yOffset={1} />
      <KoiFish delay={12} yOffset={-0.5} />
      <KoiFish delay={25} yOffset={-1.5} />
      <Rig />
    </>
  );
}

export default function Scene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 z-0 bg-[#0a1f1c]" />;
  }

  return (
    <div className="fixed inset-0 z-0">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ 
          antialias: true,
          alpha: false,
          powerPreference: 'default'
        }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 pointer-events-none" />
    </div>
  );
}
