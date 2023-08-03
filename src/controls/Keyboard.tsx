import { useEffect } from 'react'

import { useDummyState } from '../store/dummyState'

interface KeyConfig {
  key: string
  handler: (isPressed: boolean) => void
}

interface KeyMap {
  isPressed: boolean
  handler: (isPressed: boolean) => void
}

function useKeys(keyConfigs: KeyConfig[]) {
  useEffect(() => {
    const keyMaps = keyConfigs.reduce<{ [key: string]: KeyMap }>(
      (keyMaps, { key, handler }) => {
        keyMaps[key] = { isPressed: false, handler }
        return keyMaps
      },
      {}
    )

    const downHandler = ({ key }: KeyboardEvent) => {
      if (!keyMaps[key]) return

      keyMaps[key].isPressed = true
      const { isPressed, handler } = keyMaps[key]
      handler(isPressed)
    }

    const upHandler = ({ key }: KeyboardEvent) => {
      if (!keyMaps[key]) return

      keyMaps[key].isPressed = false
      const { isPressed, handler } = keyMaps[key]
      handler(isPressed)
    }

    window.addEventListener('keydown', downHandler, { passive: true })
    window.addEventListener('keyup', upHandler, { passive: true })

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [keyConfigs])
}

export function Keyboard() {
  const move = useDummyState((dummyState) => dummyState.move)
  const turnLeft = useDummyState((dummyState) => dummyState.turnLeft)
  const turnRight = useDummyState((dummyState) => dummyState.turnRight)

  useKeys([
    { key: 'ArrowUp', handler: move },
    { key: 'ArrowLeft', handler: turnLeft },
    { key: 'ArrowRight', handler: turnRight }
  ])

  return null
}
