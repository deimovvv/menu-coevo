import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF } from '@react-three/drei'

export default function ModelTest()
{
   /*  const model = useLoader(GLTFLoader, '/public/models/bicho10.glb') */

    const model = useGLTF('/public/models/PizzaOptimizada2.glb')

    return <>

        {/* ... */}

        <primitive    scale={ 10.35 } object={ model.scene } />

    </>
}