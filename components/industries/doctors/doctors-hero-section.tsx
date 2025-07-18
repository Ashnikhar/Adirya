"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
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

export function DoctorsHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      {/* 3D Background */}
      <div className="absolute right-1/4 top-1/4 w-64 h-64 opacity-30">
        <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <AnimatedSphere />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-[#008080] to-[#00AAAA] bg-clip-text text-transparent">
                Acquire New Patients, Lock-in Existing Patients
              </span>{" "}
              By Offering Convenience
            </h1>
            <Button className="bg-gradient-to-r from-[#008080] to-[#00AAAA] hover:from-[#006666] hover:to-[#008888] text-white px-8 py-3">
              Request A Demo
            </Button>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Doctor consultation"
                width={300}
                height={300}
                className="rounded-2xl object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Medical professional"
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
