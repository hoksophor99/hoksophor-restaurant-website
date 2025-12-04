import React from 'react'
import { motion } from "framer-motion";
import {profiles} from '../../data/projects'

// Animation variants
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const Feedback = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-serif mb-12"
      >
        What Our Customers Say
      </motion.h2>

      {/* Grid */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {profiles.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            className="bg-[#faf8f5] p-8 rounded-2xl shadow-sm"
          >
            <h3 className="text-xl font-semibold text-[#A0131D] mb-4">
              “{item.title}”
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">{item.desc}</p>

            <hr className="border-t border-gray-300 mb-6" />

            {/* Profile */}
            <div className="flex items-center gap-4 transition-all duration-300 hover:scale-105 ">
              <img
                src={item.img}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Feedback
