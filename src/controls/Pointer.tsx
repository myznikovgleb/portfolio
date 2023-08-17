import { useDummyState } from '../store/dummyState'
import { useIsMobileDevice, usePointerLong } from '../utils'
import { IconArrowForward, IconArrowLeft, IconArrowRight } from '../icons'

export function Pointer() {
  const move = useDummyState((dummyState) => dummyState.move)
  const turnLeft = useDummyState((dummyState) => dummyState.turnLeft)
  const turnRight = useDummyState((dummyState) => dummyState.turnRight)

  const onPointerLongForward = usePointerLong(
    (isFired: boolean) => move(isFired),
    750
  )

  const onPointerLongLeft = usePointerLong(
    (isFired: boolean) => turnLeft(isFired),
    1250
  )

  const onPointerLongRight = usePointerLong(
    (isFired: boolean) => turnRight(isFired),
    1250
  )

  const isMobileDevice = useIsMobileDevice()

  return (
    <div
      className={`absolute ${
        isMobileDevice ? 'bottom-[12%]' : 'bottom-[4%]'
      } left-[2%] z-10 px-2`}
    >
      <div className="grid grid-row-2 grid-col-3">
        <div className="row-start-1 col-start-2">
          <button {...onPointerLongForward} className="ctrl">
            <IconArrowForward
              height={isMobileDevice ? 48 : 72}
              width={isMobileDevice ? 48 : 72}
            />
          </button>
        </div>

        <div className="row-start-2 col-start-1">
          <button {...onPointerLongLeft} className="ctrl">
            <IconArrowLeft
              height={isMobileDevice ? 48 : 72}
              width={isMobileDevice ? 48 : 72}
            />
          </button>
        </div>

        <div className="row-start-2 col-start-3">
          <button {...onPointerLongRight} className="ctrl">
            <IconArrowRight
              height={isMobileDevice ? 48 : 72}
              width={isMobileDevice ? 48 : 72}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
