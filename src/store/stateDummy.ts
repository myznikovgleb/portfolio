import { create } from 'zustand'

import type { Triplet } from './types'

interface StateDummy {
  position: Triplet
  direction: number
  actionIndex: number
  isInFrustum: boolean

  move: (isPressed: boolean) => void
  turnLeft: (isPressed: boolean) => void
  turnRight: (isPressed: boolean) => void
  reset: (isPressed: boolean) => void
  setIsInFrustum: (isInFrustumNow: boolean) => void
}

const useStateDummy = create<StateDummy>()((set) => ({
  position: { x: 0, y: 0, z: -1.5 },
  direction: 0,
  actionIndex: 0,
  isInFrustum: true,

  move: (isPressed) => {
    if (isPressed) {
      const delta = 0.65
      return set((state) => ({
        position: {
          ...state.position,
          x: state.position.x + delta * Math.sin(state.direction),
          z: state.position.z + delta * Math.cos(state.direction)
        },
        actionIndex: 2
      }))
    } else {
      return set(() => ({
        actionIndex: 0
      }))
    }
  },
  turnLeft: (isPressed) => {
    if (isPressed) {
      return set((state) => ({
        direction: state.direction + Math.PI / 4,
        actionIndex: 1
      }))
    } else {
      return set(() => ({
        actionIndex: 0
      }))
    }
  },
  turnRight: (isPressed) => {
    if (isPressed) {
      return set((state) => ({
        direction: state.direction - Math.PI / 4,
        actionIndex: 1
      }))
    } else {
      return set(() => ({
        actionIndex: 0
      }))
    }
  },

  reset: (isPressed) => {
    if (isPressed) {
      return set((state) => ({
        position: {
          ...state.position,
          x: 0,
          z: -1.5
        },
        direction: state.direction - (state.direction % (Math.PI * 2))
      }))
    }
  },

  setIsInFrustum: (isInFrustumNow) => {
    return set(() => ({
      isInFrustum: isInFrustumNow
    }))
  }
}))

export { useStateDummy }
