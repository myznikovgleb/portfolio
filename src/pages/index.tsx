import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

import Dummy from '../components/Dummy'
import ReplayButton from '../components/ReplayButton'
import { Keyboard, Pointer, View } from '../controls'
import Credits from '../components/Credits'

export default function Home() {
  return (
    <main id="canvas">
      <Canvas shadows camera={{ position: [0, 2.5, -3], far: 10 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[3, 3, -3]}
          castShadow
          shadow-mapSize={1024}
        />
        <fog attach="fog" args={['white', 6, 8]} />
        <Environment preset="city" />

        <Dummy position={[0, 0, -1.5]} />

        <View />
      </Canvas>

      <Keyboard />
      <Pointer />
      <ReplayButton />

      <Credits />
    </main>
  )
}
