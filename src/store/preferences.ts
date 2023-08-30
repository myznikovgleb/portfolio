import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Preferences {
  isDarkMode: boolean
  activeTabIndex: number
  activeModeIndex: number

  setIsDarkMode: (isDarkMode: boolean) => void
  setActiveTabIndex: (newActiveTabIndex: number) => void
  setActiveModeIndex: (newActiveModeIndex: number) => void
}

const usePreferences = create<Preferences>()(
  persist(
    (set) => ({
      isDarkMode: false,
      activeTabIndex: 1,
      activeModeIndex: 0,

      setIsDarkMode: (isDarkMode) =>
        set(() => ({
          isDarkMode: isDarkMode
        })),
      setActiveTabIndex: (newActiveTabIndex) =>
        set(() => ({
          activeTabIndex: newActiveTabIndex
        })),
      setActiveModeIndex: (newActiveModeIndex) =>
        set(() => ({
          activeModeIndex: newActiveModeIndex
        }))
    }),
    { name: 'preferences' }
  )
)

export { usePreferences }
