import { create } from 'zustand'

interface DummyState {
  position: { x: number; y: number; z: number }
  direction: number
  actionIndex: number
  isInFrustum: boolean

  move: (isPressed: boolean) => void
  turnLeft: (isPressed: boolean) => void
  turnRight: (isPressed: boolean) => void
  reset: (isPressed: boolean) => void
  setIsInFrustum: (isInFrustumNow: boolean) => void
}

const useDummyState = create<DummyState>()((set) => ({
  position: { x: 0, y: 0, z: 0 },
  direction: 0,
  actionIndex: 0,
  isInFrustum: true,

  move: (isPressed) => {
    if (isPressed) {
      const delta = 0.5
      setTimeout(
        () =>
          set(() => ({
            actionIndex: 0
          })),
        100
      )
      return set((dummyState) => ({
        position: {
          ...dummyState.position,
          x: dummyState.position.x + delta * Math.sin(dummyState.direction),
          z: dummyState.position.z + delta * Math.cos(dummyState.direction)
        },
        actionIndex: 1
      }))
    } else {
      return set(() => ({
        actionIndex: 0
      }))
    }
  },
  turnLeft: (isPressed) => {
    if (isPressed) {
      return set((dummyState) => ({
        direction: dummyState.direction + Math.PI / 8
      }))
    }
  },
  turnRight: (isPressed) => {
    if (isPressed) {
      return set((dummyState) => ({
        direction: dummyState.direction - Math.PI / 8
      }))
    }
  },

  reset: (isPressed) => {
    if (isPressed) {
      return set((dummyState) => ({
        position: {
          ...dummyState.position,
          x: 0,
          z: 0
        },
        direction: 0
      }))
    }
  },

  setIsInFrustum: (isInFrustumNow) => {
    return set(() => ({
      isInFrustum: isInFrustumNow
    }))
  }
}))

export { useDummyState }
