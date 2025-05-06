"use client"
import { motion } from "framer-motion"
import { Container } from "../CommonLayout/Container"
import { AnimatedButton } from "../animations/AnimatedButton"
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible"
import { ParallaxSection } from "../animations/ParallaxSection"
import { CASE_STUDIES } from "../../constants"

// export const CaseStudiesSection = () => {
//   return (
//     <div id="case-studies" className="py-20 bg-white">
//       <Container>
//         <FadeInWhenVisible>
//           <div className="text-center mb-16">
//             <motion.p
//               className="text-purple-600 font-medium mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               CASE STUDIES – PROOF THAT WE DELIVER
//             </motion.p>
//             <motion.h2
//               className="text-4xl font-bold mb-6"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               We let results do the talking.
//             </motion.h2>
//             <motion.p
//               className="text-xl text-gray-600 max-w-3xl mx-auto"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//             >
//               Here's how smart marketing changed the game for brands worldwide.
//             </motion.p>
//           </div>
//         </FadeInWhenVisible>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           {CASE_STUDIES.map((study, index) => (
//             <FadeInWhenVisible key={index} direction={index % 2 === 0 ? "left" : "right"} delay={0.1 * index}>
//               <motion.div
//                 className="bg-gray-50 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
//                 whileHover={{
//                   scale: 1.02,
//                   boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="flex flex-col md:flex-row">
//                   <ParallaxSection className="md:w-2/5" direction="center">
//                     <motion.img
//                       src={study.image}
//                       alt={study.title}
//                       className="h-full w-full object-cover"
//                       whileHover={{ scale: 1.05 }}
//                       transition={{ duration: 0.5 }}
//                     />
//                   </ParallaxSection>
//                   <div className="md:w-3/5 p-6">
//                     <div className="flex items-center mb-3">
//                       <motion.img
//                         src={study.logo}
//                         alt={`${study.title} logo`}
//                         className="h-6 mr-3"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{
//                           duration: 0.5,
//                           delay: 0.6 + index * 0.1,
//                           type: "spring",
//                           stiffness: 200,
//                         }}
//                       />
//                       <motion.h3
//                         className="text-xl font-bold"
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
//                       >
//                         {study.title}
//                       </motion.h3>
//                     </div>
//                     <motion.p
//                       className="text-purple-600 font-medium mb-2"
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
//                     >
//                       {study.subtitle}
//                     </motion.p>
//                     <motion.p
//                       className="text-gray-600"
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
//                     >
//                       {study.description}
//                     </motion.p>
//                   </div>
//                 </div>
//               </motion.div>
//             </FadeInWhenVisible>
//           ))}
//         </motion.div>

//         <div className="text-center">
//           <AnimatedButton
//             className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg font-bold"
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)",
//             }}
//           >
//             Want results like this? Let's talk.
//           </AnimatedButton>
//         </div>
//       </Container>
//     </div>
//   )
// }
export const CaseStudiesSection = () => {
  return (
    <div id="case-studies" className="py-20 bg-[#12141e]">
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
              CASE STUDIES – PROOF THAT WE DELIVER
            </motion.p>
            <motion.h2
              className="text-4xl font-bold mb-6 text-[#d3e3ed]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We let results do the talking.
            </motion.h2>
            <motion.p
              className="text-xl text-[#b6c8d6] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Here's how smart marketing changed the game for brands worldwide.
            </motion.p>
          </div>
        </FadeInWhenVisible>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {CASE_STUDIES.map((study, index) => (
            <FadeInWhenVisible key={index} direction={index % 2 === 0 ? "left" : "right"} delay={0.1 * index}>
              <motion.div
                className="bg-[#1e222f] rounded-lg shadow-md overflow-hidden hover:shadow-[0_15px_35px_rgba(0,174,255,0.25)] transition-shadow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row">
                  <ParallaxSection className="md:w-2/5" direction="center">
                    <motion.img
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </ParallaxSection>
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-center mb-3">
                      <motion.img
                        src={study.logo}
                        alt={`${study.title} logo`}
                        className="h-6 mr-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                      />
                      <motion.h3
                        className="text-xl font-bold text-[#d3e3ed]"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      >
                        {study.title}
                      </motion.h3>
                    </div>
                    <motion.p
                      className="text-[#08b7fc] font-medium mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      {study.subtitle}
                    </motion.p>
                    <motion.p
                      className="text-[#b6c8d6]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    >
                      {study.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </motion.div>

        <div className="text-center">
          <AnimatedButton
            className="bg-[#00aeff] hover:bg-[#08b7fc] text-white py-3 px-8 rounded-lg font-bold"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 174, 255, 0.5)",
            }}
          >
            Want results like this? Let's talk.
          </AnimatedButton>
        </div>
      </Container>
    </div>
  )
}
