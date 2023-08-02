import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

import Dummy from '../components/Dummy'

export default function Home() {
  return (
    <div id="canvas">
      <Canvas shadows camera={{ position: [0, 3, 4] }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[-2, 2, 2]}
          castShadow
          shadow-mapSize={1024}
        />

        <Dummy position={[0, -1.5, 0]} scale={1.5} />

        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>

        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
