"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Cylinder } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"

function RotatingCylinder() {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02
    }
  })

  return (
    <Cylinder args={[1, 1, 2, 8]} ref={meshRef}>
      <meshStandardMaterial color="#008080" wireframe />
    </Cylinder>
  )
}

export function Products3D() {
  return (
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-64 h-64 opacity-10">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <RotatingCylinder />
      </Canvas>
    </div>
  )
}
