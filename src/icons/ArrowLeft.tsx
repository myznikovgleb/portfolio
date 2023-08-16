interface IconProps {
  height: number
  width: number
}

export function ArrowLeft(props: IconProps) {
  const { height, width } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill="white"
    >
      <path d="m315-433 232 232-67 66-345-345 345-346 67 67-232 232h511v94H315Z" />
    </svg>
  )
}
