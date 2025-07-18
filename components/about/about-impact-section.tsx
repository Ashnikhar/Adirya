"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Icosahedron } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"

function FloatingIcosahedron() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3
    }
  })

  return (
    <Icosahedron args={[1]} ref={meshRef}>
      <meshStandardMaterial color="#008080" />
    </Icosahedron>
  )
}

export function AboutImpactSection() {
  const stats = [
    { number: "50M+", label: "Patients Served" },
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "24/7", label: "Monitoring" },
    { number: "150+", label: "Healthcare Partners" },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-900 to-black overflow-hidden">
      {/* 3D Background */}
      <div className="absolute right-10 top-1/4 w-48 h-48 opacity-30">
        <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <FloatingIcosahedron />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Making an Impact</h2>
          <p className="text-xl text-gray-300">Transforming healthcare globally</p>
        </div>

        <div className="grid gap-8 md:grid-cols-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#008080] mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="relative h-64 bg-gray-800 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#008080]/20 to-[#00AAAA]/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Global Reach</h3>
              <p className="text-gray-300">Serving patients in over 50 countries worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
