// vite.config.js
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"

// Replace 'your-repo-name' with your actual GitHub repository name
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
