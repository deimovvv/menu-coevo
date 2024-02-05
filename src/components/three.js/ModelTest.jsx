import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

const ModelTest = () => {
  const { scene } = useGLTF("/models/PizzaOptimizada2.glb");

  return (
    <>
      <primitive castShadow receiveShadow scale={0.8} object={scene} />
    </>
  );
};

export default ModelTest;

