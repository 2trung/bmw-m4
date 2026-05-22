'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import { Car } from './Car'
type Props = {}

export default function Scene({}: Props) {
  return (
    <div className='absolute inset-0 z-10 flex items-center justify-center '>
      <Canvas>
        <OrbitControls />
        <Suspense>
          <ambientLight />
          <Car />
          <Environment preset='city' />
        </Suspense>
      </Canvas>
    </div>
  )
}
