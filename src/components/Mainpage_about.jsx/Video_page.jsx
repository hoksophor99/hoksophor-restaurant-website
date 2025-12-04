import React from 'react'
import { motion } from "framer-motion";
import video from '../../assets/images/video.png'

const Video_page = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-10 lg:px-20"
      style={{
        backgroundImage: `url(${video})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center max-w-2xl flex flex-col items-center"
      >
        {/* Play Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer hover:scale-110 transition"
        >
          <div className="w-0 h-0 border-t-8 border-b-8 border-l-[14px] border-transparent border-l-red-500 ml-1"></div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg"
        >
          Feel the authentic & <br className="hidden md:block" />
          original taste from us
        </motion.h1>
      </motion.div>
    </section>
  )
}

export default Video_page
