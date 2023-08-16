import { useCallback, useRef } from 'react'
import { Event } from 'three'

export function usePointerLong(
  handler: (isFired: boolean) => void,
  delay: number
) {
  const timer = useRef<ReturnType<typeof setInterval>>(null!)

  const fire = useCallback(
    (e: Event) => {
      if (e.currentTarget) e.currentTarget.classList.add('active')
      timer.current = setInterval(() => {
        handler(true)
      }, delay)
      handler(true)
    },
    [handler, delay]
  )

  const clear = useCallback(
    (e: Event) => {
      if (e.currentTarget) e.currentTarget.classList.remove('active')
      timer.current && clearTimeout(timer.current)
      handler(false)
    },
    [handler]
  )

  return {
    onPointerDown: (e: Event) => fire(e),
    onPointerUp: (e: Event) => clear(e),
    onPointerLeave: (e: Event) => clear(e),
    onContextMenu: (e: Event) => e.preventDefault()
  }
}
