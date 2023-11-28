import { CameraControls, OrbitControls, Preload, SpotLight, useGLTF} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import Lodder from '../Lodder'
import { DirectionalLight } from 'three'



function Suppera({car}) {
  const Suppera = useGLTF(`./${car}/scene.gltf`)
  const [routaionCar, setRotaionCar] = useState(2.25)

  useEffect(() => {
    // setRotaionCar(routaionCar + 0.000009)
  })
  

  return (
    <group>
         <hemisphereLight intensity={2} groundColor={0x000000} />   
         <directionalLight 
        //  castShadow={true}
         intensity={2}  />
         <lightProbe intensity={3} />

      <pointLight intensity={5} 
              angle={0.12}
              penumbra={1}
              castShadow
              shadow-mapSize={1024}
      />
      <SpotLight  position={[-20, 50,10]} />

      <primitive object={Suppera.scene}
      position={[-4, -3.25, 5]}
      scale={2}
      rotation={[6.30, `${routaionCar}`, 0]}
      />
      
    </group>
  )
}


function SupperaCanvas({car}) {
  return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    dpr={[1,2]}
    gl={{ preserveDrawingBuffer: true }}

    >
      <Suspense fallback={<Lodder />}>
      <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1.6} 
        color
        />
        <Suppera car={car} />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default SupperaCanvas