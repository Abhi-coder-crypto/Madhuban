import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function GentleParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const { positions, basePositions, speeds, count } = useMemo(() => {
    const count = 40;
    const positions = new Float32Array(count * 3);
    const basePositions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 16;
      const y = Math.random() * 12 - 6;
      const z = (Math.random() - 0.5) * 4 - 3;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = y;
      basePositions[i * 3 + 2] = z;
      
      speeds[i] = 0.02 + Math.random() * 0.04;
    }
    
    return { positions, basePositions, speeds, count };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const pos = particlesRef.current.geometry.attributes.position.array as Float32Array;
      const time = state.clock.elapsedTime;
      
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        pos[idx + 1] += speeds[i] * 0.008;
        pos[idx] = basePositions[idx] + Math.sin(time * 0.15 + i * 0.5) * 0.3;
        
        if (pos[idx + 1] > 6) {
          pos[idx + 1] = -6;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#7ab8a0"
        transparent
        opacity={0.25}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function LeafParticle({ startX, startY, delay }: { startX: number; startY: number; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = useRef(startY);
  
  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime * 0.08 + delay;
      meshRef.current.position.y = initialY.current - ((t * 0.8) % 14);
      meshRef.current.position.x = startX + Math.sin(t * 0.4) * 0.8;
      meshRef.current.rotation.z = Math.sin(t * 0.3) * 0.3;
      
      const yPos = meshRef.current.position.y;
      meshRef.current.material = meshRef.current.material as THREE.MeshBasicMaterial;
      (meshRef.current.material as THREE.MeshBasicMaterial).opacity = 
        Math.max(0, Math.min(0.2, 0.2 - Math.abs(yPos) * 0.03));
      
      if (meshRef.current.position.y < -7) {
        initialY.current = 7;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[startX, startY, -4]}>
      <planeGeometry args={[0.15, 0.25]} />
      <meshBasicMaterial color="#5a9880" transparent opacity={0.15} side={THREE.DoubleSide} />
    </mesh>
  );
}

function WaterRipples() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, 512, 512);
    
    for (let i = 0; i < 5; i++) {
      const x = 128 + Math.random() * 256;
      const y = 128 + Math.random() * 256;
      const radius = 40 + Math.random() * 60;
      
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, 'rgba(100, 160, 140, 0.03)');
      gradient.addColorStop(0.5, 'rgba(100, 160, 140, 0.015)');
      gradient.addColorStop(1, 'rgba(100, 160, 140, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(3, 3);
    return tex;
  }, []);

  useFrame((state) => {
    if (texture) {
      const t = state.clock.elapsedTime;
      texture.offset.x = Math.sin(t * 0.03) * 0.15;
      texture.offset.y = Math.cos(t * 0.025) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[28, 18]} />
      <meshBasicMaterial 
        map={texture} 
        transparent 
        opacity={0.5}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function CalmBackground() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const gradientTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 2;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    const gradient = ctx.createLinearGradient(0, 0, 0, 512);
    gradient.addColorStop(0, '#0d2820');
    gradient.addColorStop(0.3, '#102e28');
    gradient.addColorStop(0.6, '#143530');
    gradient.addColorStop(0.8, '#123028');
    gradient.addColorStop(1, '#0d2820');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 2, 512);
    
    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <mesh ref={meshRef} position={[0, 0, -10]}>
      <planeGeometry args={[40, 25]} />
      <meshBasicMaterial map={gradientTexture} />
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
    target.set(mouse.current.x * 0.08, mouse.current.y * 0.05, 5);
    camera.position.lerp(target, 0.008);
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

function SceneContent() {
  const leafPositions = useMemo(() => [
    { x: -6, y: 5, delay: 0 },
    { x: -3, y: 7, delay: 3 },
    { x: 0, y: 4, delay: 6 },
    { x: 3, y: 8, delay: 9 },
    { x: 6, y: 6, delay: 12 },
    { x: -5, y: 3, delay: 15 },
    { x: 4, y: 5, delay: 18 },
  ], []);

  return (
    <>
      <CalmBackground />
      <WaterRipples />
      <GentleParticles />
      {leafPositions.map((pos, i) => (
        <LeafParticle key={i} startX={pos.x} startY={pos.y} delay={pos.delay} />
      ))}
      <Rig />
    </>
  );
}

export default function Scene() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    setHasWebGL(!!gl);
    setMounted(true);
  }, []);

  if (!mounted || !hasWebGL) {
    return (
      <div className="fixed inset-0 z-0 underwater-gradient">
        <div className="absolute inset-0 water-ripple-bg" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ 
          antialias: true,
          alpha: false,
          powerPreference: 'default',
          failIfMajorPerformanceCaveat: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#0d2820'));
        }}
      >
        <SceneContent />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />
    </div>
  );
}
