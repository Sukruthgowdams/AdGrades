"use client"
import { motion } from "framer-motion"

export const FloatingElement = ({
  children,
  className = "",
  amplitude = 10, // How far it moves
  duration = 3, // How long each cycle takes
  delay = 0, // Delay before animation starts
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  )
}

