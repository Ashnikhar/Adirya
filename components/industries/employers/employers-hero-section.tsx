"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
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

export function EmployersHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      {/* 3D Background */}
      <div className="absolute right-1/4 top-1/4 w-64 h-64 opacity-30">
        <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <AnimatedTorus />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-[#008080] to-[#00AAAA] bg-clip-text text-transparent">
                Foster Enduring Commitment Among Your Employees
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Give employees the well-being they need with a full-stack, mobile-first platform and ignite your culture,
              motivate your workforce, and drive business success.
            </p>
            <Button className="bg-gradient-to-r from-[#008080] to-[#00AAAA] hover:from-[#006666] hover:to-[#008888] text-white px-8 py-3">
              Request A Demo
            </Button>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Employee wellness"
                width={300}
                height={300}
                className="rounded-2xl object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Team collaboration"
                width={300}
                height={300}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
