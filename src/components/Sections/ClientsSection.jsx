"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Container } from "../CommonLayout/Container"
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible"
import { CLIENTS } from "../../constants"

// export const ClientsSection = () => {
//   const [selectedClient, setSelectedClient] = useState(null)
//   const duplicatedClients = [...CLIENTS, ...CLIENTS]

//   return (
//     <div id="clients" className="py-20 bg-gray-50 overflow-hidden relative">
//       <style jsx>{`
//         @keyframes scrollLoop {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .scroll-wrapper {
//           display: flex;
//           width: 200%;
//           animation: scrollLoop 30s linear infinite;
//         }
//       `}</style>

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
//               OUR CLIENT SUCCESS STORIES
//             </motion.p>
//             <motion.h2
//               className="text-4xl font-bold mb-6"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               Real brands. Real growth.
//               <br />
//               Real results.
//             </motion.h2>
//           </div>
//         </FadeInWhenVisible>

//         <div className="overflow-hidden w-full">
//           <div className="scroll-wrapper">
//             {duplicatedClients.map((client, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-40 h-40 mx-6 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow cursor-pointer"
//                 onClick={() => setSelectedClient(client)}
//               >
//                 <img
//                   src={client.logo}
//                   alt={`${client.name} logo`}
//                   className="h-24 w-24 object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Info Box */}
//         {selectedClient && (
//           <motion.div
//           className="fixed inset-0 bg-white/30 backdrop-blur-md flex items-center justify-center z-50"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
        
//             <motion.div
//               className="bg-white rounded-xl p-6 max-w-lg w-full shadow-lg relative"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <button
//                 className="absolute top-2 right-3 text-gray-600 text-xl"
//                 onClick={() => setSelectedClient(null)}
//               >
//                 ×
//               </button>
//               <div className="flex items-center gap-4 mb-4">
//                 <img src={selectedClient.logo} alt={selectedClient.name} className="h-16 w-16" />
//                 <h3 className="text-2xl font-bold">{selectedClient.name}</h3>
//               </div>
//               <p className="text-gray-700">{selectedClient.description}</p>
//               <p className="mt-3 text-sm bg-purple-100 text-purple-700 inline-block px-3 py-1 rounded">
//                 {selectedClient.tag}
//               </p>
//             </motion.div>
//           </motion.div>
//         )}
//       </Container>
//     </div>
//   )
// }
export const ClientsSection = () => {
  const [selectedClient, setSelectedClient] = useState(null)
  const duplicatedClients = [...CLIENTS, ...CLIENTS]

  return (
    <div id="clients" className="py-20 bg-[#12141e] overflow-hidden relative">
      <style jsx>{`
        @keyframes scrollLoop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scroll-wrapper {
          display: flex;
          width: 200%;
          animation: scrollLoop 30s linear infinite;
        }
      `}</style>

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
              OUR CLIENT SUCCESS STORIES
            </motion.p>
            <motion.h2
              className="text-4xl font-bold mb-6 text-[#d3e3ed]"
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

        <div className="overflow-hidden w-full">
          <div className="scroll-wrapper">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-40 mx-6 bg-[#1e212d] rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_25px_#00aeff] transition-shadow cursor-pointer"
                onClick={() => setSelectedClient(client)}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-24 w-24 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info Box Modal */}
        {selectedClient && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-[#1d202a] rounded-xl p-6 max-w-lg w-full shadow-lg relative text-[#d3e3ed]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-2 right-3 text-[#b6c8d6] text-xl hover:text-white"
                onClick={() => setSelectedClient(null)}
              >
                ×
              </button>
              <div className="flex items-center gap-4 mb-4">
                <img src={selectedClient.logo} alt={selectedClient.name} className="h-16 w-16" />
                <h3 className="text-2xl font-bold">{selectedClient.name}</h3>
              </div>
              <p className="text-[#b6c8d6]">{selectedClient.description}</p>
              <p className="mt-3 text-sm bg-[#00aeff]/20 text-[#00aeff] inline-block px-3 py-1 rounded">
                {selectedClient.tag}
              </p>
            </motion.div>
          </motion.div>
        )}
      </Container>
    </div>
  )
}
