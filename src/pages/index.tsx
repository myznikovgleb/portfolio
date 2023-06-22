import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

import FancyBox from '../components/FancyBox'

export default function Home() {
  return (
    <div id="canvas">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <FancyBox position={[0, 0, 0]} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}
