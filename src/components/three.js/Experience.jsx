import {
  OrbitControls,
  Environment,
  Html,
  useProgress,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { BoxGeometry } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Model } from "./Model";
import ModelTest from "./ModelTest";
import { ModelPizza1 } from "./PizzaOptimizada2";
import { ModelPizza2 } from "./PizzaOptimizada3";
/* import { Model2 } from './Model2'; */

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const primitivos = [
  { elemento: <planeGeometry />, tamaño: 2 },
  { elemento: <sphereGeometry />, tamaño: 0.7 },
  { elemento: <boxGeometry />, tamaño: 0.6 },
];


export default function Experience({value}) {
  const model = useLoader(GLTFLoader, "/models/PizzaOptimizada2.glb");

  return (
    <Canvas
      className="canvas-test"
      shadows
      camera={{
        fov: 45,
        near: 0.01,
        far: 2000,
        position: [-1, 1, -0.5],
      }}
    >
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={1.0}
        /* enableZoom={false} */
        autoRotate={true}
      />

      <directionalLight castShadow position={[1, 2, 3]} intensity={10.2} />
      <ambientLight intensity={2.2} />
      <Environment preset={"sunset"} />
{/* 
      {primitivos.map((el) => (
        <mesh
          receiveShadow
          position-y={-1}
          rotation-x={-Math.PI * 0.5}
          scale={el.tamaño}
        >
          {el.elemento}

          <meshStandardMaterial color="blue" />
        </mesh>
      ))} */}


    {value === '1' &&  <ModelPizza1/>   }
    {value === '2' &&  <ModelPizza2/>  }
    
   
     
    </Canvas>
  );
}
