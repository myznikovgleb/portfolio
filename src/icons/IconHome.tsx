import { IconProps } from './types'

export function IconHome(props: IconProps) {
  const { height, width } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill="currentColor"
    >
      <path d="M135-95v-517.667L480-872l346 259v518H566v-311H394v311H135Z" />
    </svg>
  )
}
