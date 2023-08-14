import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { Vector3, Matrix4, Frustum } from 'three'

import { useDummyState } from '../store/dummyState'

export function View() {
  const position = useDummyState((dummyState) => dummyState.position)
  const setIsInFrustum = useDummyState(
    (dummyState) => dummyState.setIsInFrustum
  )

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
