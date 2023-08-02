import { useEffect, useRef, useState } from 'react'
import { useAnimations, useGLTF, OrbitControls } from '@react-three/drei'
import { Group, SkinnedMesh, Bone, MeshStandardMaterial } from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    BodyD: SkinnedMesh
    EyesD: SkinnedMesh
    HeadD: SkinnedMesh
    ShirtD: SkinnedMesh
    ShoesD: SkinnedMesh
    Root: Bone
  }
  materials: {
    Body: MeshStandardMaterial
    Eyes: MeshStandardMaterial
    Clothes: MeshStandardMaterial
  }
}
export default function Dummy(props: JSX.IntrinsicElements['group']) {
  const ref = useRef<Group>(null!)

  const { nodes, materials, animations } = useGLTF('/dummy.gltf') as GLTFResult
  const { actions, names } = useAnimations(animations, ref)

  const [index, setIndex] = useState(2)

  useEffect(() => {
    actions[names[index]]?.reset().play()
    actions[names[index]]?.reset().fadeIn(0.5).play()
    return () => {
      actions[names[index]]?.fadeOut(0.5)
    }
  }, [index, actions, names])

  return (
    <group
      {...props}
      ref={ref}
      dispose={null}
      onClick={() => setIndex((index + 1) % names.length)}
    >
      <group name="Scene">
        <group name="ArmatureD">
          <skinnedMesh
            castShadow
            name="BodyD"
            geometry={nodes.BodyD.geometry}
            material={materials.Body}
            skeleton={nodes.BodyD.skeleton}
          />
          <skinnedMesh
            castShadow
            name="EyesD"
            geometry={nodes.EyesD.geometry}
            material={materials.Eyes}
            skeleton={nodes.EyesD.skeleton}
          />
          <skinnedMesh
            castShadow
            name="HeadD"
            geometry={nodes.HeadD.geometry}
            material={materials.Body}
            skeleton={nodes.HeadD.skeleton}
          />
          <skinnedMesh
            castShadow
            name="ShirtD"
            geometry={nodes.ShirtD.geometry}
            material={materials.Clothes}
            skeleton={nodes.ShirtD.skeleton}
          />
          <skinnedMesh
            castShadow
            name="ShoesD"
            geometry={nodes.ShoesD.geometry}
            material={materials.Clothes}
            skeleton={nodes.ShoesD.skeleton}
          />
          <primitive object={nodes.Root} />
        </group>
      </group>

      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3]} />
        <meshStandardMaterial color="hotpink" side={2} />
      </mesh>

      <OrbitControls autoRotate />
    </group>
  )
}

useGLTF.preload('/dummy.gltf')
