import React from 'react'
import { motion } from "framer-motion";
import { articles } from "../../data/projects";
import { a } from 'motion/react-client';

const Page = () => {
  return (
    <>
      <div className="px-4 md:px-20 lg:px-30 py-10 mt-20">
        <div className="text-center mb-8">
        <h1 className="text-5xl font-serif mb-3">Our Blog & Articles</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
        We consider all the drivers of change gives you the components you
        need to change to create a truly happens.
        </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((item, i) => (
            <a href="/blog_details">
              <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
              <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
              />
              <div className="p-5 text-center">
              <p className="text-[#AD343E] font-semibold mb-1 text-lg">${item.price}</p>
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">
              Made with eggs, lettuce, salt, oil and other ingredients.
              </p>
              </div>
              </motion.div>
            </a>

          ))}
        </div>
      </div>
    </>
  )
}

export default Page
