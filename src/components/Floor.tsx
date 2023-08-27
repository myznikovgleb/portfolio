interface FloorProps {
  color: string
}

export default function Floor(props: FloorProps) {
  const { color } = props

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <mesh receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color={color} side={2} />
      </mesh>
    </group>
  )
}
