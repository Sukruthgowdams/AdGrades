"use client"
import { motion } from "framer-motion"
import { Container } from "../CommonLayout/Container"
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible"
import { REVIEWS } from "../../constants"

// export const ReviewsSection = () => {
//   const renderStars = (rating) => {
//     return Array(5)
//       .fill(0)
//       .map((_, i) => (
//         <motion.svg
//           key={i}
//           className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           initial={{ opacity: 0, scale: 0 }}
//           whileInView={{
//             opacity: 1,
//             scale: 1,
//             transition: {
//               delay: 0.5 + i * 0.1,
//               type: "spring",
//               stiffness: 200,
//             },
//           }}
//           viewport={{ once: true }}
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//         </motion.svg>
//       ))
//   }

//   return (
//     <div id="reviews" className="py-20 bg-purple-50">
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
//               TESTIMONIALS – WHAT OUR CLIENTS SAY
//             </motion.p>
//             <motion.h2
//               className="text-4xl font-bold mb-6"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               Don't take our word for it.
//             </motion.h2>
//             <motion.p
//               className="text-xl text-gray-600 max-w-3xl mx-auto"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//             >
//               See what our clients have to say about working with us.
//             </motion.p>
//           </div>
//         </FadeInWhenVisible>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           {REVIEWS.map((review, index) => (
//             <FadeInWhenVisible key={index} direction="up" delay={0.1 * index}>
//               <motion.div
//                 className="bg-white p-8 rounded-lg shadow-md"
//                 whileHover={{
//                   scale: 1.03,
//                   boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="flex items-center justify-between mb-6">
//                   <motion.div
//                     className="flex items-center"
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
//                   >
//                     <motion.div
//                       className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center mr-4"
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <span className="text-gray-600 font-bold">
//                         {review.name
//                           .split(" ")
//                           .map((n) => n[0])
//                           .join("")}
//                       </span>
//                     </motion.div>
//                     <div>
//                       <h4 className="font-bold">{review.name}</h4>
//                       <p className="text-gray-600 text-sm">{review.position}</p>
//                     </div>
//                   </motion.div>
//                 </div>
//                 <div className="flex mb-4">{renderStars(review.rating)}</div>
//                 <motion.p
//                   className="text-gray-700"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
//                 >
//                   "{review.review}"
//                 </motion.p>
//               </motion.div>
//             </FadeInWhenVisible>
//           ))}
//         </motion.div>

//         <FadeInWhenVisible delay={0.5}>
//           <div className="mt-12 text-center">
//             <motion.div
//               className="bg-white p-4 rounded-lg inline-block"
//               whileHover={{
//                 scale: 1.02,
//                 boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1)",
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               <p className="font-medium">Featured In:</p>
//               <div className="flex justify-center space-x-8 mt-3">
//                 {["Forbes", "Entrepreneur", "Business Insider"].map((brand, index) => (
//                   <motion.img
//                     key={brand}
//                     src="/api/placeholder/80/30"
//                     alt={`Featured in ${brand}`}
//                     className="h-8 opacity-70"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 0.7, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{
//                       duration: 0.5,
//                       delay: 1 + index * 0.2,
//                       type: "spring",
//                       stiffness: 100,
//                     }}
//                     whileHover={{
//                       opacity: 1,
//                       scale: 1.1,
//                       transition: { duration: 0.2 },
//                     }}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </FadeInWhenVisible>
//       </Container>
//     </div>
//   )
// }
export const ReviewsSection = () => {
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <motion.svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-500"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0.5 + i * 0.1,
              type: "spring",
              stiffness: 200,
            },
          }}
          viewport={{ once: true }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))
  }

  return (
    <div id="reviews" className="py-20 bg-[#12141e]">
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
              TESTIMONIALS – WHAT OUR CLIENTS SAY
            </motion.p>
            <motion.h2
              className="text-4xl font-bold mb-6 text-[#d3e3ed]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Don't take our word for it.
            </motion.h2>
            <motion.p
              className="text-xl text-[#b6c8d6] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              See what our clients have to say about working with us.
            </motion.p>
          </div>
        </FadeInWhenVisible>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {REVIEWS.map((review, index) => (
            <FadeInWhenVisible key={index} direction="up" delay={0.1 * index}>
              <motion.div
                className="bg-[#1e222f] p-8 rounded-lg shadow-md hover:shadow-[0_20px_30px_rgba(0,174,255,0.15)]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div
                      className="h-12 w-12 rounded-full bg-[#2c3244] flex items-center justify-center mr-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-[#d3e3ed] font-bold">
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-[#d3e3ed]">{review.name}</h4>
                      <p className="text-[#b6c8d6] text-sm">{review.position}</p>
                    </div>
                  </motion.div>
                </div>
                <div className="flex mb-4">{renderStars(review.rating)}</div>
                <motion.p
                  className="text-[#b6c8d6]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  "{review.review}"
                </motion.p>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </motion.div>

        <FadeInWhenVisible delay={0.5}>
          <div className="mt-12 text-center">
            <motion.div
              className="bg-[#1e222f] p-4 rounded-lg inline-block"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 20px -5px rgba(0,174,255,0.25)",
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-medium text-[#d3e3ed]">Featured In:</p>
              <div className="flex justify-center space-x-8 mt-3">
                {["Forbes", "Entrepreneur", "Business Insider"].map((brand, index) => (
                  <motion.img
                    key={brand}
                    src="/api/placeholder/80/30"
                    alt={`Featured in ${brand}`}
                    className="h-8 opacity-70"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.7, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 1 + index * 0.2,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      opacity: 1,
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </FadeInWhenVisible>
      </Container>
    </div>
  )
}
