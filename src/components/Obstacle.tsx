import { useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MathUtils, Vector3 } from 'three'

import { useStateDummy, useStateObstacle } from '../store'

import type { Group } from 'three'

import type { Triplet } from '../store/types'

interface ObstacleProps {
  color: string
}

export default function Obstacle(props: ObstacleProps) {
  const { color } = props

  const posDummy = useStateDummy((state) => state.position)

  const posObstacle = useStateObstacle((state) => state.position)
  const spawnObstacle = useStateObstacle((state) => state.spawn)
  const jumpObstacle = useStateObstacle((state) => state.jump)

  const refPosObstacle = useRef<Triplet>({
    x: posObstacle.x,
    y: posObstacle.y,
    z: posObstacle.z
  })

  const refControl = useRef<Group>(null!)

  const [d, n] = useMemo(() => {
    const vecPosObstacle = new Vector3(posObstacle.x, 0, posObstacle.z)
    const vecPosDummy = new Vector3(posDummy.x, 0, posDummy.z)

    const n = new Vector3()

    return [
      vecPosObstacle.distanceTo(vecPosDummy),
      n.subVectors(vecPosObstacle, vecPosDummy).normalize()
    ]
  }, [posDummy, posObstacle])

  useEffect(() => {
    spawnObstacle()
  }, [spawnObstacle])

  useEffect(() => {
    if (d < 0.75 * 1.15) jumpObstacle({ x: n.x, y: n.y, z: n.z })
  }, [d, n, jumpObstacle])

  useFrame((_, delta) => {
    refPosObstacle.current.x = MathUtils.lerp(
      refPosObstacle.current.x,
      posObstacle.x,
      delta
    )
    refPosObstacle.current.y = MathUtils.lerp(
      refPosObstacle.current.y,
      posObstacle.y,
      delta
    )
    refPosObstacle.current.z = MathUtils.lerp(
      refPosObstacle.current.z,
      posObstacle.z,
      delta
    )

    refControl.current.position.x = refPosObstacle.current.x
    refControl.current.position.y = refPosObstacle.current.y
    refControl.current.position.z = refPosObstacle.current.z
  })

  return (
    <group ref={refControl}>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.75]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  )
}
