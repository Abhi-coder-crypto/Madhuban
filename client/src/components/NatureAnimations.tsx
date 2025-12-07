import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useMemo, useEffect, useState, useRef } from "react";

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

interface ScrollGlowingFishProps {
  count?: number;
}

export function ScrollGlowingFish({ count = 6 }: ScrollGlowingFishProps) {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState(1);
  const lastScrollY = useRef(0);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > lastScrollY.current) {
        setScrollDirection(1);
      } else {
        setScrollDirection(-1);
      }
      lastScrollY.current = latest;
    });
  }, [scrollY]);

  const fishData = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 35 + Math.random() * 25,
      baseY: 70 + Math.random() * 25,
      duration: 20 + Math.random() * 15,
      delay: i * 3 + Math.random() * 5,
      glowColor: i % 3 === 0 ? '#00CED1' : (i % 3 === 1 ? '#40E0D0' : '#7FFFD4'),
      bodyColor: i % 2 === 0 ? '#0077B6' : '#0096C7',
      highlightColor: '#00FFFF',
      direction: i % 2 === 0 ? 1 : -1,
      waveAmplitude: 15 + Math.random() * 10,
      tailSpeed: 0.8 + Math.random() * 0.4,
    })), [count]
  );

  const scrollProgress = useTransform(scrollY, [0, 3000], [0, 1]);
  const fishOpacity = useTransform(scrollProgress, [0.3, 0.5, 0.8, 1], [0, 0.8, 0.9, 0.4]);
  const smoothOpacity = useSpring(fishOpacity, { stiffness: 50, damping: 20 });

  return (
    <motion.div 
      className="fixed inset-0 overflow-hidden pointer-events-none z-[3]"
      style={{ opacity: smoothOpacity }}
    >
      {fishData.map((fish) => (
        <motion.div
          key={fish.id}
          className="absolute"
          style={{ 
            top: `${fish.baseY}%`,
            left: fish.direction === 1 ? '-15%' : '115%',
          }}
          animate={{
            x: fish.direction === 1 ? ['0vw', '130vw'] : ['0vw', '-130vw'],
            y: [0, -fish.waveAmplitude, fish.waveAmplitude / 2, -fish.waveAmplitude / 1.5, 0],
          }}
          transition={{
            x: { duration: fish.duration, repeat: Infinity, delay: fish.delay, ease: "linear" },
            y: { duration: fish.duration / 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg 
            width={fish.size} 
            height={fish.size * 0.7} 
            viewBox="0 0 60 42" 
            fill="none"
            style={{ 
              transform: fish.direction === -1 ? 'scaleX(-1)' : 'none',
              filter: `drop-shadow(0 0 8px ${fish.glowColor}) drop-shadow(0 0 16px ${fish.glowColor}40)`,
            }}
          >
            <defs>
              <linearGradient id={`fishGrad${fish.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={fish.highlightColor} stopOpacity="0.9" />
                <stop offset="40%" stopColor={fish.bodyColor} stopOpacity="1" />
                <stop offset="100%" stopColor={fish.glowColor} stopOpacity="0.8" />
              </linearGradient>
              <radialGradient id={`fishGlow${fish.id}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={fish.glowColor} stopOpacity="0.6" />
                <stop offset="100%" stopColor={fish.glowColor} stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="30" cy="21" rx="20" ry="14" fill={`url(#fishGlow${fish.id})`} />
            <ellipse cx="32" cy="21" rx="18" ry="11" fill={`url(#fishGrad${fish.id})`} />
            <motion.polygon 
              points="12,21 0,10 0,32" 
              fill={fish.bodyColor}
              animate={{ 
                points: [
                  "12,21 0,10 0,32",
                  "12,21 2,8 2,34",
                  "12,21 0,10 0,32"
                ]
              }}
              transition={{ duration: fish.tailSpeed, repeat: Infinity, ease: "easeInOut" }}
            />
            <ellipse cx="45" cy="18" rx="4" ry="5" fill="#001219" opacity="0.9" />
            <circle cx="46" cy="17" r="1.5" fill={fish.highlightColor} opacity="0.9" />
            <ellipse cx="32" cy="14" rx="10" ry="4" fill={fish.highlightColor} opacity="0.3" />
            <path d="M28 8 Q32 4, 36 8" stroke={fish.bodyColor} strokeWidth="2" fill="none" opacity="0.7" />
            <ellipse cx="38" cy="32" rx="6" ry="2" fill={fish.bodyColor} opacity="0.5" />
          </svg>
        </motion.div>
      ))}
    </motion.div>
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

interface ScrollResponsiveLeavesProps {
  count?: number;
}

export function ScrollResponsiveLeaves({ count = 18 }: ScrollResponsiveLeavesProps) {
  const { scrollY } = useScroll();
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const now = Date.now();
      const timeDiff = now - lastTime.current;
      if (timeDiff > 0) {
        const speed = Math.abs(latest - lastScrollY.current) / timeDiff;
        setScrollSpeed(Math.min(speed * 10, 3));
      }
      lastScrollY.current = latest;
      lastTime.current = now;
    });
  }, [scrollY]);

  const scrollProgress = useTransform(scrollY, [0, 2000], [0, 1]);
  const leafOpacity = useTransform(scrollProgress, [0, 0.3, 0.7, 1], [0.6, 0.9, 0.7, 0.3]);
  const smoothOpacity = useSpring(leafOpacity, { stiffness: 100, damping: 30 });

  const leavesData = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 18 + Math.random() * 25,
      left: Math.random() * 100,
      baseDuration: 12 + Math.random() * 18,
      delay: Math.random() * 10,
      baseRotation: Math.random() * 360,
      swayAmount: 40 + Math.random() * 60,
      color: ['#6FBF5B', '#4A9F3F', '#5AAF4B', '#3D8F35'][Math.floor(Math.random() * 4)],
      secondaryColor: ['#8FDF7B', '#6FCF5B', '#7ECF6B'][Math.floor(Math.random() * 3)],
    })), [count]
  );

  return (
    <motion.div 
      className="fixed inset-0 overflow-hidden pointer-events-none z-[2]"
      style={{ opacity: smoothOpacity }}
    >
      {leavesData.map((leaf) => {
        const dynamicDuration = leaf.baseDuration / (1 + scrollSpeed * 0.5);
        const dynamicSway = leaf.swayAmount * (1 + scrollSpeed * 0.3);
        
        return (
          <motion.div
            key={leaf.id}
            className="absolute"
            style={{ left: `${leaf.left}%`, top: '-8%' }}
            animate={{
              y: ['0vh', '115vh'],
              x: [0, dynamicSway, -dynamicSway * 0.6, dynamicSway * 0.8, -dynamicSway * 0.4, 0],
              rotate: [leaf.baseRotation, leaf.baseRotation + 720],
            }}
            transition={{
              y: { duration: dynamicDuration, repeat: Infinity, delay: leaf.delay, ease: "linear" },
              x: { duration: dynamicDuration / 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: dynamicDuration * 1.5, repeat: Infinity, ease: "linear" },
            }}
          >
            <svg 
              width={leaf.size} 
              height={leaf.size * 1.4} 
              viewBox="0 0 24 34" 
              fill="none"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
            >
              <path 
                d="M12 0 C18 8, 22 16, 12 34 C2 16, 6 8, 12 0" 
                fill={leaf.color}
              />
              <path 
                d="M12 0 C15 8, 16 14, 12 28" 
                fill={leaf.secondaryColor}
                opacity="0.5"
              />
              <path 
                d="M12 4 L12 28" 
                stroke="#2D5A20" 
                strokeWidth="0.8" 
                opacity="0.6"
              />
              <path 
                d="M12 10 Q8 12, 6 16" 
                stroke="#2D5A20" 
                strokeWidth="0.4" 
                fill="none"
                opacity="0.4"
              />
              <path 
                d="M12 14 Q16 16, 18 20" 
                stroke="#2D5A20" 
                strokeWidth="0.4" 
                fill="none"
                opacity="0.4"
              />
            </svg>
          </motion.div>
        );
      })}
    </motion.div>
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

interface ColorfulButterfliesProps {
  count?: number;
}

export function ColorfulButterflies({ count = 5 }: ColorfulButterfliesProps) {
  const butterfliesData = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 30 + Math.random() * 20,
      startX: 10 + Math.random() * 80,
      startY: 15 + Math.random() * 50,
      duration: 18 + Math.random() * 12,
      delay: Math.random() * 8,
      pathAmplitude: 80 + Math.random() * 120,
      wingColor1: ['#6FBF5B', '#8FDF7B', '#50C878', '#7CFC00'][Math.floor(Math.random() * 4)],
      wingColor2: ['#E8C46A', '#FFD700', '#FFA500', '#FFBF00'][Math.floor(Math.random() * 4)],
      accentColor: ['#00CED1', '#FF69B4', '#DDA0DD', '#98FB98'][Math.floor(Math.random() * 4)],
      bodyColor: '#2D5A20',
      wingSpeed: 0.15 + Math.random() * 0.1,
    })), [count]
  );

  const { scrollY } = useScroll();
  const scrollProgress = useTransform(scrollY, [0, 1500], [0, 1]);
  const butterflyOpacity = useTransform(scrollProgress, [0, 0.2, 0.6, 1], [0.8, 1, 0.6, 0.2]);
  const smoothOpacity = useSpring(butterflyOpacity, { stiffness: 80, damping: 25 });

  return (
    <motion.div 
      className="fixed inset-0 overflow-hidden pointer-events-none z-[4]"
      style={{ opacity: smoothOpacity }}
    >
      {butterfliesData.map((butterfly) => (
        <motion.div
          key={butterfly.id}
          className="absolute"
          style={{ 
            left: `${butterfly.startX}%`, 
            top: `${butterfly.startY}%` 
          }}
          animate={{
            x: [0, butterfly.pathAmplitude, -butterfly.pathAmplitude * 0.7, butterfly.pathAmplitude * 0.5, -butterfly.pathAmplitude * 0.3, 0],
            y: [0, -butterfly.pathAmplitude * 0.4, butterfly.pathAmplitude * 0.3, -butterfly.pathAmplitude * 0.2, butterfly.pathAmplitude * 0.15, 0],
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
            height={butterfly.size * 0.9} 
            viewBox="0 0 50 45" 
            fill="none"
            style={{ 
              filter: `drop-shadow(0 0 6px ${butterfly.wingColor1}80) drop-shadow(0 0 12px ${butterfly.wingColor2}40)`,
            }}
          >
            <defs>
              <linearGradient id={`wingGrad1_${butterfly.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={butterfly.wingColor1} />
                <stop offset="50%" stopColor={butterfly.wingColor2} />
                <stop offset="100%" stopColor={butterfly.wingColor1} />
              </linearGradient>
              <linearGradient id={`wingGrad2_${butterfly.id}`} x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={butterfly.wingColor2} />
                <stop offset="50%" stopColor={butterfly.wingColor1} />
                <stop offset="100%" stopColor={butterfly.wingColor2} />
              </linearGradient>
              <radialGradient id={`wingSpot_${butterfly.id}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={butterfly.accentColor} stopOpacity="0.9" />
                <stop offset="100%" stopColor={butterfly.accentColor} stopOpacity="0" />
              </radialGradient>
            </defs>
            
            <motion.g
              animate={{ rotateY: [0, 70, 0, -70, 0] }}
              transition={{ duration: butterfly.wingSpeed, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: '25px 22px' }}
            >
              <ellipse cx="12" cy="16" rx="11" ry="14" fill={`url(#wingGrad1_${butterfly.id})`} opacity="0.9" />
              <ellipse cx="12" cy="16" rx="5" ry="7" fill={`url(#wingSpot_${butterfly.id})`} />
              <ellipse cx="10" cy="33" rx="8" ry="10" fill={`url(#wingGrad2_${butterfly.id})`} opacity="0.85" />
              <ellipse cx="10" cy="33" rx="3" ry="4" fill={butterfly.accentColor} opacity="0.6" />
            </motion.g>
            
            <motion.g
              animate={{ rotateY: [0, -70, 0, 70, 0] }}
              transition={{ duration: butterfly.wingSpeed, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: '25px 22px' }}
            >
              <ellipse cx="38" cy="16" rx="11" ry="14" fill={`url(#wingGrad1_${butterfly.id})`} opacity="0.9" />
              <ellipse cx="38" cy="16" rx="5" ry="7" fill={`url(#wingSpot_${butterfly.id})`} />
              <ellipse cx="40" cy="33" rx="8" ry="10" fill={`url(#wingGrad2_${butterfly.id})`} opacity="0.85" />
              <ellipse cx="40" cy="33" rx="3" ry="4" fill={butterfly.accentColor} opacity="0.6" />
            </motion.g>
            
            <ellipse cx="25" cy="24" rx="3" ry="14" fill={butterfly.bodyColor} />
            <circle cx="25" cy="8" r="4" fill={butterfly.bodyColor} />
            <path d="M23 4 Q20 0, 18 2" stroke={butterfly.bodyColor} strokeWidth="1.5" fill="none" />
            <path d="M27 4 Q30 0, 32 2" stroke={butterfly.bodyColor} strokeWidth="1.5" fill="none" />
            <circle cx="21" cy="6" r="1" fill={butterfly.wingColor2} />
            <circle cx="29" cy="6" r="1" fill={butterfly.wingColor2} />
          </motion.svg>
        </motion.div>
      ))}
    </motion.div>
  );
}

interface DriftingPetalsProps {
  count?: number;
}

export function DriftingPetals({ count = 15 }: DriftingPetalsProps) {
  const petalsData = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 12 + Math.random() * 18,
      left: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
      swayAmount: 40 + Math.random() * 80,
      opacity: 0.3 + Math.random() * 0.4,
      color: Math.random() > 0.6 ? '#E8C46A' : (Math.random() > 0.5 ? '#F5DEB3' : '#FFE4C4'),
    })), [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
      {petalsData.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{ left: `${petal.left}%`, top: '-8%' }}
          animate={{
            y: ['0vh', '115vh'],
            x: [0, petal.swayAmount, -petal.swayAmount / 2, petal.swayAmount * 0.7, -petal.swayAmount * 0.3, 0],
            rotate: [petal.rotation, petal.rotation + 540],
          }}
          transition={{
            y: { duration: petal.duration, repeat: Infinity, delay: petal.delay, ease: "linear" },
            x: { duration: petal.duration / 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: petal.duration * 0.8, repeat: Infinity, ease: "linear" },
          }}
        >
          <svg 
            width={petal.size} 
            height={petal.size} 
            viewBox="0 0 20 20" 
            fill="none"
            style={{ opacity: petal.opacity }}
          >
            <ellipse cx="10" cy="10" rx="8" ry="5" fill={petal.color} transform="rotate(45 10 10)" />
            <ellipse cx="10" cy="10" rx="4" ry="2.5" fill={petal.color} opacity="0.7" transform="rotate(45 10 10)" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

interface GlowingParticlesProps {
  count?: number;
}

export function GlowingParticles({ count = 25 }: GlowingParticlesProps) {
  const particlesData = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 2 + Math.random() * 4,
      left: Math.random() * 100,
      top: 20 + Math.random() * 60,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 8,
      moveX: -50 + Math.random() * 100,
      moveY: -40 + Math.random() * 80,
      color: Math.random() > 0.5 ? 'rgba(111, 191, 91, 0.8)' : 'rgba(232, 196, 106, 0.8)',
    })), [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[4]">
      {particlesData.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
            boxShadow: `0 0 ${particle.size * 4}px ${particle.size * 1.5}px ${particle.color}`,
          }}
          animate={{
            opacity: [0, 1, 0.5, 1, 0],
            x: [0, particle.moveX * 0.5, particle.moveX, particle.moveX * 0.7, 0],
            y: [0, particle.moveY * 0.3, particle.moveY * 0.6, particle.moveY, 0],
            scale: [0.3, 1, 0.8, 1.2, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

interface ForegroundVinesProps {
  side: 'left' | 'right';
}

export function ForegroundVines({ side }: ForegroundVinesProps) {
  const vinesData = useMemo(() => 
    Array.from({ length: 4 }, (_, i) => ({
      id: i,
      height: 200 + Math.random() * 300,
      offset: i * 60 + Math.random() * 30,
      duration: 6 + Math.random() * 4,
      delay: i * 0.5,
      opacity: 0.4 + Math.random() * 0.3,
    })), []
  );

  return (
    <div 
      className={`absolute top-0 ${side === 'left' ? 'left-0' : 'right-0'} h-full w-32 md:w-48 lg:w-64 overflow-hidden pointer-events-none z-[5]`}
      style={{ transform: side === 'right' ? 'scaleX(-1)' : 'none' }}
    >
      {vinesData.map((vine) => (
        <motion.div
          key={vine.id}
          className="absolute top-0"
          style={{ left: vine.offset, opacity: vine.opacity }}
          animate={{
            rotate: [-3, 3, -3],
            y: [0, 10, 0],
          }}
          transition={{
            duration: vine.duration,
            repeat: Infinity,
            delay: vine.delay,
            ease: "easeInOut",
          }}
        >
          <svg width="80" height={vine.height} viewBox={`0 0 80 ${vine.height}`} fill="none">
            <path 
              d={`M40 0 Q20 ${vine.height * 0.2}, 35 ${vine.height * 0.4} Q55 ${vine.height * 0.6}, 30 ${vine.height * 0.8} Q15 ${vine.height}, 40 ${vine.height}`}
              stroke="#1a5a40" 
              strokeWidth="4" 
              fill="none"
            />
            {Array.from({ length: Math.floor(vine.height / 60) }, (_, j) => (
              <g key={j}>
                <ellipse 
                  cx={j % 2 === 0 ? 55 : 25} 
                  cy={40 + j * 60} 
                  rx="18" 
                  ry="10" 
                  fill="#2d7a50" 
                  opacity="0.9"
                  transform={`rotate(${j % 2 === 0 ? 25 : -25} ${j % 2 === 0 ? 55 : 25} ${40 + j * 60})`}
                />
                <ellipse 
                  cx={j % 2 === 0 ? 55 : 25} 
                  cy={40 + j * 60} 
                  rx="12" 
                  ry="6" 
                  fill="#3d9a60" 
                  opacity="0.7"
                  transform={`rotate(${j % 2 === 0 ? 25 : -25} ${j % 2 === 0 ? 55 : 25} ${40 + j * 60})`}
                />
              </g>
            ))}
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

interface MistEffectProps {
  intensity?: 'light' | 'medium' | 'heavy';
}

export function MistEffect({ intensity = 'medium' }: MistEffectProps) {
  const opacityMap = { light: 0.15, medium: 0.25, heavy: 0.4 };
  const baseOpacity = opacityMap[intensity];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 100%, rgba(111, 191, 91, ${baseOpacity}) 0%, transparent 70%)`,
        }}
        animate={{
          opacity: [0.6, 1, 0.8, 1, 0.6],
          scale: [1, 1.05, 1.02, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 30% 80%, rgba(232, 196, 106, ${baseOpacity * 0.6}) 0%, transparent 60%)`,
        }}
        animate={{
          opacity: [0.5, 0.9, 0.7, 1, 0.5],
          x: ['-5%', '5%', '-3%', '7%', '-5%'],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 50% 35% at 70% 85%, rgba(111, 191, 91, ${baseOpacity * 0.4}) 0%, transparent 55%)`,
        }}
        animate={{
          opacity: [0.4, 0.8, 0.6, 0.9, 0.4],
          x: ['5%', '-5%', '3%', '-7%', '5%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
}

interface UnderwaterAmbienceProps {
  intensity?: 'light' | 'medium' | 'heavy';
}

export function UnderwaterAmbience({ intensity = 'medium' }: UnderwaterAmbienceProps) {
  const { scrollY } = useScroll();
  const scrollProgress = useTransform(scrollY, [0, 2500], [0, 1]);
  const underwaterOpacity = useTransform(scrollProgress, [0.4, 0.6, 0.9, 1], [0, 0.6, 0.9, 1]);
  const smoothOpacity = useSpring(underwaterOpacity, { stiffness: 50, damping: 25 });

  const bubblesData = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: 4 + Math.random() * 12,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      wobble: 10 + Math.random() * 20,
    })), []
  );

  return (
    <motion.div 
      className="fixed inset-0 overflow-hidden pointer-events-none z-[1]"
      style={{ opacity: smoothOpacity }}
    >
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(0, 119, 182, 0.05) 50%, rgba(0, 150, 199, 0.12) 80%, rgba(0, 180, 216, 0.18) 100%)',
        }}
      />
      
      {bubblesData.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: '-5%',
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, rgba(0, 206, 209, 0.4) 40%, transparent 70%)',
            border: '1px solid rgba(255,255,255,0.3)',
          }}
          animate={{
            y: ['0vh', '-110vh'],
            x: [0, bubble.wobble, -bubble.wobble, bubble.wobble / 2, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            y: { duration: bubble.duration, repeat: Infinity, delay: bubble.delay, ease: "linear" },
            x: { duration: bubble.duration / 3, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(0, 150, 199, 0.15) 100%)',
        }}
        animate={{
          opacity: [0.5, 0.8, 0.6, 0.9, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

interface CoralDecorationsProps {
  position?: 'left' | 'right' | 'center';
}

export function CoralDecorations({ position = 'center' }: CoralDecorationsProps) {
  const { scrollY } = useScroll();
  const scrollProgress = useTransform(scrollY, [0, 3000], [0, 1]);
  const coralOpacity = useTransform(scrollProgress, [0.6, 0.8, 1], [0, 0.7, 0.9]);
  const smoothOpacity = useSpring(coralOpacity, { stiffness: 40, damping: 20 });

  const positionStyles = {
    left: 'left-0 bottom-0',
    right: 'right-0 bottom-0',
    center: 'left-1/2 -translate-x-1/2 bottom-0',
  };

  return (
    <motion.div 
      className={`fixed ${positionStyles[position]} pointer-events-none z-[2]`}
      style={{ opacity: smoothOpacity }}
    >
      <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
        <motion.path
          d="M20 120 Q30 80, 25 60 Q20 40, 30 30 Q35 20, 28 10"
          stroke="#FF6B6B"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          animate={{ 
            d: [
              "M20 120 Q30 80, 25 60 Q20 40, 30 30 Q35 20, 28 10",
              "M20 120 Q35 80, 28 60 Q22 40, 32 30 Q38 20, 30 10",
              "M20 120 Q30 80, 25 60 Q20 40, 30 30 Q35 20, 28 10"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: 'drop-shadow(0 0 8px rgba(255, 107, 107, 0.5))' }}
        />
        <motion.path
          d="M60 120 Q70 90, 65 70 Q60 50, 70 40"
          stroke="#4ECDC4"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: 'drop-shadow(0 0 6px rgba(78, 205, 196, 0.5))' }}
        />
        <motion.ellipse
          cx="100"
          cy="100"
          rx="25"
          ry="15"
          fill="#FF9F43"
          opacity="0.7"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: 'drop-shadow(0 0 10px rgba(255, 159, 67, 0.4))' }}
        />
        <motion.path
          d="M140 120 Q150 85, 145 65 Q140 45, 155 35 Q165 25, 150 15"
          stroke="#A8E6CF"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          animate={{ 
            d: [
              "M140 120 Q150 85, 145 65 Q140 45, 155 35 Q165 25, 150 15",
              "M140 120 Q155 85, 148 65 Q142 45, 158 35 Q168 25, 152 15",
              "M140 120 Q150 85, 145 65 Q140 45, 155 35 Q165 25, 150 15"
            ]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: 'drop-shadow(0 0 8px rgba(168, 230, 207, 0.5))' }}
        />
        <motion.path
          d="M180 120 Q185 95, 175 80"
          stroke="#DDA0DD"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: 'drop-shadow(0 0 6px rgba(221, 160, 221, 0.5))' }}
        />
      </svg>
    </motion.div>
  );
}

export function Butterflies({ count = 4 }: { count?: number }) {
  return <ColorfulButterflies count={count} />;
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

interface HeroBackgroundProps {
  imageSrc: string;
}

export function HeroBackground({ imageSrc }: HeroBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => setIsLoaded(true);
  }, [imageSrc]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ 
          scale: isLoaded ? 1 : 1.15, 
          opacity: isLoaded ? 1 : 0 
        }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.img 
          src={imageSrc} 
          alt="Madhuban Restaurant Interior" 
          className="w-full h-full object-cover"
          style={{ filter: 'blur(2px)' }}
          animate={{
            scale: [1, 1.05, 1.02, 1.04, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <div className="absolute inset-0 hero-cinematic-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
    </div>
  );
}
