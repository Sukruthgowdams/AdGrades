"use client"
import { motion } from "framer-motion"

export const RotatingElement = ({ children, className = "", duration = 20, clockwise = true, hover = false }) => {
  const baseAnimation = {
    rotate: clockwise ? 360 : -360,
    transition: {
      duration: duration,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    },
  }

  return (
    <motion.div
      className={className}
      initial={{ rotate: 0 }}
      animate={!hover ? baseAnimation : undefined}
      whileHover={hover ? baseAnimation : undefined}
    >
      {children}
    </motion.div>
  )
}

