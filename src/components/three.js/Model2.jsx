import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export function Model2({ modelPath, ...props }) {
  const { nodes, materials } = useGLTF("/models/PizzaOptimizada2.glb");
  const group = useRef();

  useEffect(() => {
    // Cargar el nuevo modelo cuando el prop modelPath cambie
    if (group.current) {
      group.current.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          child.material.dispose();
        }
      });

      // Actualizar la referencia del modelo
      group.current.children.length = 0;
      group.current.add(
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pizza.geometry}
          material={materials.pizza}
          scale={0.0254}
        />
      );
    }
  }, [modelPath, nodes, materials]);

  return <group ref={group} {...props} dispose={null} />;
}

// Precargar el modelo
useGLTF.preload("/PizzaOptimizada2.glb");
