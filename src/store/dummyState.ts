import { create } from 'zustand'

interface DummyState {
  position: { x: number; y: number; z: number }
  direction: number
  actionIndex: number

  move: (isPressed: boolean) => void
  turnLeft: (isPressed: boolean) => void
  turnRight: (isPressed: boolean) => void
  reset: (isPressed: boolean) => void
}

const useDummyState = create<DummyState>()((set) => ({
  position: { x: 0, y: 0, z: 0 },
  direction: 0,
  actionIndex: 2,

  move: (isPressed) => {
    if (isPressed) {
      const delta = 0.2
      return set((dummyState) => ({
        position: {
          ...dummyState.position,
          x: dummyState.position.x + delta * Math.sin(dummyState.direction),
          z: dummyState.position.z + delta * Math.cos(dummyState.direction)
        }
      }))
    }
  },
  turnLeft: (isPressed) => {
    if (isPressed) {
      return set((dummyState) => ({
        direction: dummyState.direction + Math.PI / 16
      }))
    }
  },
  turnRight: (isPressed) => {
    if (isPressed) {
      return set((dummyState) => ({
        direction: dummyState.direction - Math.PI / 16
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
  }
}))

export { useDummyState }
