import { useDummyState } from '../store/dummyState'
import { useIsMobileDevice } from '../utils'
import { IconReplay } from '../icons'

export default function ReplayButton() {
  const isInFrustum = useDummyState((dummyState) => dummyState.isInFrustum)
  const reset = useDummyState((dummyState) => dummyState.reset)

  const isMobileDevice = useIsMobileDevice()

  if (isInFrustum) return null

  return (
    <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center">
      <button
        onPointerDown={() => reset(true)}
        onPointerUp={() => reset(false)}
        className="ctrl animate-bounce"
      >
        <IconReplay
          height={isMobileDevice ? 48 : 72}
          width={isMobileDevice ? 48 : 72}
        />
      </button>
    </div>
  )
}
