import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { Vector3, Matrix4, Frustum } from 'three'

import { useStateDummy } from '../store'

export function View() {
  const position = useStateDummy((state) => state.position)
  const setIsInFrustum = useStateDummy((state) => state.setIsInFrustum)

  const camera = useThree((state) => state.camera)

  useEffect(() => {
    let projScreenMatrix = new Matrix4()

    projScreenMatrix.multiplyMatrices(
      camera.projectionMatrix,
      camera.matrixWorldInverse
    )

    let frustum = new Frustum()
    frustum.setFromProjectionMatrix(projScreenMatrix)

    setIsInFrustum(
      frustum.containsPoint(new Vector3(position.x, position.y, position.z))
    )
  }, [position, camera, setIsInFrustum])

  return null
}
