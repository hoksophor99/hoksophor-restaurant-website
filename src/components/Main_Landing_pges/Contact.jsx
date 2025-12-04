import React from 'react'
import { motion } from "framer-motion";
import Navbar from '../Navbar'
import Footer from '../Footer'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-12 mt-20">
    {/* Header Section */}
    <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl md:text-5xl font-serif text-center mb-4"
    >
    Contact Us
    </motion.h1>


    <p className="text-center text-gray-600 max-w-xl mb-10">
    We consider all the drivers of change gives you the components you need
    to change to create a truly happens.
    </p>


    {/* Contact Form Card */}
    <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl"
    >
    <div className="grid md:grid-cols-2 gap-6 mb-6">
    {/* Name Input */}
    <div>
    <label className="block text-sm font-medium mb-1">Name</label>
    <input
    type="text"
    placeholder="Enter your name"
    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
    />
    </div>


    {/* Email Input */}
    <div>
    <label className="block text-sm font-medium mb-1">Email</label>
    <input
    type="email"
    placeholder="Enter email address"
    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
    />
    </div>
    </div>


    {/* Subject Input */}
    <div className="mb-6">
    <label className="block text-sm font-medium mb-1">Subject</label>
    <input
    type="text"
    placeholder="Write a subject"
    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
    />
    </div>


    {/* Message */}
    <div className="mb-6">
    <label className="block text-sm font-medium mb-1">Message</label>
    <textarea
    rows="5"
    placeholder="Write your message"
    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
    ></textarea>
    </div>


    {/* Submit Button */}
    <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="w-full bg-[#AD343E] text-white py-3 rounded-lg font-medium hover:bg-red-700 transition"
    >
    Send
    </motion.button>
    </motion.div>


    {/* Contact Info Section */}
    <div className="grid md:grid-cols-3 gap-8 mt-12 text-center md:text-left max-w-3xl w-full">
    {/* Call Us */}
    <div>
    <h3 className="font-semibold mb-2">Call Us:</h3>
    <p className="text-[#AD343E] font-medium">+1-234-567-8900</p>
    </div>


    {/* Hours */}
    <div>
    <h3 className="font-semibold mb-2">Hours:</h3>
    <p>Mon–Fri: 11am – 8pm</p>
    <p>Sat, Sun: 9am – 10pm</p>
    </div>


    {/* Location */}
    <div>
    <h3 className="font-semibold mb-2">Our Location:</h3>
    <p>123 Bridge Street</p>
    <p>Nowhere Land, LA 12345</p>
    <p>United States</p>
    </div>
    </div>
    </div>
    <Footer/>
    </>

  )
}

export default Contact
