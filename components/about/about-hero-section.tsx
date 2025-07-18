"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"

function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002
      meshRef.current.rotation.y += 0.003
    }
  })

  return (
    <Sphere args={[1, 100, 200]} ref={meshRef} scale={1.5}>
      <MeshDistortMaterial color="#008080" attach="material" distort={0.3} speed={1.5} roughness={0.5} />
    </Sphere>
  )
}

export function AboutHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <AnimatedSphere />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Our</span>{" "}
          <span className="bg-gradient-to-r from-[#008080] to-[#00AAAA] bg-clip-text text-transparent">Story</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Pioneering the future of healthcare through innovative AI solutions that make quality medical care accessible
          to everyone, everywhere.
        </p>
      </div>
    </section>
  )
}
