"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Dodecahedron } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"

function AnimatedDodecahedron() {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.008
    }
  })

  return (
    <Dodecahedron args={[1]} ref={meshRef}>
      <meshStandardMaterial color="#008080" wireframe />
    </Dodecahedron>
  )
}

export function ContactHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      {/* 3D Background */}
      <div className="absolute right-1/4 top-1/4 w-64 h-64 opacity-30">
        <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <AnimatedDodecahedron />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Let's Get in</span>{" "}
          <span className="bg-gradient-to-r from-[#008080] to-[#00AAAA] bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          We harness the power of technology to revolutionize holistic wellness
        </p>
      </div>
    </section>
  )
}
