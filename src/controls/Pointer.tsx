import { useDummyState } from '../store/dummyState'
import { usePointerLong } from '../utils'
import { ArrowForward, ArrowLeft, ArrowRight } from '../icons'

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

  return (
    <div className="absolute bottom-0 left-0 z-10 py-4 px-2">
      <div className="grid grid-row-2 grid-col-3">
        <div className="row-start-1 col-start-2">
          <button {...onPointerLongForward} className="icon">
            <ArrowForward height={48} width={48} />
          </button>
        </div>

        <div className="row-start-2 col-start-1">
          <button {...onPointerLongLeft} className="icon">
            <ArrowLeft height={48} width={48} />
          </button>
        </div>

        <div className="row-start-2 col-start-3">
          <button {...onPointerLongRight} className="icon">
            <ArrowRight height={48} width={48} />
          </button>
        </div>
      </div>
    </div>
  )
}
