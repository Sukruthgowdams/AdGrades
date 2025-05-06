"use client"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Container } from "../CommonLayout/Container"
import { AnimatedButton } from "../animations/AnimatedButton"
import { FloatingElement } from "../animations/FloatingElement"
import { TypewriterText } from "../animations/TypewriterText"
import Waves from "../../blocks/Backgrounds/Waves/Waves"
import BlurText from "../../blocks/TextAnimations/BlurText/BlurText"


export const HeroSection = () => {
  const containerRef = useRef(null)

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1 + i * 0.2,
        duration: 0.3,
        type: "spring",
        stiffness: 200,
      },
    }),
  }

  return (
    <div id="home" className="relative bg-[#12141e] py-20 overflow-hidden">
      {/* Waves Background */}
      <Waves
        lineColor="rgba(1, 175, 255, 0.2)"
        backgroundColor="transparent"
        waveSpeedX={0.0125}
        waveSpeedY={0.005}
        waveAmpX={32}
        waveAmpY={16}
        xGap={5}
        yGap={32}
        className="absolute inset-0 z-0"
      />

      <Container>
        <div ref={containerRef} className="relative z-10">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="lg:w-full max-w-4xl mx-auto text-center" variants={itemVariants}>
              <motion.p
                className="text-lg font-medium text-[#00aeff] mb-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Marketing that actually works. Unlike that gym membership you forgot about.
              </motion.p>

              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <BlurText
                  text="Not Just Another Marketing Agency. We're Your Business Growth Partner."
                  className="text-4xl md:text-6xl font-bold text-[#d3e3ed] leading-tight"
                  animateBy="words"
                  delay={200}
                  direction="top"
                  animationFrom={{
                    filter: "blur(12px)",
                    opacity: 0,
                    transform: "translate3d(0,-30px,0)",
                  }}
                  animationTo={[
                    {
                      filter: "blur(8px)",
                      opacity: 0.3,
                      transform: "translate3d(0,-10px,0)",
                      transition: { duration: 300 },
                    },
                    {
                      filter: "blur(4px)",
                      opacity: 0.7,
                      transform: "translate3d(0,-5px,0)",
                      transition: { duration: 300 },
                    },
                    {
                      filter: "blur(0px)",
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                      transition: { duration: 400 },
                    },
                  ]}
                  easing="easeOutCubic"
                />
              </motion.div>

              <motion.p
                className="text-xl text-[#08b7fc] mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                We don't just run ads. We build{" "}
                <TypewriterText
                  sequences={["revenue engines", 1000, "growth systems", 1000, "brand empires", 1000]}
                  className="text-[#01afff] font-semibold"
                />{" "}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-10 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <AnimatedButton
                  className="bg-[#00aeff] hover:bg-[#08b7fc] text-white py-3 px-8 rounded-lg font-bold"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 174, 255, 0.5)",
                  }}
                >
                  Let's Make You Unstoppable
                </AnimatedButton>

                <AnimatedButton
                  className="bg-[#d3e3ed] hover:bg-[#e6f1f9] text-[#00aeff] border border-[#00aeff] py-3 px-8 rounded-lg font-bold"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 15px -5px rgba(0, 174, 255, 0.2)",
                  }}
                >
                  See How We Scale Brands
                </AnimatedButton>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                {[
                  "Digital + Offline = Complete Domination",
                  "Performance-Driven Marketing That Sells",
                  "Tech-Powered Automation & Scaling",
                  "Zero BS, All Results",
                ].map((item, index) => (
                  <motion.div key={index} className="flex items-start" custom={index} variants={checkmarkVariants}>
                    <motion.svg
                      className="w-5 h-5 text-[#00aeff] mt-1 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 1.5 + index * 0.1,
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                    <span className="text-sm font-medium text-[#d3e3ed]">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Floating decorative elements */}
      <FloatingElement
        className="absolute top-20 right-10 w-16 h-16 bg-[#08b7fc] opacity-10 rounded-full z-0"
        amplitude={15}
        duration={4}
      />
      <FloatingElement
        className="absolute bottom-20 left-10 w-24 h-24 bg-[#01afff] opacity-10 rounded-full z-0"
        amplitude={20}
        duration={5}
        delay={1}
      />
      <FloatingElement
        className="absolute top-1/3 left-1/4 w-12 h-12 bg-[#d3e3ed] opacity-10 rounded-full z-0"
        amplitude={12}
        duration={3.5}
        delay={0.5}
      />
    </div>
  )
}

