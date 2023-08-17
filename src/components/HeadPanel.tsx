import { useRef } from 'react'

import About from './About'
import Settings from './Settings'
import { IconHome, IconSettings } from '../icons'

export default function FootPanel() {
  const refAbout = useRef<HTMLDialogElement>(null!)
  const refSettings = useRef<HTMLDialogElement>(null!)

  return (
    <>
      <div className="navbar fixed top-0 left-0 z-20 bg-secondary/0">
        <div className="flex-1"></div>
        <div className="flex-none flex gap-4">
          <a
            onClick={() => refAbout.current.showModal()}
            className="btn btn-square btn-lg btn-secondary"
          >
            <IconHome height={36} width={36} />
          </a>
          <a
            onClick={() => refSettings.current.showModal()}
            className="btn btn-square btn-lg btn-secondary"
          >
            <IconSettings height={36} width={36} />
          </a>
        </div>
      </div>

      <About refInner={refAbout} />
      <Settings refInner={refSettings} />
    </>
  )
}
