"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../CommonLayout/Button"
import { AnimatedButton } from "../animations/AnimatedButton"
import { NAV_LINKS } from "../../constants"
import GooeyNav from "../../blocks/Components/GooeyNav/GooeyNav"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const fullText = "AdGrades"
  const [visibleLetters, setVisibleLetters] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    if (!isAnimating) return
    const seq = [...Array(fullText.length).keys()].map((i) => i + 1).concat(fullText.length, 0)
    let i = 0
    const interval = setInterval(() => {
      setVisibleLetters(seq[i])
      i = (i + 1) % seq.length
    }, 300)
    return () => clearInterval(interval)
  }, [isAnimating])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 50)
      setIsAnimating(y <= 50)
      setVisibleLetters(y > 50 ? fullText.length : visibleLetters)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [visibleLetters])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 py-2"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.nav
        className={`w-full max-w-6xl px-4 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-[#12141e]/80 backdrop-blur-md shadow-md rounded-full"
            : "bg-[#12141e] shadow"
        }`}
        ref={navRef}
        animate={{
          width: scrolled ? "92%" : "100%",
          borderRadius: scrolled ? "9999px" : "0px",
          opacity: scrolled ? 0.95 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center">
          <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="flex items-center font-bold text-xl">
            {fullText.split("").map((char, i) => (
              <motion.span
                key={i}
                className={i < 2 ? "text-[#01afff]" : "text-[#d3e3ed]"}
                initial={{ y: -20, opacity: 0 }}
                animate={{
                  y: i < visibleLetters ? 0 : -20,
                  opacity: i < visibleLetters ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20, delay: i * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </a>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#d3e3ed] hover:text-[#01afff]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <GooeyNav
              items={NAV_LINKS.map(({ name, href }) => ({ label: name, href }))}
              particleCount={12}
              particleDistances={[80, 10]}
              animationTime={350}
              colors={[1, 1, 2, 2, 3, 3]} // you can define color maps here too
            />
            <AnimatedButton
              className="bg-[#00aeff] hover:bg-[#08b7fc] text-white px-4 py-2 rounded-lg font-semibold"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px -5px rgba(0, 174, 255, 0.5)",
              }}
            >
              Let's Make You Unstoppable
            </AnimatedButton>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {NAV_LINKS.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block py-2 text-[#d3e3ed] hover:text-[#01afff]"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <Button variant="primary" className="mt-4 w-full bg-[#00aeff] hover:bg-[#08b7fc] text-white">
                Let's Make You Unstoppable
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.div>
  )
}
