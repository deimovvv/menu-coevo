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
/* import { Model2 } from './Model2'; */

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const primitivos = [
  { elemento: "/models/PizzaOptimizada2.glb"},
  { elemento: "/models/PizzaOptimizada3.glb" },
  { elemento: "/models/bicho10.glb"},
];

const modelo =  "/models/PizzaOptimizada2.glb"



export default function Experience() {
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

      <mesh
          receiveShadow
          position-y={-1}
          rotation-x={-Math.PI * 0.5}
          scale={1}
        >
          <planeGeometry/>
          <meshStandardMaterial color="blue" />
        </mesh>


      {/* {
        primitivos.map((el, i) => (
        <ModelTest key={i} elemento={el.elemento} />
        ))
      }
 */}

      <ModelTest  elemento={modelo}/>
    
      



     

   
    </Canvas>
  );
}