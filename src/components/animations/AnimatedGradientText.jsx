"use client"
import { motion } from "framer-motion"

export const AnimatedGradientText = ({ text, className = "" }) => {
  return (
    <motion.span
      className={`text-gradient ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.span>
  )
}
