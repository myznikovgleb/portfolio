import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Preferences {
  isDarkMode: boolean

  setIsDarkMode: (isDarkMode: boolean) => void
}

const usePreferences = create<Preferences>()(
  persist(
    (set) => ({
      isDarkMode: false,

      setIsDarkMode: (isDarkMode: boolean) =>
        set(() => ({
          isDarkMode: isDarkMode
        }))
    }),
    { name: 'preferences' }
  )
)

export { usePreferences }
