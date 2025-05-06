"use client"
import { motion } from "framer-motion"
import { AnimatedButton } from "../animations/AnimatedButton"
import { Container } from "../CommonLayout/Container"
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible"
import { AnimatedCard } from "../animations/AnimatedCard"
import { PRICING_PLANS } from "../../constants"


export const PricingSection = () => {
  return (
    <div id="pricing" className="py-20 bg-[#12141e] text-[#d3e3ed]">
      <Container>
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <motion.p
              className="text-[#00aeff] font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              PRICING OR CUSTOM SOLUTIONS – Transparency Builds Trust
            </motion.p>
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              One-size-fits-all marketing? Not here. We build strategies that fit YOUR business.
            </motion.h2>
          </div>
        </FadeInWhenVisible>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {PRICING_PLANS.map((plan, index) => (
            <AnimatedCard
              key={index}
              className="bg-[#1f2937] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              delay={index * 0.1}
            >
              <motion.h3
                className="text-2xl font-semibold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {plan.title}
              </motion.h3>
              <motion.p
                className="mb-4 text-[#b6c8d6]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {plan.description}
              </motion.p>
              <motion.p
                className="text-xl font-bold mb-4 text-[#00aeff]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                {plan.price}
              </motion.p>

              <motion.ul
                className="mb-6 space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center text-[#b6c8d6]"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.8 + index * 0.1 + idx * 0.05,
                    }}
                  >
                    <motion.svg
                      className="w-4 h-4 text-[#00aeff] mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 0.9 + index * 0.1 + idx * 0.05,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>

              <AnimatedButton
                className="bg-[#00aeff] text-white px-6 py-3 rounded-lg hover:bg-[#08b7fc] w-full"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0, 174, 255, 0.5)",
                }}
              >
                Get a Custom Quote
              </AnimatedButton>
            </AnimatedCard>
          ))}
        </motion.div>
      </Container>
    </div>
  )
}
