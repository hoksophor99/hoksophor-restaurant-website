import React from 'react'
import { motion } from "framer-motion";
import {categories } from '../../data/projects'



const Landing_menu = () => {
  return (
    <section className="py-20 px-10 bg-white">
      <h2 className="text-center text-5xl font-serif text-gray-900 mb-14">
        Browse Our Menu
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        
        {categories.map((cat, index) => {
          const Icon = cat.icon; // <-- FIXED

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="border border-gray-200 rounded-2xl p-10 text-center shadow-sm bg-white hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                  <Icon size={42} className="text-gray-700" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {cat.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {cat.desc}
              </p>

              <a href="/menu_page" className="text-[#AD343E] font-medium hover:underline">
                Explore Menu
              </a>
            </motion.div>
          );
        })}

      </div>
    </section>
  )
}

export default Landing_menu
