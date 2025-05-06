"use client"
import { motion } from "framer-motion"
import { Container } from "../CommonLayout/Container"
import { AnimatedButton } from "../animations/AnimatedButton"
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible"


export const ContactSection = () => {
  // Animation variants
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
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              LET'S MAKE YOU UNSTOPPABLE
            </motion.h2>
            <motion.p
              className="text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Tired of marketing that doesn't work? Let's change that today.
            </motion.p>
          </div>
        </FadeInWhenVisible>

        <motion.div
          className="max-w-lg mx-auto bg-[#1f2937] rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
        >
          <form>
            <motion.div
              className="mb-4"
              custom={0}
              variants={formControlVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label htmlFor="name" className="block text-[#d3e3ed] text-lg font-semibold mb-2">
                Name
              </label>
              <motion.input
                id="name"
                type="text"
                className="w-full px-4 py-2 border border-[#3b4c59] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00aeff]"
                placeholder="Your Name"
                whileFocus={{
                  boxShadow: "0 0 0 3px rgba(124, 58, 237, 0.2)",
                  borderColor: "#7c3aed",
                }}
              />
            </motion.div>

            <motion.div
              className="mb-4"
              custom={1}
              variants={formControlVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label htmlFor="email" className="block text-[#d3e3ed] text-lg font-semibold mb-2">
                Email
              </label>
              <motion.input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-[#3b4c59] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00aeff]"
                placeholder="Your Email"
                whileFocus={{
                  boxShadow: "0 0 0 3px rgba(124, 58, 237, 0.2)",
                  borderColor: "#7c3aed",
                }}
              />
            </motion.div>

            <motion.div
              className="mb-4"
              custom={2}
              variants={formControlVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="block text-[#d3e3ed] text-lg font-semibold mb-2">
                Message
              </label>
              <motion.textarea
                id="message"
                className="w-full px-4 py-2 border border-[#3b4c59] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00aeff]"
                rows="4"
                placeholder="Your Message"
                whileFocus={{
                  boxShadow: "0 0 0 3px rgba(124, 58, 237, 0.2)",
                  borderColor: "#7c3aed",
                }}
              ></motion.textarea>
            </motion.div>

            <motion.div
              className="text-center"
              custom={3}
              variants={formControlVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
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
