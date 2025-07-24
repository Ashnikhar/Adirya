'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'
import type { Mesh } from 'three'

// 3D Sphere Component
function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
      meshRef.current.rotation.x += 0.001
    }
  })

  return (
    <Sphere args={[1, 100, 200]} ref={meshRef} scale={1.8}>
      <MeshDistortMaterial
        color="#00b4b4"
        distort={0.25}
        speed={1.2}
        roughness={0.3}
        metalness={0.4}
      />
    </Sphere>
  )
}

// Main Hero Section
export function AboutHeroSection() {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 overflow-hidden">
      {/* 3D Sphere Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <AnimatedSphere />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">
          <span className="block"></span>
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Our Story
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Shaping workplace well-being through science, empathy, and technology — since 2014.
        </p>
      </div>
    </section>
  )
}
