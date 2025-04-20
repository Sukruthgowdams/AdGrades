"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"

export const AnimatedCounter = ({ value, label, symbol = "", duration = 2.5 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl font-bold mb-2 text-blue-500">
        {inView ? <CountUp end={value} duration={duration} separator="," suffix={symbol} /> : `0${symbol}`}
      </div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  )
}
