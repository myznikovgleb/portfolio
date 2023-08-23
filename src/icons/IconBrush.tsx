import { IconProps } from './types'

export function IconBrush(props: IconProps) {
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
      <path d="M209-93q-38 0-79-18t-76-63q43-12 58.5-32.5T131-268q3-47 37-80t86-33q52 0 88 36t36 88q0 72-49 118T209-93Zm251-253L347-464l410-411q14-13 31-14t32 14l53 53q15 15 14 32.5T873-758L460-346Z" />
    </svg>
  )
}
