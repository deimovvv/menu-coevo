import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, useLoader   } from '@react-three/fiber'
import { Suspense } from 'react'
import { useGLTF } from "@react-three/drei";


const ModelTest = () => {

    const model = useLoader(GLTFLoader, '/models/PizzaOptimizada2.glb')

  return (
    <>
      <Suspense fallback={null}>   <primitive castShadow
        receiveShadow scale={0.80} object={ model.scene } /> </Suspense>
    </>
  )
}

export default ModelTest


useGLTF.preload("/models/PizzaOptimizada2.glb");