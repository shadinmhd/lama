import type { SVGProps } from "react"

const BellIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 20 20"
      fill="#3C3C3C"
      {...props}
    >
      <path d="M11.5 2.19C14.09 2.86 16 5.2 16 8v6l2 2v1H2v-1l2-2V8c0-2.8 1.91-5.14 4.5-5.81V1.5C8.5.67 9.17 0 10 0s1.5.67 1.5 1.5zM10 4C7.79 4 6 5.79 6 8v7h8V8c0-2.21-1.79-4-4-4M8 18h4c0 1.1-.9 2-2 2s-2-.9-2-2"></path>
    </svg>
  )
}

export default BellIcon
