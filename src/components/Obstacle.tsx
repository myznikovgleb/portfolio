import { useEffect } from 'react'

import { useStateObstacle } from '../store'

interface ObstacleProps {
  color: string
}

export default function Obstacle(props: ObstacleProps) {
  const { color } = props

  const position = useStateObstacle((state) => state.position)
  const spawn = useStateObstacle((state) => state.spawn)

  useEffect(() => {
    spawn()
  }, [spawn])

  return (
    <group position={[position.x, position.y, position.z]}>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.75]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  )
}
