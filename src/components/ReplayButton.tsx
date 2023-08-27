import { useStateDummy, useStateObstacle } from '../store'
import { useIsMobileDevice } from '../utils'
import { IconReplay } from '../icons'

export default function ReplayButton() {
  const isInFrustum = useStateDummy((state) => state.isInFrustum)
  const reset = useStateDummy((state) => state.reset)
  const spawn = useStateObstacle((state) => state.spawn)

  const isMobileDevice = useIsMobileDevice()

  if (isInFrustum) return null

  return (
    <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center">
      <button
        onPointerDown={() => {
          reset(true)
          spawn()
        }}
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
