"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Dodecahedron } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"

function SpinningDodecahedron() {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008
      meshRef.current.rotation.y += 0.012
    }
  })

  return (
    <Dodecahedron args={[1]} ref={meshRef}>
      <meshStandardMaterial color="#008080" wireframe />
    </Dodecahedron>
  )
}

export function Business3D() {
  return (
    <div className="absolute left-10 bottom-10 w-48 h-48 opacity-20">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <SpinningDodecahedron />
      </Canvas>
    </div>
  )
}
