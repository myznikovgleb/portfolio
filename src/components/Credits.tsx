import { IconGithub } from '../icons'
import { useIsMobileDevice } from '../utils'

export default function Credits() {
  const isMobileDevice = useIsMobileDevice()

  return (
    <div className="pb-2 flex flex-col items-center text-sm">
      <div className="flex flex-col items-center">
        <p className="font-bold">Like it?</p>
        <p>
          Please welcome to the{' '}
          <a href="https://github.com/myznikovgleb/portfolio">
            <span className="link">source code page</span>{' '}
            <IconGithub
              height={isMobileDevice ? 24 : 32}
              width={isMobileDevice ? 24 : 32}
              className="inline"
            />
          </a>
        </p>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-bold">Want to see more?</p>
        <p>
          Please welcome to my{' '}
          <a href="https://github.com/myznikovgleb">
            <span className="link">github page</span>{' '}
            <IconGithub
              height={isMobileDevice ? 24 : 32}
              width={isMobileDevice ? 24 : 32}
              className="inline"
            />
          </a>
        </p>
      </div>
    </div>
  )
}
