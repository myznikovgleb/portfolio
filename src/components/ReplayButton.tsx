import { useDummyState } from '../store/dummyState'
import { IconReplay } from '../icons'

export default function ReplayButton() {
  const isInFrustum = useDummyState((dummyState) => dummyState.isInFrustum)
  const reset = useDummyState((dummyState) => dummyState.reset)

  if (isInFrustum) return null

  return (
    <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center">
      <button
        onPointerDown={() => reset(true)}
        onPointerUp={() => reset(false)}
        className="ctrl animate-bounce"
      >
        <IconReplay height={48} width={48} />
      </button>
    </div>
  )
}
