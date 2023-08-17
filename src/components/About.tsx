import { IconGithub } from '../icons'
import { useIsMobileDevice } from '../utils'

interface AboutProps {
  refInner: React.RefObject<HTMLDialogElement>
}

export default function Settings(props: AboutProps) {
  const { refInner } = props

  const isMobileDevice = useIsMobileDevice()

  return (
    <dialog ref={refInner} className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h2 className="pb-6 font-bold text-xl md:text-3xl">Hello ✌️</h2>

        <p className="md:text-xl">
          I am <span className="font-bold">Gleb Myznikov</span>
        </p>
        <p className="pb-6 md:text-xl">Walking man is one of my pet projects</p>

        <p className="text-sm md:text-lg font-bold">Like it?</p>
        <p className="text-sm md:text-lg pb-2">
          Please welcome to the{' '}
          <a href="https://github.com/myznikovgleb/portfolio">
            <span className="link">source code page</span>{' '}
            <IconGithub
              height={isMobileDevice ? 18 : 32}
              width={isMobileDevice ? 18 : 32}
              className="inline"
            />
          </a>
        </p>

        <p className="text-sm md:text-lg font-bold">Want to see more?</p>
        <p className="text-sm md:text-lg">
          Please welcome to my{' '}
          <a href="https://github.com/myznikovgleb">
            <span className="link">github page</span>{' '}
            <IconGithub
              height={isMobileDevice ? 18 : 32}
              width={isMobileDevice ? 18 : 32}
              className="inline"
            />
          </a>
        </p>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button />
      </form>
    </dialog>
  )
}
