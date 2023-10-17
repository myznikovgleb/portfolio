import { useEffect } from 'react'

import Layout from '../components/Layout'
import Credits from '../components/Credits'
import { useIsDarkMode, useIsMobileDevice } from '../utils'
import { usePreferences } from '../store/preferences'

export default function Settings() {
  const isMobileDevice = useIsMobileDevice()
  const [activeModeIndex, setActiveModeIndex] = usePreferences((state) => [
    state.activeModeIndex,
    state.setActiveModeIndex
  ])
  const setIsDarkMode = usePreferences((state) => state.setIsDarkMode)

  const isDarkModeOnSystem = useIsDarkMode()

  useEffect(() => {
    const isDarkModeNext =
      activeModeIndex == 0 ? isDarkModeOnSystem : activeModeIndex == 2

    setIsDarkMode(isDarkModeNext)

    const htmlElem = document.querySelector('html')
    if (htmlElem)
      htmlElem.setAttribute('data-theme', isDarkModeNext ? 'dark' : 'light')
  }, [activeModeIndex, isDarkModeOnSystem, setIsDarkMode])

  return (
    <Layout>
      <div
        className={`w-full h-full flex flex-col items-center justify-between ${
          isMobileDevice && 'pb-14'
        }`}
      >
        <div className="flex flex-col items-center gap-12 md:gap-24 pt-24 text-xl">
          <h2 className="font-bold text-5xl">Settings</h2>
          <div className="flex flex-col items-center gap-4">
            <p>
              Pick one of the <span className="font-bold">theme modes</span>
            </p>
            <div className="join">
              <button
                onClick={() => setActiveModeIndex(0)}
                className={`join-item btn btn-secondary md:btn-lg ${
                  !(activeModeIndex == 0) && 'btn-outline'
                }`}
              >
                System
              </button>
              <button
                onClick={() => setActiveModeIndex(1)}
                className={`join-item btn btn-secondary md:btn-lg ${
                  !(activeModeIndex == 1) && 'btn-outline'
                }`}
              >
                Light
              </button>
              <button
                onClick={() => setActiveModeIndex(2)}
                className={`join-item btn btn-secondary md:btn-lg ${
                  !(activeModeIndex == 2) && 'btn-outline'
                }`}
              >
                Dark
              </button>
            </div>
          </div>
        </div>

        <Credits />
      </div>
    </Layout>
  )
}
