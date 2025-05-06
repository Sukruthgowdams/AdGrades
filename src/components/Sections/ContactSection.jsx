"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Container } from "../CommonLayout/Container"
import { AnimatedButton } from "../animations/AnimatedButton"
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible"
import { database, ref, push } from "./firebaseConfig" // adjust path as needed

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await push(ref(database, "contacts"), formData)
      alert("Message sent successfully!")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Failed to send message.")
    }
  }

  const formControlVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <div id="contact" className="py-20 bg-gradient-to-br from-[#12141e] to-[#08b7fc] text-[#d3e3ed]">
      <Container>
        {/* Heading & subtext */}
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <motion.h2 className="text-4xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              LET'S MAKE YOU UNSTOPPABLE
            </motion.h2>
            <motion.p className="text-xl max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              Tired of marketing that doesn't work? Let's change that today.
            </motion.p>
          </div>
        </FadeInWhenVisible>

        {/* Form */}
        <motion.div className="max-w-lg mx-auto bg-[#1f2937] rounded-lg p-8 shadow-lg" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 100 }}>
          <form onSubmit={handleSubmit}>
            {["name", "email", "message"].map((field, i) => (
              <motion.div key={field} className="mb-4" custom={i} variants={formControlVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label htmlFor={field} className="block text-[#d3e3ed] text-lg font-semibold mb-2">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field !== "message" ? (
                  <motion.input
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    className="w-full px-4 py-2 border border-[#3b4c59] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00aeff]"
                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    value={formData[field]}
                    onChange={handleChange}
                    whileFocus={{
                      boxShadow: "0 0 0 3px rgba(124, 58, 237, 0.2)",
                      borderColor: "#7c3aed",
                    }}
                  />
                ) : (
                  <motion.textarea
                    id={field}
                    rows="4"
                    className="w-full px-4 py-2 border border-[#3b4c59] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00aeff]"
                    placeholder="Your Message"
                    value={formData[field]}
                    onChange={handleChange}
                    whileFocus={{
                      boxShadow: "0 0 0 3px rgba(124, 58, 237, 0.2)",
                      borderColor: "#7c3aed",
                    }}
                  />
                )}
              </motion.div>
            ))}

            <motion.div className="text-center" custom={3} variants={formControlVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <AnimatedButton
                type="submit"
                className="bg-[#00aeff] text-white px-6 py-3 rounded-lg hover:bg-[#08b7fc]"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 174, 255, 0.5)",
                }}
              >
                Send Message
              </AnimatedButton>
            </motion.div>
          </form>
        </motion.div>
      </Container>
    </div>
  )
}
