import Image from 'next/image'

import { useDummyState } from '../store/dummyState'

export function Pointer() {
  const move = useDummyState((dummyState) => dummyState.move)
  const turnLeft = useDummyState((dummyState) => dummyState.turnLeft)
  const turnRight = useDummyState((dummyState) => dummyState.turnRight)

  return (
    <div className="absolute bottom-0 left-0 z-10 py-4 px-2">
      <div className="grid grid-row-2 grid-col-3">
        <div className="row-start-1 col-start-2">
          <button
            onPointerDown={() => move(true)}
            onPointerUp={() => move(false)}
            className="icon"
          >
            <Image
              src="arrow_forward.svg"
              width={48}
              height={48}
              alt="Moving"
              priority
            />
          </button>
        </div>

        <div className="row-start-2 col-start-1">
          <button
            onPointerDown={() => turnLeft(true)}
            onPointerUp={() => turnLeft(false)}
            className="icon"
          >
            <Image
              src="arrow_left.svg"
              width={48}
              height={48}
              alt="Clockwise rotation"
              priority
            />
          </button>
        </div>

        <div className="row-start-2 col-start-3">
          <button
            onPointerDown={() => turnRight(true)}
            onPointerUp={() => turnRight(false)}
            className="icon"
          >
            <Image
              src="arrow_right.svg"
              width={48}
              height={48}
              alt="Counterclockwise rotation"
              priority
            />
          </button>
        </div>
      </div>
    </div>
  )
}
