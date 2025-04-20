"use client"
import { motion } from "framer-motion"

export const FadeInWhenVisible = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  direction = "up", // "up", "down", "left", "right"
  distance = 50,
  once = true,
}) => {
  // Set initial animation properties based on direction
  const initial = { opacity: 0 }

  if (direction === "up") initial.y = distance
  else if (direction === "down") initial.y = -distance
  else if (direction === "left") initial.x = distance
  else if (direction === "right") initial.x = -distance

  // Set animate properties (target state)
  const animate = { opacity: 1 }

  if (direction === "up" || direction === "down") animate.y = 0
  else if (direction === "left" || direction === "right") animate.x = 0

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

