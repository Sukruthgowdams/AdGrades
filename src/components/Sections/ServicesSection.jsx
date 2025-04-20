"use client"
import { motion } from "framer-motion"
import { Container } from "../CommonLayout/Container"
import { AnimatedButton } from "../animations/AnimatedButton"
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible"
import { SERVICES } from "../../constants"
import PixelCard from "../../blocks/Components/PixelCard/PixelCard"

export const ServicesSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const checkmarkVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  }

  return (
    <div id="services" className="py-20 bg-white">
      <Container>
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <motion.p
              className="text-purple-600 font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              OUR SERVICES – THE GAME-CHANGERS
            </motion.p>
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We don't just run ads.
              <br />
              We build revenue engines that never stop.
            </motion.h2>
          </div>
        </FadeInWhenVisible>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES.map((service, index) => (
            <PixelCard
              key={index}
              variant="soft-dark" // New softer variant
              className="p-8 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300"
              gap={15} // Fewer particles (larger gap)
              speed={30} // Slower animation
              colors="#4c1d95,#5b21b6,#6d28d9" // Softer purple palette
            >
              <div className="relative">
                <motion.div
                  className="text-4xl mb-4 text-purple-600"
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                    scale: [1, 1.1, 1, 0.9, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    delay: index * 0.5,
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.category}</h3>
                <motion.ul
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {service.items.map((item, idx) => (
                    <motion.li key={idx} className="flex items-start" variants={itemVariants} custom={idx}>
                      <motion.svg
                        className="w-5 h-5 text-purple-600 mt-0.5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        variants={checkmarkVariants}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </PixelCard>
          ))}
        </motion.div>

        <div className="text-center">
          <AnimatedButton
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg font-bold"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)",
            }}
          >
            Get a Free Marketing Audit
          </AnimatedButton>
        </div>
      </Container>
    </div>
  )
}
