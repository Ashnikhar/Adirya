"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Canvas, useFrame } from "@react-three/fiber"
import { Octahedron } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"

function AnimatedOctahedron() {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008
      meshRef.current.rotation.y += 0.012
      meshRef.current.rotation.z += 0.004
    }
  })

  return (
    <Octahedron args={[1]} ref={meshRef}>
      <meshStandardMaterial color="#008080" wireframe />
    </Octahedron>
  )
}

export function InsuranceHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      {/* 3D Background */}
      <div className="absolute right-1/4 top-1/4 w-64 h-64 opacity-30">
        <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <AnimatedOctahedron />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-[#008080] to-[#00AAAA] bg-clip-text text-transparent">
                Reduce Risk And Operational Costs, Enhance Client Engagement
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Our engagement solution can easily identify risks and more going to support clinical and retail talent.
              Keep your diverse employee population healthy with a personalized resource experience that fits their
              lifestyle and preferences with evidence.
            </p>
            <Button className="bg-gradient-to-r from-[#008080] to-[#00AAAA] hover:from-[#006666] hover:to-[#008888] text-white px-8 py-3">
              Request A Demo
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Insurance professional"
              width={500}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
