"use client"
import { motion } from "framer-motion"

export const AnimatedButton = ({
  children,
  className = "",
  onClick,
  type = "button",
  whileHover = {
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)",
  },
  whileTap = { scale: 0.98 },
  ...props
}) => {
  return (
    <motion.button
      type={type}
      className={className}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={whileHover}
      whileTap={whileTap}
      {...props}
    >
      {children}
    </motion.button>
  )
}
