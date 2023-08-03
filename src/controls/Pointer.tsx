import Image from 'next/image'

import { useDummyState } from '../store/dummyState'

export function Pointer() {
  const move = useDummyState((dummyState) => dummyState.move)
  const turnLeft = useDummyState((dummyState) => dummyState.turnLeft)
  const turnRight = useDummyState((dummyState) => dummyState.turnRight)

  const btnClassName =
    'p-1 border-4 rounded-full border-white/0 active:border-white focus-visible:outline-none'

  return (
    <div className="absolute bottom-0 left-0 z-10 py-6 px-2">
      <div className="grid grid-row-2 grid-col-3">
        <div className="row-start-1 col-start-2">
          <button
            onPointerDown={(e) => move(true)}
            onPointerUp={(e) => move(false)}
            className={btnClassName}
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
            onPointerDown={(e) => turnLeft(true)}
            onPointerUp={(e) => turnLeft(false)}
            className={btnClassName}
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
            onPointerDown={(e) => turnRight(true)}
            onPointerUp={(e) => turnRight(false)}
            className={btnClassName}
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
