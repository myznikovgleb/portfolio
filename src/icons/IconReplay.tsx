import { IconProps } from './types'

export function IconReplay(props: IconProps) {
  const { height, width, className = '' } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill="currentColor"
      className={className}
    >
      <path d="M480.31-50Q400-50 329.5-80t-123.24-82.511q-52.741-52.511-82.5-122.5Q94-355 94-436h94q0 121.986 85.119 206.493Q358.239-145 479.821-145q121.165 0 206.172-84.88Q771-314.761 771-436q0-121.986-82.298-206.493Q606.404-727 484-727h-23l67 67-50 50-166-167 166-166 50 50-72 71h23q80.825 0 151.413 30Q701-762 753.5-709.5T836-586.838q30 70.162 30 150.5t-29.779 150.729q-29.78 70.391-82.553 123.2Q700.894-109.6 630.757-79.8 560.62-50 480.31-50Z" />
    </svg>
  )
}
