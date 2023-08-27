import { create } from 'zustand'

import type { Triplet } from './types'

interface StateObstacle {
  position: Triplet

  spawn: () => void
}

const useStateObstacle = create<StateObstacle>()((set) => ({
  position: { x: 0, y: 0.75, z: 0 },

  spawn: () => {
    return set((state) => ({
      position: {
        ...state.position,
        x: Math.random() * 5 - 2.5,
        z: Math.random() * 5
      }
    }))
  }
}))

export { useStateObstacle }
