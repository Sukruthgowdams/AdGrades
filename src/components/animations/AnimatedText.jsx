"use client"
import { motion } from "framer-motion"

export const AnimatedText = ({
  text,
  className = "",
  once = true,
  delay = 0,
  duration = 0.05,
  type = "words", // "words" or "chars"
}) => {
  // Split text into words or characters
  const items = type === "words" ? text.split(" ") : text.split("")

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: delay * i,
      },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={className}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{
            display: "inline-block",
            marginRight: type === "words" && item !== " " ? "10px" : "0", // Adjust margin between words
          }}
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  )
}
