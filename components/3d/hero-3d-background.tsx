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
    <Sphere args={[1, 100, 200]} ref={meshRef} scale={2.5}>
      <MeshDistortMaterial color="#520bf9ff" attach="material" distort={0.5} speed={0.5} roughness={0.5} />
    </Sphere>
  )
}

export function Hero3DBackground() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}
