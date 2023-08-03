import { useMemo } from 'react'
import Image from 'next/image'

import { useDummyState } from '../store/dummyState'

export default function HomeButton() {
  const position = useDummyState((dummyState) => dummyState.position)
  const reset = useDummyState((dummyState) => dummyState.reset)

  const isDummyHidden = useMemo(() => {
    const curDistance = position.x * position.x + position.z * position.z
    const maxDistance = 100
    return maxDistance < curDistance
  }, [position])

  if (!isDummyHidden) return null

  const btnClassName =
    'p-1 border-4 rounded-full border-white/0 active:border-white focus-visible:outline-none'

  return (
    <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center">
      <button
        onPointerDown={(e) => reset(true)}
        onPointerUp={(e) => reset(false)}
        className={`animate-bounce ${btnClassName}`}
      >
        <Image
          src="arrow_back.svg"
          width={48}
          height={48}
          alt="Moving"
          priority
        />
      </button>
    </div>
  )
}
