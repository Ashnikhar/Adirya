"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Torus } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"

function SpinningTorus() {
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

export function EarlyDetection3D() {
  return (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <SpinningTorus />
      </Canvas>
    </div>
  )
}
