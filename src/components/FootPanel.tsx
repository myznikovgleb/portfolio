import Link from 'next/link'

import { usePreferences } from '../store'

import { IconHome, IconSettings, IconSportsEsports } from '../icons'

export default function FootPanel() {
  const activeTabIndex = usePreferences((state) => state.activeTabIndex)
  const setActiveTabIndex = usePreferences((state) => state.setActiveTabIndex)

  return (
    <>
      <div className="fixed bottom-0 left-0 z-20 h-14 w-screen flex rounded-t-xl bg-secondary text-primary-content">
        <Link
          href="/about"
          onClick={() => setActiveTabIndex(0)}
          className={`h-full w-1/3 flex items-center justify-center rounded-t-xl ${
            activeTabIndex == 0 && 'bg-primary/20'
          }`}
        >
          <IconHome height={32} width={32} />
        </Link>
        <Link
          href="/"
          onClick={() => setActiveTabIndex(1)}
          className={`h-full w-1/3 flex items-center justify-center rounded-t-xl ${
            activeTabIndex == 1 && 'bg-primary/20'
          }`}
        >
          <IconSportsEsports height={32} width={32} />
        </Link>
        <Link
          href="/settings"
          onClick={() => setActiveTabIndex(2)}
          className={`h-full w-1/3 flex items-center justify-center rounded-t-xl ${
            activeTabIndex == 2 && 'bg-primary/20'
          }`}
        >
          <IconSettings height={32} width={32} />
        </Link>
      </div>
    </>
  )
}
