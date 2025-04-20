"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export const ParallaxSection = ({
  children,
  className = "",
  direction = "up", // "up", "down", "left", "right"
}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Create transform properties for both axes, but only use the relevant one
  const transformY = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? ["0%", "-20%"] : direction === "down" ? ["0%", "20%"] : ["0%", "0%"],
  )

  const transformX = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? ["0%", "-10%"] : direction === "right" ? ["0%", "10%"] : ["0%", "0%"],
  )

  // Apply the appropriate transform
  const style = direction === "up" || direction === "down" ? { y: transformY } : { x: transformX }

  return (
    <motion.div ref={ref} style={style} className={className}>
      {children}
    </motion.div>
  )
}

