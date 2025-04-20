"use client"

import { useEffect } from "react"

export const ScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            // Add visibility for all children elements inside the section
            const children = entry.target.querySelectorAll(".fade-in-child")
            children.forEach((child) => child.classList.add("is-visible"))
          }
        })
      },
      { threshold: 0.1 }, // Trigger animation sooner
    )

    const fadeSections = document.querySelectorAll(".fade-in-section")
    fadeSections.forEach((section) => {
      observer.observe(section)
    })

    // Handle navigation scroll animation
    const handleNavClick = () => {
      // Add class to all sections for initial state
      document.querySelectorAll("div[id]").forEach((section) => {
        section.classList.remove("scroll-highlight")
      })

      // Get hash from URL
      const hash = window.location.hash
      if (hash) {
        const targetSection = document.querySelector(hash)
        if (targetSection) {
          // Add animation class
          setTimeout(() => {
            targetSection.classList.add("scroll-highlight")
          }, 100)
        }
      }
    }

    // Listen for hash changes
    window.addEventListener("hashchange", handleNavClick)

    return () => {
      fadeSections.forEach((section) => {
        observer.unobserve(section)
      })
      window.removeEventListener("hashchange", handleNavClick)
    }
  }, [])

  return null
}
