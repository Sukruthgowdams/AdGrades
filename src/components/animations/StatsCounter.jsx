"use client"
import { motion } from "framer-motion"
import { AnimatedCounter } from "./AnimatedCounter"
import { STATS } from "../../constants"

export const StatsCounter = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Our Impact in Numbers</h2>
          <p className="text-gray-600">Results that speak for themselves</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <AnimatedCounter key={index} value={stat.value} label={stat.label} symbol={stat.symbol} duration={2.5} />
          ))}
        </div>
      </div>
    </div>
  )
}

