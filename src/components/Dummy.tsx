import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'
import {
  Group,
  SkinnedMesh,
  Bone,
  MeshStandardMaterial,
  MathUtils
} from 'three'
import { GLTF } from 'three-stdlib'

import { useDummyState } from '../store/dummyState'

interface GLTFResult extends GLTF {
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

  const refOuter = useRef<Group>(null!)
  const refInner = useRef<Group>(null!)

  const { nodes, materials, animations } = useGLTF('/dummy.gltf') as GLTFResult
  const { actions, names } = useAnimations(animations, refOuter)

  useEffect(() => {
    if (actionIndex > 0) {
      actions[names[actionIndex]]?.reset().play()
    } else {
      actions[names[actionIndex]]?.fadeIn(1.65).play()
    }
    return () => {
      if (actionIndex > 0) {
        actions[names[actionIndex]]?.fadeOut(1.65)
      } else {
        actions[names[actionIndex]]?.stop()
      }
    }
  }, [actions, names, actionIndex])

  useFrame((_, delta) => {
    refInner.current.position.x = MathUtils.lerp(
      refInner.current.position.x,
      position.x,
      delta * 1.65
    )
    refInner.current.position.z = MathUtils.lerp(
      refInner.current.position.z,
      position.z,
      delta * 1.65
    )
    refInner.current.rotation.y = MathUtils.lerp(
      refInner.current.rotation.y,
      direction,
      delta * 1.75
    )
  })

  return (
    <group {...props} ref={refOuter} dispose={null}>
      <group name="Scene">
        <group name="ArmatureD" ref={refInner}>
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
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="hotpink" side={2} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/dummy.gltf')
