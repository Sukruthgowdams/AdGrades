"use client"
import { motion, useScroll } from "framer-motion"

export const ScrollProgressBar = ({ color = "#00aeff", height = 4, zIndex = 100 }) => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0"
      style={{
        height: height,
        background: color,
        transformOrigin: "0%",
        scaleX: scrollYProgress,
        zIndex: zIndex,
      }}
    />
  )
}
