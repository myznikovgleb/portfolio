import { useEffect, useState } from 'react'

import { IconBrush } from '../icons'
import { useIsDarkMode, useIsMobileDevice } from '../utils'
import { usePreferences } from '../store/preferences'

interface SettingsProps {
  refInner: React.RefObject<HTMLDialogElement>
}

export default function Settings(props: SettingsProps) {
  const { refInner } = props

  const isMobileDevice = useIsMobileDevice()

  const setIsDarkMode = usePreferences(
    (preferences) => preferences.setIsDarkMode
  )

  const isDarkModeOnSystem = useIsDarkMode()

  const [isSystemPreferred, setIsSystemPreferred] = useState<boolean>(true)
  const [isDarkModeByUser, setIsDarkModeByUser] = useState<boolean>(false)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    const isDarkModeNext = isSystemPreferred
      ? isDarkModeOnSystem
      : isDarkModeByUser

    setIsDarkMode(isDarkModeNext)

    const htmlElem = document.querySelector('html')
    if (htmlElem)
      htmlElem.setAttribute('data-theme', isDarkModeNext ? 'dark' : 'light')
  }, [isSystemPreferred, isDarkModeOnSystem, isDarkModeByUser, setIsDarkMode])

  return (
    <dialog ref={refInner} className="modal modal-bottom sm:modal-middle">
      <form
        method="dialog"
        className="modal-box"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="pb-6 font-bold text-xl md:text-3xl">Settings</h2>
        <div className="flex flex-col items-start justify-start gap-6">
          <p className="md:text-xl font-bold">
            <IconBrush
              height={isMobileDevice ? 16 : 28}
              width={isMobileDevice ? 16 : 28}
              className="inline"
            />{' '}
            <span>Theme mode</span>
          </p>
          <div className="self-center join">
            <button
              onClick={() => {
                setActiveIndex(0)
                setIsSystemPreferred(true)
              }}
              className={`join-item btn btn-secondary md:btn-lg ${
                !(activeIndex == 0) && 'btn-outline'
              }`}
            >
              System
            </button>
            <button
              onClick={() => {
                setActiveIndex(1)
                setIsSystemPreferred(false)
                setIsDarkModeByUser(false)
              }}
              className={`join-item btn btn-secondary md:btn-lg ${
                !(activeIndex == 1) && 'btn-outline'
              }`}
            >
              Light
            </button>
            <button
              onClick={() => {
                setActiveIndex(2)
                setIsSystemPreferred(false)
                setIsDarkModeByUser(true)
              }}
              className={`join-item btn btn-secondary md:btn-lg ${
                !(activeIndex == 2) && 'btn-outline'
              }`}
            >
              Dark
            </button>
          </div>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button />
      </form>
    </dialog>
  )
}
