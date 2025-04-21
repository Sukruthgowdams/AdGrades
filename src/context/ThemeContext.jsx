"use client"

import { createContext, useEffect, useState } from "react"

// Create context for theme
const ThemeContext = createContext()

// ThemeProvider component to wrap the application with the theme context
export const ThemeProvider = ({ children }) => {
  // State to track dark mode
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for user's system theme preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDarkMode(prefersDark)

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark")
    }
  }, [])

  useEffect(() => {
    // Update the theme in the document and localStorage based on `isDarkMode` state
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      localStorage.setItem("theme", "light")
    }
  }, [isDarkMode])

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

// Custom hook to use the theme context
export default ThemeContext
