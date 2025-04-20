import { TypeAnimation } from "react-type-animation"

export const TypewriterText = ({
  sequences,
  className = "",
  wrapper = "span",
  speed = 50,
  repeat = Number.POSITIVE_INFINITY,
}) => {
  return <TypeAnimation sequence={sequences} wrapper={wrapper} speed={speed} repeat={repeat} className={className} />
}

