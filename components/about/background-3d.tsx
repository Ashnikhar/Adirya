'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Icosahedron, Points, PointMaterial } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import Image from 'next/image'
import { motion } from 'framer-motion'

function GlowingIcosahedron() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.002
      ref.current.rotation.y += 0.003
    }
  })

  return (
    <Icosahedron ref={ref} args={[1.8, 1]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#00ffe0"
        emissive="#00ffe0"
        emissiveIntensity={0.6}
        roughness={0.1}
        metalness={0.9}
        transparent
        opacity={0.8}
      />
    </Icosahedron>
  )
}

function ParticleStars() {
  const points = useRef<THREE.Points>(null)
  const particles = useMemo(() => {
    const count = 500
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 12
    }
    return positions
  }, [])

  return (
    <Points ref={points} positions={particles}>
      <PointMaterial color="#00fff0" size={0.06} sizeAttenuation transparent depthWrite={false} />
    </Points>
  )
}

function BackgroundCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 65 }} style={{ height: '100%', width: '100%' }}>
      <ambientLight intensity={0.25} />
      <pointLight position={[5, 5, 5]} color="#00fff7" intensity={1.2} />
      <Environment preset="sunset" />
      <GlowingIcosahedron />
      <ParticleStars />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  )
}

export default function Background3D() {
  return (
    <section className="w-full h-screen grid grid-cols-1 md:grid-cols-2 bg-black overflow-hidden">
      {/* Left: 3D canvas */}
      <div className="relative h-1/2 md:h-full w-full z-0">
        <BackgroundCanvas />
      </div>

      {/* Right: Content with image */}
      <div className="flex items-center justify-center h-1/2 md:h-full px-8 py-12 bg-gradient-to-br from-[#0d1a1d] to-black relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-xl max-w-md text-white shadow-2xl text-center"
        >
          <div className="relative w-full h-56 mb-6 overflow-hidden rounded-lg group">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Showcase"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent mb-2">
            Next-Gen Innovation
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Experience immersive 3D interfaces that push the boundaries of modern digital interaction.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
