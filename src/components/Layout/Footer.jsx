"use client"
import { motion } from "framer-motion"
import { Container } from "../CommonLayout/Container"
import { SOCIAL_LINKS, CONTACT_INFO } from "../../constants"

export const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: (i) => ({
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.3 + i * 0.1,
      },
    }),
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.footer
      className="bg-gray-900 text-white py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Container className="text-center">
        <motion.div className="flex justify-center items-center mb-8" variants={itemVariants}>
          <motion.span className="font-bold text-3xl" whileHover={{ scale: 1.05 }}>
            <span className="text-blue-400">Ad</span>
            <span className="text-white">Grades</span>
          </motion.span>
        </motion.div>

        <motion.div className="flex justify-center space-x-6 mb-8" variants={itemVariants}>
          {Object.entries(SOCIAL_LINKS).map(([platform, url], index) => (
            <motion.a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              custom={index}
              variants={socialIconVariants}
              whileHover="hover"
            >
              <span className="sr-only">{platform}</span>
              {platform === "facebook" && (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {platform === "twitter" && (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              )}
              {platform === "linkedin" && (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              )}
              {platform === "instagram" && (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.63 2c-2.33 0-2.61.01-3.53.05-.85.04-1.31.18-1.62.3-.41.16-.7.35-1 .65-.3.3-.49.59-.65 1-.12.31-.26.77-.3 1.62-.04.92-.05 1.2-.05 3.53s.01 2.61.05 3.53c.04.85.18 1.31.3 1.62.16.41.35.7.65 1 .3.3.59.49 1 .65.31.12.77.26 1.62.3.92.04 1.2.05 3.53.05s2.61-.01 3.53-.05c.85-.04 1.31-.18 1.62-.3.41-.16.7-.35 1-.65.3-.3.49-.59.65-1 .12-.31.26-.77.3-1.62.04-.92.05-1.2.05-3.53s-.01-2.61-.05-3.53c-.04-.85-.18-1.31-.3-1.62-.16-.41-.35-.7-.65-1-.3-.3-.59-.49-1-.65-.31-.12-.77-.26-1.62-.3-.92-.04-1.2-.05-3.53-.05z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {platform === "youtube" && (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              )}
            </motion.a>
          ))}
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">{CONTACT_INFO.email}</p>
            <p className="text-gray-400 mb-2">{CONTACT_INFO.phone}</p>
            <p className="text-gray-400">{CONTACT_INFO.address}</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Get the latest marketing tips and tricks.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-900 w-full"
              />
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="border-t border-gray-800 pt-8" variants={itemVariants}>
          <p className="text-gray-400">© {new Date().getFullYear()} AdGrades. All Rights Reserved.</p>
        </motion.div>
      </Container>
    </motion.footer>
  )
}
