"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "../CommonLayout/Container"
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible"
import { FAQS } from "../../constants"


export const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div id="faqs" className="py-20 bg-[#12141e]">
      <Container>
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold mb-6 text-[#d3e3ed]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="text-xl text-[#b6c8d6] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have questions? We've got answers.
            </motion.p>
          </div>
        </FadeInWhenVisible>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {FAQS.map((faq, index) => (
            <FadeInWhenVisible key={index} direction="up" delay={0.1 * index}>
              <motion.div
                className="mb-4 bg-[#1e222f] rounded-lg shadow-md overflow-hidden hover:shadow-lg"
                whileHover={{
                  boxShadow: "0 10px 15px -5px rgba(0, 174, 255, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ backgroundColor: "rgba(0,174,255,0.05)" }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-bold text-lg text-[#d3e3ed]">{faq.question}</span>
                  <motion.svg
                    className="w-5 h-5"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="p-5 pt-0 text-[#b6c8d6] border-t border-[#2c3244]"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </motion.div>
      </Container>
    </div>
  )
}
