'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment, OrbitControls, useTexture } from '@react-three/drei'
import { Car } from './Car'
import * as THREE from 'three'

type Props = {}

export default function Scene({}: Props) {
  return (
    <div className='absolute inset-0 z-10 flex items-center justify-center '>
      <Canvas camera={{ position: [0, 3, 25], fov: 50, near: 0.1, far: 200 }}>
        <OrbitControls
          enableDamping
          dampingFactor={0.08}
          // minDistance={2}
          // maxDistance={20}
          target={[0, 0.9, 0]}
        />
        <StageFloor />
        <Suspense>
          {/* <ambientLight /> */}
          <Car position={[0, 0, 0]} />
          <Environment preset='city' />
        </Suspense>
      </Canvas>
    </div>
  )
}

function StageFloor() {
  const normalMap = useTexture('/concrete-normal.avif')
  normalMap.wrapS = THREE.RepeatWrapping
  normalMap.wrapT = THREE.RepeatWrapping
  normalMap.repeat.set(30, 30)
  normalMap.anisotropy = 8

  const material = new THREE.MeshStandardMaterial({
    color: '#444444',
    roughness: 0.75,
    normalMap: normalMap,
  })

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.005, 0]}
      receiveShadow
      material={material}
    >
      <planeGeometry args={[100, 100]} />
    </mesh>
  )
}
