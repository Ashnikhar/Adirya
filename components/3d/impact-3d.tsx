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

export function Impact3D() {
  return (
    <div className="absolute right-10 top-1/4 w-48 h-48 opacity-30">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <FloatingIcosahedron />
      </Canvas>
    </div>
  )
}
