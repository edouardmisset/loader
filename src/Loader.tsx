import { ReactElement } from 'react'
import './Loader.css'

const Loader: (props: { size: number; color?: string }) => ReactElement = ({
  size,
  color,
}) => (
  <svg
    className="loader"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color || 'currentColor'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
  </svg>
)

export default Loader
