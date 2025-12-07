import { motion } from "framer-motion";
import { useMemo } from "react";

interface FloatingFishProps {
  count?: number;
}

export function FloatingFish({ count = 5 }: FloatingFishProps) {
  const fishData = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 20 + Math.random() * 30,
      top: 20 + Math.random() * 60,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
      opacity: 0.15 + Math.random() * 0.2,
      direction: Math.random() > 0.5 ? 1 : -1,
    })), [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {fishData.map((fish) => (
        <motion.div
          key={fish.id}
          className="absolute"
          style={{ 
            top: `${fish.top}%`,
            left: fish.direction === 1 ? '-10%' : '110%',
          }}
          animate={{
            x: fish.direction === 1 ? ['0vw', '120vw'] : ['0vw', '-120vw'],
            y: [0, -20, 10, -10, 0],
          }}
          transition={{
            x: { duration: fish.duration, repeat: Infinity, delay: fish.delay, ease: "linear" },
            y: { duration: fish.duration / 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg 
            width={fish.size} 
            height={fish.size * 0.6} 
            viewBox="0 0 40 24" 
            fill="none"
            style={{ 
              opacity: fish.opacity,
              transform: fish.direction === -1 ? 'scaleX(-1)' : 'none'
            }}
          >
            <ellipse cx="22" cy="12" rx="14" ry="8" fill="#6FBF5B" />
            <polygon points="6,12 0,4 0,20" fill="#6FBF5B" />
            <circle cx="30" cy="10" r="2" fill="#0B3D2E" />
            <ellipse cx="22" cy="16" rx="6" ry="2" fill="#4A9F3F" opacity="0.5" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

interface FallingLeavesProps {
  count?: number;
}

export function FallingLeaves({ count = 12 }: FallingLeavesProps) {
  const leavesData = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 15 + Math.random() * 20,
      left: Math.random() * 100,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 8,
      rotation: Math.random() * 360,
      swayAmount: 30 + Math.random() * 50,
      color: Math.random() > 0.5 ? '#6FBF5B' : '#4A9F3F',
      opacity: 0.2 + Math.random() * 0.3,
    })), [count]
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
      {leavesData.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{ left: `${leaf.left}%`, top: '-5%' }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, leaf.swayAmount, -leaf.swayAmount, leaf.swayAmount / 2, 0],
            rotate: [leaf.rotation, leaf.rotation + 360],
          }}
          transition={{
            y: { duration: leaf.duration, repeat: Infinity, delay: leaf.delay, ease: "linear" },
            x: { duration: leaf.duration / 2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: leaf.duration, repeat: Infinity, ease: "linear" },
          }}
        >
          <svg 
            width={leaf.size} 
            height={leaf.size * 1.2} 
            viewBox="0 0 20 24" 
            fill="none"
            style={{ opacity: leaf.opacity }}
          >
            <path 
              d="M10 0 C15 6, 18 12, 10 24 C2 12, 5 6, 10 0" 
              fill={leaf.color}
            />
            <path 
              d="M10 4 L10 20" 
              stroke="#0B3D2E" 
              strokeWidth="0.5" 
              opacity="0.5"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

interface FirefliesProps {
  count?: number;
}

export function Fireflies({ count = 20 }: FirefliesProps) {
  const firefliesData = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 3 + Math.random() * 4,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 5,
      moveX: -30 + Math.random() * 60,
      moveY: -30 + Math.random() * 60,
    })), [count]
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[2]">
      {firefliesData.map((fly) => (
        <motion.div
          key={fly.id}
          className="absolute rounded-full"
          style={{
            width: fly.size,
            height: fly.size,
            left: `${fly.left}%`,
            top: `${fly.top}%`,
            background: 'radial-gradient(circle, #E8C46A 0%, transparent 70%)',
            boxShadow: `0 0 ${fly.size * 3}px ${fly.size}px rgba(232, 196, 106, 0.4)`,
          }}
          animate={{
            opacity: [0, 0.8, 0.3, 0.9, 0],
            x: [0, fly.moveX, fly.moveX / 2, fly.moveX * 0.8, 0],
            y: [0, fly.moveY, fly.moveY / 2, fly.moveY * 0.8, 0],
            scale: [0.5, 1, 0.7, 1.1, 0.5],
          }}
          transition={{
            duration: fly.duration,
            repeat: Infinity,
            delay: fly.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

interface ButterfliesProps {
  count?: number;
}

export function Butterflies({ count = 4 }: ButterfliesProps) {
  const butterfliesData = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 25 + Math.random() * 15,
      startX: Math.random() * 100,
      startY: 20 + Math.random() * 60,
      duration: 20 + Math.random() * 15,
      delay: Math.random() * 10,
      pathAmplitude: 100 + Math.random() * 150,
      color: Math.random() > 0.5 ? '#E8C46A' : '#6FBF5B',
    })), [count]
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[2]">
      {butterfliesData.map((butterfly) => (
        <motion.div
          key={butterfly.id}
          className="absolute"
          style={{ 
            left: `${butterfly.startX}%`, 
            top: `${butterfly.startY}%` 
          }}
          animate={{
            x: [0, butterfly.pathAmplitude, -butterfly.pathAmplitude / 2, butterfly.pathAmplitude * 0.7, 0],
            y: [0, -butterfly.pathAmplitude / 3, butterfly.pathAmplitude / 4, -butterfly.pathAmplitude / 5, 0],
          }}
          transition={{
            duration: butterfly.duration,
            repeat: Infinity,
            delay: butterfly.delay,
            ease: "easeInOut",
          }}
        >
          <motion.svg 
            width={butterfly.size} 
            height={butterfly.size * 0.8} 
            viewBox="0 0 30 24" 
            fill="none"
            style={{ opacity: 0.6 }}
            animate={{ rotateY: [0, 180, 0] }}
            transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
          >
            <ellipse cx="8" cy="10" rx="7" ry="9" fill={butterfly.color} opacity="0.8" />
            <ellipse cx="22" cy="10" rx="7" ry="9" fill={butterfly.color} opacity="0.8" />
            <ellipse cx="8" cy="18" rx="5" ry="5" fill={butterfly.color} opacity="0.6" />
            <ellipse cx="22" cy="18" rx="5" ry="5" fill={butterfly.color} opacity="0.6" />
            <rect x="14" y="4" width="2" height="16" rx="1" fill="#0B3D2E" />
            <line x1="15" y1="4" x2="12" y2="0" stroke="#0B3D2E" strokeWidth="1" />
            <line x1="15" y1="4" x2="18" y2="0" stroke="#0B3D2E" strokeWidth="1" />
          </motion.svg>
        </motion.div>
      ))}
    </div>
  );
}

interface ParallaxVinesProps {
  scrollY?: number;
}

export function ParallaxVines() {
  return (
    <div className="fixed top-0 left-0 right-0 h-32 overflow-hidden pointer-events-none z-[1]">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute top-0"
          style={{ left: `${i * 25}%` }}
          animate={{
            rotate: [-2, 2, -2],
            y: [0, 5, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          <svg width="60" height="120" viewBox="0 0 60 120" fill="none" style={{ opacity: 0.3 }}>
            <path 
              d="M30 0 Q20 30, 30 50 Q40 70, 25 100 Q15 120, 30 120" 
              stroke="#6FBF5B" 
              strokeWidth="3" 
              fill="none"
            />
            {[20, 40, 60, 80].map((y, j) => (
              <ellipse 
                key={j} 
                cx={j % 2 === 0 ? 35 : 25} 
                cy={y} 
                rx="8" 
                ry="5" 
                fill="#4A9F3F" 
                opacity="0.6"
                transform={`rotate(${j % 2 === 0 ? 20 : -20} ${j % 2 === 0 ? 35 : 25} ${y})`}
              />
            ))}
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
