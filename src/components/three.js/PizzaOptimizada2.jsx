/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 --transform PizzaOptimizada2.glb 
Files: PizzaOptimizada2.glb [3.11MB] > /Users/gonzalo/Desktop/template-ecommerce-react-three-fiber-main/public/models/PizzaOptimizada2-transformed.glb [274.01KB] (91%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ModelPizza1(props) {
  const { nodes, materials } = useGLTF('/models/PizzaOptimizada2-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pizza.geometry} material={materials.pizza} scale={0.025} />
    </group>
  )
}

useGLTF.preload('/models/PizzaOptimizada2-transformed.glb')
