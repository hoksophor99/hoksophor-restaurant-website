import React from 'react'
import { motion } from "framer-motion";
import Header1 from '../../assets/images/Header_img.png'


const Header = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 lg:px-20 mt-16"
      style={{
        backgroundImage: `url(${Header1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative text-center max-w-3xl z-10"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight"
        >
          Best food for <br className="hidden md:block" />
          your taste
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-700 text-lg mt-4"
        >
          Discover delectable cuisine and unforgettable moments <br />
          in our welcoming, culinary haven.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex gap-4 items-center justify-center mt-8 flex-wrap"
        >
          {/* Book button */}
          <a href='/booking_page' className="px-8 py-3 rounded-full bg-[#B0163C] text-white text-lg font-medium shadow-md hover:scale-105 transition">
            Book A Table
          </a>

          {/* Explore menu button */}
          <a href='/menu_page' className="px-8 py-3 rounded-full border border-gray-700 text-gray-800 text-lg font-medium hover:bg-gray-100 transition">
            Explore Menu
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Header
