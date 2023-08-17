import { IconProps } from './types'

export function ArrowForward(props: IconProps) {
  const { height, width } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill="currentColor"
    >
      <path d="M433-135v-510L201-413l-66-67 345-346 346 346-67 67-232-232v510h-94Z" />
    </svg>
  )
}
