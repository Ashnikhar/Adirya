"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Octahedron } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"

function PulsingOctahedron() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.z += 0.01
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  return (
    <Octahedron args={[1]} ref={meshRef}>
      <meshStandardMaterial color="#008080" />
    </Octahedron>
  )
}

export function VirtualDemand3D() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <PulsingOctahedron />
      </Canvas>
    </div>
  )
}
