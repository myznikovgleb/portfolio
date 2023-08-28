import { create } from 'zustand'

import type { Triplet } from './types'

interface StateObstacle {
  position: Triplet

  spawn: () => void

  jump: (n: Triplet) => void
}

const useStateObstacle = create<StateObstacle>()((set) => ({
  position: { x: 0, y: 0.75, z: 0 },

  spawn: () => {
    return set(() => ({
      position: {
        x: Math.random() * 5 - 2.5,
        y: 0.75,
        z: Math.random() * 5
      }
    }))
  },

  jump: (n) => {
    return set(() => ({
      position: {
        x: n.x * 10,
        y: 5,
        z: n.z * 10
      }
    }))
  }
}))

export { useStateObstacle }
