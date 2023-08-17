import { useRef, useState } from 'react'

import About from './About'
import Settings from './Settings'
import { IconHome, IconSettings, IconSportsEsports } from '../icons'

export default function FootPanel() {
  const refAbout = useRef<HTMLDialogElement>(null!)
  const refSettings = useRef<HTMLDialogElement>(null!)

  const [activeTabIndex, setActiveTabIndex] = useState(1)

  return (
    <>
      <div className="fixed bottom-0 left-0 z-20 h-14 w-screen flex rounded-t-xl bg-primary/20 text-primary-content">
        <a
          onClick={() => {
            refAbout.current.showModal()
          }}
          className={`h-full w-1/3 flex items-center justify-center rounded-t-xl ${
            activeTabIndex == 0 && 'bg-primary/20'
          }`}
        >
          <IconHome height={32} width={32} />
        </a>
        <a
          onClick={() => {
            setActiveTabIndex(1)
          }}
          className={`h-full w-1/3 flex items-center justify-center rounded-t-xl ${
            activeTabIndex == 1 && 'bg-primary/20'
          }`}
        >
          <IconSportsEsports height={32} width={32} />
        </a>
        <a
          onClick={() => {
            refSettings.current.showModal()
          }}
          className={`h-full w-1/3 flex items-center justify-center rounded-t-xl ${
            activeTabIndex == 2 && 'bg-primary/20'
          }`}
        >
          <IconSettings height={32} width={32} />
        </a>
      </div>

      <About refInner={refAbout} />
      <Settings refInner={refSettings} />
    </>
  )
}
