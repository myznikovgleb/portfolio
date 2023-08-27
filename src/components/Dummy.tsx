import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'
import { MathUtils } from 'three'

import type { Group, SkinnedMesh, Bone, MeshStandardMaterial } from 'three'
import type { GLTF } from 'three-stdlib'

import { useStateDummy } from '../store'

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

export default function Dummy() {
  const position = useStateDummy((state) => state.position)
  const direction = useStateDummy((state) => state.direction)
  const actionIndex = useStateDummy((state) => state.actionIndex)

  const refPosition = useRef<{ x: number; y: number; z: number }>({
    x: position.x,
    y: position.y,
    z: position.z
  })
  const refDirection = useRef<number>(direction)

  const refControl = useRef<Group>(null!)
  const refAsset = useRef<Group>(null!)

  const { nodes, materials, animations } = useGLTF('/dummy.gltf') as GLTFResult
  const { actions, names } = useAnimations(animations, refAsset)

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
    refPosition.current.x = MathUtils.lerp(
      refPosition.current.x,
      position.x,
      delta * 1.65
    )
    refPosition.current.z = MathUtils.lerp(
      refPosition.current.z,
      position.z,
      delta * 1.65
    )
    refDirection.current = MathUtils.lerp(
      refDirection.current,
      direction,
      delta * 1.75
    )

    refControl.current.position.x = refPosition.current.x
    refControl.current.position.z = refPosition.current.z
    refControl.current.rotation.y = refDirection.current
  })

  return (
    <group ref={refControl}>
      <group ref={refAsset} dispose={null}>
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
      </group>
    </group>
  )
}

useGLTF.preload('/dummy.gltf')
