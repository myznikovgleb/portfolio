import { useEffect } from 'react'

import { useDummyState } from '../store/dummyState'

interface KeyConfig {
  key: string
  handler: (isPressed: boolean) => void
  delay: number
}

interface KeyMap {
  isPressed: boolean
  handler: (isPressed: boolean) => void
  delay: number
}

function useKeys(keyConfigs: KeyConfig[]) {
  useEffect(() => {
    const keyMaps = keyConfigs.reduce<{ [key: string]: KeyMap }>(
      (keyMaps, { key, handler, delay }) => {
        keyMaps[key] = { isPressed: false, handler, delay }
        return keyMaps
      },
      {}
    )

    const downHandler = ({ key }: KeyboardEvent) => {
      if (!keyMaps[key]) return

      if (keyMaps[key].isPressed) return

      keyMaps[key].isPressed = true
      keyMaps[key].handler(true)
      setTimeout(() => {
        keyMaps[key].isPressed = false
      }, keyMaps[key].delay)
    }

    const upHandler = ({ key }: KeyboardEvent) => {
      if (!keyMaps[key]) return

      keyMaps[key].isPressed = false
      keyMaps[key].handler(false)
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
    { key: 'ArrowUp', handler: move, delay: 750 },
    { key: 'ArrowLeft', handler: turnLeft, delay: 1250 },
    { key: 'ArrowRight', handler: turnRight, delay: 1250 }
  ])

  return null
}
