import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function FancyBox(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<Mesh>(null!)

  const [active, setActive] = useState(false)
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => (ref.current.rotation.y += delta))

  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
