"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Torus } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"

function AnimatedTorus() {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.02
    }
  })

  return (
    <Torus args={[1, 0.3, 16, 100]} ref={meshRef}>
      <meshStandardMaterial color="#008080" />
    </Torus>
  )
}

export function AboutProgressSection() {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* 3D Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20">
        <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <AnimatedTorus />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-[#008080]">We've made</span> first progress so far
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Our journey in revolutionizing healthcare through AI has achieved significant milestones. From our initial
            research and development phase to deploying solutions across multiple healthcare systems, we've consistently
            pushed the boundaries of what's possible in medical technology.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-[#008080] text-xl font-bold mb-3">Research & Development</h3>
              <p className="text-gray-400">
                Advanced AI algorithms developed in collaboration with leading medical institutions and research
                centers.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-[#008080] text-xl font-bold mb-3">Clinical Validation</h3>
              <p className="text-gray-400">
                Rigorous testing and validation across multiple healthcare environments to ensure safety and efficacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
