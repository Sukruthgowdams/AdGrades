import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Briefcase, Heart } from 'lucide-react';

const AboutUs = () => {
  useEffect(() => {
    document.title = 'About Us | Your Company';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#12141e]">
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-16 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Company</h1>
            <p className="text-xl md:text-2xl opacity-90">We're on a mission to transform how businesses connect with their customers</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section 
        className="py-16 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="flex items-center justify-center mb-10"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="h-0.5 bg-[#274a5a] w-16 mr-4"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Our Story</h2>
              <div className="h-0.5 bg-[#274a5a] w-16 ml-4"></div>
            </motion.div>
            
            <motion.div 
              className="prose prose-lg max-w-none text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="mb-6">Founded in 2020, our company began with a simple yet powerful vision: to help businesses grow through innovative digital solutions. What started as a small team of passionate experts has now evolved into a leading agency serving clients worldwide.</p>
              <p className="mb-6">We believe that effective marketing is about more than just metrics—it's about creating meaningful connections between brands and people. Our approach combines data-driven strategies with creative excellence to deliver results that exceed expectations.</p>
              <p>Today, we're proud to work with diverse clients across industries, from startups to Fortune 500 companies. As we continue to grow, our commitment to excellence, innovation, and client success remains at the heart of everything we do.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values */}
      <motion.section 
        className="py-16 md:py-24 bg-[#12141e]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-300">The principles that guide us every day</p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="h-8 w-8 text-[#00aeff]" />, title: "Passion", description: "We're passionate about what we do and bring enthusiasm to every project." },
              { icon: <Award className="h-8 w-8 text-[#00aeff]" />, title: "Excellence", description: "We strive for excellence in every aspect of our work." },
              { icon: <Users className="h-8 w-8 text-[#00aeff]" />, title: "Collaboration", description: "We believe great work happens through meaningful partnerships." },
              { icon: <Briefcase className="h-8 w-8 text-[#00aeff]" />, title: "Integrity", description: "We operate with honesty, transparency and ethical principles." }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-[#12141e] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="py-16 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-300">The talented people behind our success</p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Chandan B Krishna", title: "CEO & Founder", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" },
              { name: "Kishan BK", title: "Creative Director", image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" },
              { name: "Pavan", title: "Head of Strategy", image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" }
            ].map((person, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.1 + (index * 0.1), duration: 0.5 }}
              >
                <div className="mb-4 relative overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-72 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full text-white text-left">
                      <div className="flex space-x-3 justify-center">
                        <a href="#" className="hover:text-[#08b7fc]">
                          <span className="sr-only">Twitter</span>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92..." />
                          </svg>
                        </a>
                        <a href="#" className="hover:text-[#08b7fc]">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761..." />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">{person.name}</h3>
                <p className="text-gray-300">{person.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
