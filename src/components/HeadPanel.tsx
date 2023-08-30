import Link from 'next/link'

import { usePreferences } from '../store'

import { IconHome, IconSettings, IconSportsEsports } from '../icons'

export default function HeadPanel() {
  const setActiveTabIndex = usePreferences((state) => state.setActiveTabIndex)

  return (
    <>
      <div className="navbar fixed top-0 left-0 z-20 bg-secondary/0">
        <div className="flex-1"></div>
        <div className="flex-none flex gap-4">
          <Link
            href="/about"
            onClick={() => setActiveTabIndex(0)}
            className="btn btn-square btn-lg btn-secondary"
          >
            <IconHome height={32} width={32} />
          </Link>
          <Link
            href="/"
            onClick={() => setActiveTabIndex(1)}
            className="btn btn-square btn-lg btn-secondary"
          >
            <IconSportsEsports height={32} width={32} />
          </Link>
          <Link
            href="/settings"
            onClick={() => setActiveTabIndex(2)}
            className="btn btn-square btn-lg btn-secondary"
          >
            <IconSettings height={32} width={32} />
          </Link>
        </div>
      </div>
    </>
  )
}
