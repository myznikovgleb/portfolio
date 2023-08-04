import { useRef } from 'react'
import Image from 'next/image'

export default function Credits() {
  const ref = useRef<HTMLDialogElement>(null!)

  return (
    <div className="absolute top-0 left-0 z-10 py-4 px-2">
      <button
        onClick={() => ref.current.showModal()}
        className="btn btn-circle btn-primary"
      >
        <Image src="question.svg" width={24} height={24} alt="About" priority />
      </button>

      <dialog ref={ref} className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h2 className="pb-6 font-bold text-xl">Hello✌️</h2>

          <p className="pb-6">
            You&apos;ve just met that cute{' '}
            <span className="font-bold">Walking Man</span>
          </p>

          <p className="text-sm">Like it?</p>
          <p className="pb-2 text-sm">
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
        </form>

        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </div>
  )
}
