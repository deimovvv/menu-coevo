/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 --transform pepperoni.glb 
Files: pepperoni.glb [20.89MB] > /Users/gonzalo/Desktop/template-ecommerce-react-three-fiber-main/public/models/pepperoni-transformed.glb [577.54KB] (97%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Pepperoni(props) {
  const { nodes, materials } = useGLTF('/models/pepperoni-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0.geometry} material={materials.Material_0} scale={3.5} />
    </group>
  )
}

useGLTF.preload('/models/pepperoni-transformed.glb')