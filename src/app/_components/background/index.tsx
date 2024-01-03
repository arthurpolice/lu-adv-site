'use client'

import { Canvas } from "@react-three/fiber"
import RodOfAsclepius from './components/rod-of-asclepius'
import { CameraControls, SoftShadows } from '@react-three/drei'


export default function Background() {
  return (
    <Canvas
      shadows="basic"
      className="bg-gradient-radial scroll overflow-hidden !absolute top-0 left-0 z-100 !h-[100lvh]"
      eventPrefix="client"
      camera={{ position: [0, 1.5, 14], fov: 45 }}
    >
      <fog attach="fog" args={['black', 0, 20]} />
      <pointLight position={[10, -10, -20]} intensity={10} />
      <pointLight position={[-10, -10, -20]} intensity={10} />
      <SoftShadows samples={3} />
      <RodOfAsclepius position={[0, -5, 7]} rotation={[0, 0, -0.3]} />
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} minAzimuthAngle={-Math.PI / 2} maxAzimuthAngle={Math.PI / 2} />
    </Canvas>
  )
}