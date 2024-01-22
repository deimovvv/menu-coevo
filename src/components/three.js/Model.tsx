import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/public/models/PizzaFungi.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PizzaFungi.geometry}
        material={materials.Pizza}
        scale={2.989}
      />
    </group>
  );
}

useGLTF.preload("/PizzaFungi.glb");
