import { IconProps } from './types'

export function IconArrowRight(props: IconProps) {
  const { height, width } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill="currentColor"
    >
      <path d="M645-433H135v-94h510L413-759l67-67 346 346-346 345-67-66 232-232Z" />
    </svg>
  )
}
