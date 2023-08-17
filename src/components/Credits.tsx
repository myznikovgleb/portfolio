import { useRef, useState } from 'react'

import { Github, Home, Settings, SportsEsports } from '../icons'

export default function Credits() {
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
          <Home height={32} width={32} />
        </a>
        <a
          onClick={() => {
            setActiveTabIndex(1)
          }}
          className={`h-full w-1/3 flex items-center justify-center rounded-t-xl ${
            activeTabIndex == 1 && 'bg-primary/20'
          }`}
        >
          <SportsEsports height={32} width={32} />
        </a>
        <a
          onClick={() => {
            refSettings.current.showModal()
          }}
          className={`h-full w-1/3 flex items-center justify-center rounded-t-xl ${
            activeTabIndex == 2 && 'bg-primary/20'
          }`}
        >
          <Settings height={32} width={32} />
        </a>
      </div>

      <dialog ref={refAbout} className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h2 className="pb-6 font-bold text-xl">Hello ✌️</h2>

          <p>
            I am <span className="font-bold">Gleb Myznikov</span>.
          </p>
          <p className="pb-6">Walking man is one of my pet projects</p>

          <p className="text-sm font-bold">Like it?</p>
          <p className="text-sm pb-2">
            Please welcome to the{' '}
            <a href="https://github.com/myznikovgleb/portfolio">
              <span className="link">source code page</span>{' '}
              <Github height={18} width={18} className="inline" />
            </a>
          </p>

          <p className="text-sm font-bold">Want to see more?</p>
          <p className="text-sm">
            Please welcome to my{' '}
            <a href="https://github.com/myznikovgleb">
              <span className="link">github page</span>{' '}
              <Github height={18} width={18} className="inline" />
            </a>
          </p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>

      <dialog ref={refSettings} className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h2 className="pb-6 font-bold text-xl">Settings ⚙️</h2>
          <p>
            <span className="font-bold">Appearance</span>
          </p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </>
  )
}
