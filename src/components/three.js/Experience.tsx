import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import {useLoader} from '@react-three/fiber'
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


/* import {Perf} from 'r3f-perf' */
/*  */


export default function Experience(){

const model = useLoader(GLTFLoader, '/public/models/PizzaOptimizada2.glb')


    return <Canvas 
        className="canvas-test"
    shadows
        camera={ {
            fov: 45,
            near: 0.001,
            far: 2000,
            position: [ -4, 1, 6 ]
        } }
        >

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 10.5 } />
        <ambientLight intensity={ 1.5 } />

      
        <primitive    scale={ 2 } object={ model.scene } />
    

    </Canvas>
}