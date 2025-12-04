import React from 'react'
import { motion } from "framer-motion";
import {leftArticle} from '../../data/projects'
import {rightArticles} from '../../data/projects'

const Blog = () => {

const item = {
hidden: { opacity: 0, y: 40, scale: 0.95 },
show: {
opacity: 1,
y: 0,
scale: 1,
transition: { duration: 0.6, ease: "easeOut" },
},
};


  return (
  <div className="w-full px-4 md:px-12 lg:px-24 py-12 bg-[#f9f9f9]">
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
        Our Blog & Articles
      </h2>
      <a href='/pages' className="px-5 py-5 bg-red-500 text-white rounded-full text-sm shadow hover:bg-red-600 transition">
        Read All Articles
      </a>
    </div>

      {/* TWO COLUMN LAYOUT */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={item}
        className="grid lg:grid-cols-2 gap-8"
      >
        {/* LEFT BIG CARD */}
        <motion.div
          variants={item}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <img src={leftArticle.img} className="w-full h-80 object-cover" />

          <div className="p-6">
            <p className="text-gray-500 text-sm mb-1">{leftArticle.date}</p>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {leftArticle.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {leftArticle.description}
            </p>
          </div>
        </motion.div>

        {/* RIGHT 4 SMALLER CARDS */}
        <div className="grid sm:grid-cols-2 gap-6">
          {rightArticles.map((article) => (
            <motion.div
              key={article.id}
              variants={item}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={article.img}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <p className="text-gray-500 text-sm mb-1">{article.date}</p>
                <h3 className="font-semibold text-gray-800 text-sm">
                  {article.title}
                </h3>
              </div>
            </motion.div>
          ))}
          </div>
      </motion.div>
        </div>
 
      )
}

export default Blog
