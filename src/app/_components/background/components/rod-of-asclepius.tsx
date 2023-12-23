'use client'

import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import { Group, MeshStandardMaterial, Object3DEventMap, SpotLight, TextureLoader } from 'three'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { easing } from 'maath'
import { Mesh } from 'three'

interface RodOfAsclepiusProps {
  position?: [number, number, number],
  rotation?: [number, number, number],
}

export default function RodOfAsclepius({ position = [0, 0, 0], rotation = [0, 0, 0] }: RodOfAsclepiusProps) {
  const rod = useLoader(OBJLoader, '/rod-of-asclepius/rod.obj')
  const textureBase = useLoader(TextureLoader, '/rod-of-asclepius/textures/wood_texture_base.jpg')
  const textureNormal = useLoader(TextureLoader, '/rod-of-asclepius/textures/wood_texture_normal.jpg')
  const textureRoughness = useLoader(TextureLoader, '/rod-of-asclepius/textures/wood_texture_roughness.jpg')
  const textureAmbientOcclusion = useLoader(TextureLoader, '/rod-of-asclepius/textures/wood_texture_ambientOcclusion.jpg')
  const textureDisplacement = useLoader(TextureLoader, '/rod-of-asclepius/textures/wood_texture_displacement.jpg')

  useFrame(() => {
    rod.rotation.y += 0.002
    rod.traverse((child) => {
      if (child as Mesh) {
        (child as Mesh).material = new MeshStandardMaterial({
          map: textureBase,
          normalMap: textureNormal,
          roughnessMap: textureRoughness,
          aoMap: textureAmbientOcclusion,
          displacementMap: textureDisplacement,
          displacementScale: 0.05,
          displacementBias: 0.01,

        })
      }
    })
  })

  const group = useRef<Group<Object3DEventMap>>() as React.MutableRefObject<Group<Object3DEventMap>>
  const light = useRef() as React.MutableRefObject<SpotLight>
  useFrame((state, delta) => {
    easing.damp3(light.current.position, [state.pointer.x * 12, 0, 8 + state.pointer.y * 4], 0.2, delta)
    group.current.rotation.y += 0.002
  })

  return (
    <group ref={group} position={[0, -2, 7]} rotation={[0, 0, -0.3]}>
      <primitive object={rod} scale={[0.02, 0.02, 0.02]} />
      <spotLight angle={0.5} penumbra={0.5} ref={light} castShadow intensity={25} distance={18} shadow-mapSize={1024} shadow-bias={-0.001}>
        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
      </spotLight>
    </group>
  )
}