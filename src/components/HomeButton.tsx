import Image from 'next/image'

import { useDummyState } from '../store/dummyState'

export default function HomeButton() {
  const isInFrustum = useDummyState((dummyState) => dummyState.isInFrustum)
  const reset = useDummyState((dummyState) => dummyState.reset)

  if (isInFrustum) return null

  return (
    <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center">
      <button
        onPointerDown={() => reset(true)}
        onPointerUp={() => reset(false)}
        className="icon animate-bounce"
      >
        <Image
          src="arrow_back.svg"
          width={48}
          height={48}
          alt="Reseting"
          priority
        />
      </button>
    </div>
  )
}
