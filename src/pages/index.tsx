import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

import Dummy from '../components/Dummy'
import HomeButton from '../components/HomeButton'
import { Keyboard, Pointer } from '../controls'

export default function Home() {
  return (
    <div id="canvas">
      <Canvas shadows camera={{ position: [0, 2.5, -3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[3, 3, -3]}
          castShadow
          shadow-mapSize={1024}
        />
        <Dummy position={[0, 0, -1.5]} />
        <Environment preset="city" />
      </Canvas>
      <Keyboard />
      <Pointer />
      <HomeButton />
    </div>
  )
}
