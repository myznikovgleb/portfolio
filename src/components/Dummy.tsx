import { useEffect, useRef, useState } from 'react'
import { useAnimations, useGLTF, OrbitControls } from '@react-three/drei'
import { Group, SkinnedMesh, Bone, MeshStandardMaterial } from 'three'
import { GLTF } from 'three-stdlib'

import { useDummyState } from '../store/dummyState'

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
  const position = useDummyState((dummyState) => dummyState.position)
  const direction = useDummyState((dummyState) => dummyState.direction)
  const actionIndex = useDummyState((dummyState) => dummyState.actionIndex)

  const ref = useRef<Group>(null!)

  const { nodes, materials, animations } = useGLTF('/dummy.gltf') as GLTFResult
  const { actions, names } = useAnimations(animations, ref)

  useEffect(() => {
    actions[names[actionIndex]]?.reset().play()
    actions[names[actionIndex]]?.reset().fadeIn(0.5).play()
    return () => {
      actions[names[actionIndex]]?.fadeOut(0.5)
    }
  }, [actions, names, actionIndex])

  return (
    <group {...props} ref={ref} dispose={null}>
      <group name="Scene">
        <group
          name="ArmatureD"
          position={[position.x, position.y, position.z]}
          rotation={[0, direction, 0]}
        >
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

      <mesh receiveShadow rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 4]}>
        <circleGeometry args={[6]} />
        <meshStandardMaterial color="hotpink" side={2} />
      </mesh>

      <OrbitControls />
    </group>
  )
}

useGLTF.preload('/dummy.gltf')
