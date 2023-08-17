import { useEffect, useState } from 'react'

export function useIsMobileDevice() {
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false)

  useEffect(() => {
    setIsMobileDevice(/Mobi/i.test(window.navigator.userAgent))
  }, [])

  return isMobileDevice
}
