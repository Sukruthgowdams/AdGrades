"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const LoadingScreen = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
        >
          <div className="w-64 h-64 flex items-center justify-center">
            <img src="/animations/loading-animation.gif" alt="Loadinkg" className="w-56 h-56 object-contain" />
          </div>
          <div className="text-purple-600 font-semibold mt-4 text-xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
              Loading AdGrades...
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

