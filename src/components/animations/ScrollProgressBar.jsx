"use client"
import { motion, useScroll } from "framer-motion"
import { useTheme } from "../../context/ThemeContext"

export const ScrollProgressBar = ({ color, height = 4, zIndex = 100 }) => {
  const { scrollYProgress } = useScroll()
  const { isDarkMode } = useTheme()

  // Use the provided color or default based on theme
  const barColor = color || (isDarkMode ? "#00BFFF" : "#7c3aed")

  return (
    <motion.div
      className="fixed top-0 left-0 right-0"
      style={{
        height: height,
        background: barColor,
        transformOrigin: "0%",
        scaleX: scrollYProgress,
        zIndex: zIndex,
      }}
    />
  )
}
