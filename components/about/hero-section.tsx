'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles, Environment, Torus } from '@react-three/drei'
import { useRef } from 'react'
import type * as THREE from 'three'
import { motion } from 'framer-motion'

// function AnimatedTorus() {
//   const ref = useRef<THREE.Mesh>(null)
//   useFrame(() => {
//     if (ref.current) {
//       ref.current.rotation.x += 0.003
//       ref.current.rotation.y += 0.006
//     }
//   })

//   return (
//     <Torus
//       ref={ref}
//       args={[1.8, 0.5, 30, 200]}
//       position={[0, 0, 0]}
//       rotation={[0.6, 0.6, 0]}
//     >
//       <meshStandardMaterial
//         color="#00ffe0"
//         roughness={0.25}
//         metalness={0.9}
//         transparent
//         opacity={0.6}
//       />
//     </Torus>
//   )
// }

function TorusCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6.5], fov: 60 }} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 6, 6]} color="#00fff7" intensity={0.8} />
      <Environment preset="night" />
      {/* <AnimatedTorus /> */}
      <Sparkles count={60} speed={0.9} scale={[12, 12, 12]} size={1.2} color="#00ffe0" opacity={0.35} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  )
}

export type SubpageHeroProps = {
  title: string
  subtitle?: string
  ctaText?: string
  onCtaClick?: () => void
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  onCtaClick,
}: SubpageHeroProps) {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-black">
      {/* 3D background */}
      <TorusCanvas />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-300 text-lg md:text-xl mb-8"
          >
            {subtitle}
          </motion.p>
        )}

        {ctaText && (
          <motion.button
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            onClick={onCtaClick}
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full transition"
          >
            {ctaText}
          </motion.button>
        )}
      </div>
    </section>
  )
}
