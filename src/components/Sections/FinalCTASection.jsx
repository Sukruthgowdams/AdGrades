"use client"
import { motion } from "framer-motion"
import { AnimatedButton } from "../animations/AnimatedButton"
import { Container } from "../CommonLayout/Container"
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible"
import { AnimatedGradientText } from "../animations/AnimatedGradientText"


export const FinalCTASection = () => {
  return (
    <div id="final-cta" className="py-20 bg-[#12141e] text-center">
      <Container>
        <FadeInWhenVisible>
          <motion.h2
            className="text-[#d3e3ed] font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            LET'S MAKE YOU UNSTOPPABLE
          </motion.h2>
          <motion.p
            className="text-xl text-[#b6c8d6] max-w-3xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tired of marketing that doesn't work? Let's change that today.
          </motion.p>
          <motion.h3
            className="text-3xl font-semibold mb-6 text-[#d3e3ed]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Get a Free Strategy Call & <AnimatedGradientText text="Scale Your Brand Now." />
          </motion.h3>
        </FadeInWhenVisible>

        {/* Button for primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <AnimatedButton
            className="bg-[#00aeff] text-white px-6 py-3 rounded-lg hover:bg-[#08b7fc] mb-4"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 174, 255, 0.5)",
            }}
          >
            Book My Free Call
          </AnimatedButton>
        </motion.div>

        {/* Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <AnimatedButton
            className="text-[#00aeff] hover:text-[#08b7fc]"
            whileHover={{
              scale: 1.05,
              x: 5,
            }}
          >
            See Case Studies
          </AnimatedButton>
        </motion.div>
      </Container>
    </div>
  )
}
