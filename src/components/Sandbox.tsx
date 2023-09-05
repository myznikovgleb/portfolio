import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'

import Dummy from '../components/Dummy'
import Floor from '../components/Floor'
import Obstacle from '../components/Obstacle'

import ReplayButton from '../components/ReplayButton'
import { Keyboard, Pointer, View } from '../controls'
import { usePreferences } from '../store/preferences'

const EnvironmentCity = dynamic(() => import('./EnvironmentCity'))
const EnvironmentNight = dynamic(() => import('./EnvironmentNight'))

export default function Sandbox() {
  const isDarkMode = usePreferences((preferences) => preferences.isDarkMode)

  return (
    <main id="canvas" className={isDarkMode ? 'bg-[#111827]' : 'bg-[#ffffff]'}>
      <Canvas shadows camera={{ position: [0, 2.5, -3], far: 10 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[3, 3, -3]}
          castShadow
          shadow-mapSize={1024}
          intensity={isDarkMode ? 0.75 : 1}
        />
        <fog attach="fog" args={[isDarkMode ? '#111827' : '#ffffff', 6, 8]} />
        {isDarkMode ? <EnvironmentNight /> : <EnvironmentCity />}

        <Floor color={isDarkMode ? '#374151' : '#ff69b4'} />

        <Dummy />

        <Obstacle color={isDarkMode ? '#44626e' : '#87ceeb'} />

        <View />
      </Canvas>
      <Keyboard />
      <Pointer />
      <ReplayButton />
    </main>
  )
}
