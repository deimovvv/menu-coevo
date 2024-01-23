import { OrbitControls, Environment } from '@react-three/drei';
import { Canvas ,useLoader} from '@react-three/fiber'
/* import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader' */
import { Model } from './Model';


/* import {Perf} from 'r3f-perf' */
/*  */


export default function Experience(){

/* const model = useLoader(GLTFLoader, '/public/models/PizzaOptimizada2.glb') */


    return <Canvas 
        className="canvas-test"
    shadows
        camera={ {
            fov: 45,
            near: 0.01,
            far: 2000,
            position: [ -1, 1, -0.5 ]
        } }
        >

        <OrbitControls makeDefault enableZoom={false} />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 10.2 } />
        <ambientLight intensity={ 2.2 } />
       <Environment preset={'sunset'} />
        



        {/* <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 2 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh> */}

       {/*  <primitive castShadow
        receiveShadow  scale={0.025} object={ model.scene } /> */}
        <Model/>
    

    </Canvas>
}