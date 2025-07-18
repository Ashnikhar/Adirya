"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Box } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"

function FloatingCube() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <Box args={[1, 1, 1]} ref={meshRef}>
      <meshStandardMaterial color="#008080" wireframe />
    </Box>
  )
}

export function HealthcareAccess3D() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <FloatingCube />
      </Canvas>
    </div>
  )
}
