import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

import Dummy from '../components/Dummy'
import { View } from '../controls'
import { useIsDarkMode } from '../utils'

export default function Sandbox() {
  const isDarkMode = useIsDarkMode()
  return (
    <Canvas shadows camera={{ position: [0, 2.5, -3], far: 10 }}>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[3, 3, -3]}
        castShadow
        shadow-mapSize={1024}
        intensity={isDarkMode ? 0.75 : 1}
      />
      <fog attach="fog" args={[isDarkMode ? '#111827' : '#ffffff', 6, 8]} />
      <Environment preset={isDarkMode ? 'night' : 'city'} />

      <Dummy position={[0, 0, -1.5]} />

      <View />
    </Canvas>
  )
}
