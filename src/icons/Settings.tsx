import { IconProps } from './types'

export function Settings(props: IconProps) {
  const { height, width } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill="currentColor"
    >
      <path d="m366-55-21-134q-13-4-29.5-13.5T288-221l-125 58L47-368l114-83q-1-6-1.5-14.5T159-480q0-6 .5-14.5T161-509L47-593l116-203 127 57q10-8 26-17t29-13l21-137h228l21 136q13 5 29.5 13.5T672-739l126-57 115 203-115 82q1 7 2 15.5t1 15.5q0 7-1 15t-2 15l115 82-116 205-126-58q-11 9-26.5 18.5T615-189L594-55H366Zm112-295q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z" />
    </svg>
  )
}
