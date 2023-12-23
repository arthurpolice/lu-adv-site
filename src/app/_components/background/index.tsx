'use client'

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import RodOfAsclepius from './components/rod-of-asclepius'
import { useEffect, useRef } from 'react'
import { Vector3 } from 'three'
import { CameraControls, PerspectiveCamera, SoftShadows, SpotLight, useDepthBuffer } from '@react-three/drei'

function CameraController() {
  const { camera } = useThree()

  useFrame(() => {
    camera.rotation.z = Math.PI / 30 // Tilt the camera
  })
  // useEffect(() => {
  //   camera.lookAt(6, 8, -10) // Adjust these coordinates to make the camera look at your object
  // }, [camera])

  return null
}

// @ts-ignore
function AngledSpotlight({ vec = new Vector3(), ...props }) {
  // @ts-ignore
  return <SpotLight castShadow penumbra={1} distance={30} angle={0.50} attenuation={5} anglePower={4} intensity={200} {...props} />
}

function Scene() {
  // This is a super cheap depth buffer that only renders once (frames: 1 is optional!), which works well for static scenes
  // Spots can optionally use that for realism, learn about soft particles here: http://john-chapman-graphics.blogspot.com/2013/01/good-enough-volumetrics-for-spotlights.html
  const depthBuffer = useDepthBuffer({ frames: 1 })
  return (
    <>
      <AngledSpotlight depthBuffer={depthBuffer} color="yellow" position={[-5, 7, -10]} />
    </>
  )
}

export default function Background() {
  return (
    <Canvas
      shadows="basic"
      className="bg-gradient-radial !fixed top-0 left-0 z-100 w-screen h-screen"
      eventPrefix="client"
      camera={{ position: [0, 1.5, 14], fov: 45 }}
    >
      <fog attach="fog" args={['black', 0, 20]} />
      <pointLight position={[10, -10, -20]} intensity={10} />
      <pointLight position={[-10, -10, -20]} intensity={10} />
      <SoftShadows samples={3} />
      <RodOfAsclepius position={[0, -5.5, 3]} rotation={[0, -0.2, 0]} />
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} minAzimuthAngle={-Math.PI / 2} maxAzimuthAngle={Math.PI / 2} />
    </Canvas>
  )
}