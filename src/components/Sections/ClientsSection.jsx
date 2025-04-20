"use client"
import { motion } from "framer-motion"
import { Container } from "../CommonLayout/Container"
import { AnimatedCard } from "../animations/AnimatedCard"
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible"
import { CLIENTS } from "../../constants"

export const ClientsSection = () => {
  return (
    <div id="clients" className="py-20 bg-gray-50">
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
              OUR CLIENT SUCCESS STORIES
            </motion.p>
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Real brands. Real growth.
              <br />
              Real results.
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
          {CLIENTS.map((client, index) => (
            <AnimatedCard
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              delay={index * 0.1}
            >
              <div className="flex items-center justify-between mb-4">
                <motion.img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                />
                <motion.span
                  className="bg-purple-100 text-purple-700 text-xs font-medium px-2.5 py-1 rounded"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  {client.tag}
                </motion.span>
              </div>
              <motion.h3
                className="text-xl font-bold mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                {client.name}
              </motion.h3>
              <motion.p
                className="text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                {client.description}
              </motion.p>
              <motion.div
                className="text-right"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <motion.a
                  href="#"
                  className="text-purple-600 font-medium hover:text-purple-800"
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  Read Case Study →
                </motion.a>
              </motion.div>
            </AnimatedCard>
          ))}
        </motion.div>
      </Container>
    </div>
  )
}
