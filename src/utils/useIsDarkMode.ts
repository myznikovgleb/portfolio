import { useEffect, useState } from 'react'

export function useIsDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  function listener(e: MediaQueryListEvent) {
    setIsDarkMode(e.matches)
  }

  useEffect(() => {
    const windowMatchMedia = window.matchMedia('(prefers-color-scheme: dark)')

    setIsDarkMode(windowMatchMedia.matches)

    windowMatchMedia.addEventListener('change', listener)
    return () => windowMatchMedia.removeEventListener('change', listener)
  }, [])

  return isDarkMode
}
