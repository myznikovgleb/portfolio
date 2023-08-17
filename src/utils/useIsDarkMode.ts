import { useEffect, useState } from 'react'

export function useIsDarkMode() {
  const windowMatchMedia = window.matchMedia('(prefers-color-scheme: dark)')
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    windowMatchMedia.matches
  )

  function listener(e: MediaQueryListEvent) {
    setIsDarkMode(e.matches)
  }

  useEffect(() => {
    windowMatchMedia.addEventListener('change', listener)
    return () => windowMatchMedia.removeEventListener('change', listener)
  }, [windowMatchMedia])

  return isDarkMode
}
