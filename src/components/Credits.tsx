import { useRef, useState } from 'react'
import Image from 'next/image'

import dummyImage from '../../public/dummy.png'

export default function Credits() {
  const ref = useRef<HTMLDialogElement>(null!)
  const [activeTabIndex, setActiveTabIndex] = useState(1)

  return (
    <div className="absolute top-0 left-0 z-10 py-4 px-2">
      <button
        onClick={() => ref.current.showModal()}
        className="btn btn-circle btn-primary"
      >
        <Image src="question.svg" width={24} height={24} alt="About" priority />
      </button>

      <dialog ref={ref} className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box pb-0 px-0">
          <div className="px-6">
            {activeTabIndex == 0 && (
              <>
                <h2 className="pb-6 font-bold text-xl">Hello ✌️</h2>

                <p>
                  I am <span className="font-bold">Gleb Myznikov</span>.
                </p>
                <p className="pb-6">Walking man is one of my pet projects</p>

                <p className="text-sm">Want to see more?</p>
                <p className="pb-6 text-sm">
                  Please welcome to my{' '}
                  <a href="https://github.com/myznikovgleb">
                    <span className="link">github page</span>{' '}
                    <Image
                      src="github.svg"
                      width={18}
                      height={18}
                      alt="GitHub"
                      priority
                      className="inline"
                    />
                  </a>
                </p>
              </>
            )}
            {activeTabIndex == 1 && (
              <>
                <h2 className="pb-6 font-bold text-xl">What happens 🤯</h2>

                <p>
                  You&apos;ve just met that cute{' '}
                  <span className="font-bold">Walking Man</span>.
                </p>
                <p className="pb-6">Do not head him to the fog</p>

                <p className="text-sm">Like it?</p>
                <p className="pb-6 text-sm">
                  Please welcome to the{' '}
                  <a href="https://github.com/myznikovgleb/portfolio">
                    <span className="link">source code page</span>{' '}
                    <Image
                      src="github.svg"
                      width={18}
                      height={18}
                      alt="GitHub"
                      priority
                      className="inline"
                    />
                  </a>
                </p>
              </>
            )}
            {activeTabIndex == 2 && (
              <>
                <h2 className="pb-6 font-bold text-xl">About 🚶</h2>

                <p>
                  You&apos;ve entered{' '}
                  <span className="font-bold">Walking Man</span> personal page
                </p>

                <div className="h-[112.5px]" />

                <div className="absolute z-[-1] bottom-4 left-0 w-full flex items-center justify-center">
                  <Image
                    className="w-[256px]"
                    src={dummyImage}
                    alt="Author"
                    priority
                  />
                </div>
              </>
            )}
          </div>
          <div className="w-full h-14 flex rounded-t-xl bg-primary-focus">
            <a
              onClick={() => setActiveTabIndex(0)}
              className={`h-full w-1/3 flex items-center justify-center rounded-t-xl ${
                activeTabIndex == 0 && 'bg-primary'
              }`}
            >
              <Image
                src="person.svg"
                width={24}
                height={24}
                alt="Author"
                priority
              />
            </a>
            <a
              onClick={() => setActiveTabIndex(1)}
              className={`h-full w-1/3 flex items-center justify-center rounded-t-xl ${
                activeTabIndex == 1 && 'bg-primary'
              }`}
            >
              <Image
                src="home.svg"
                width={24}
                height={24}
                alt="Project"
                priority
              />
            </a>
            <a
              onClick={() => setActiveTabIndex(2)}
              className={`h-full w-1/3 flex items-center justify-center rounded-t-xl ${
                activeTabIndex == 2 && 'bg-primary'
              }`}
            >
              <Image
                src="footprint.svg"
                width={24}
                height={24}
                alt="Walking Man"
                priority
              />
            </a>
          </div>
        </form>

        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </div>
  )
}
