import React from 'react'
import { motion } from "framer-motion";
import About from '../../assets/images/about.png'


const Restaurant_infor = () => {
  return (
    <div className="w-full bg-white text-gray-900">
        {/* Top Features */}
        <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {[
        { title: "Multi Cuisine", desc: "In the new era of technology we look in the future with certainty life.", icon: "📋" },
        { title: "Easy To Order", desc: "In the new era of technology we look in the future with certainty life.", icon: "🧾" },
        { title: "Fast Delivery", desc: "In the new era of technology we look in the future with certainty life.", icon: "⏱️" }
        ].map((item, index) => (
        <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="flex flex-col items-center space-y-3"
        >
        <div className="text-4xl">{item.icon}</div>
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-600 max-w-xs">{item.desc}</p>
        </motion.div>
        ))}
        </div>


         <div className="border-t border-gray-200" />


        {/* Main Section */}
        <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-4 px-7"
        >
        <h2 className="text-4xl font-serif leading-tight">
        A little information <br /> for our valuable guest
        </h2>
        <p className="text-gray-600 max-w-md">
        At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
        </p>


        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 pt-4">
        {[
        { value: "3", label: "Locations" },
        { value: "1995", label: "Founded" },
        { value: "65+", label: "Staff Members" },
        { value: "100%", label: "Satisfied Customers" }
        ].map((stat, i) => (
        <motion.div
        key={i}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.15 }}
        className="bg-gray-50 shadow-sm rounded-xl p-6 text-center"
        >
        <p className="text-3xl font-serif">{stat.value}</p>
        <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
        </motion.div>
        ))}
        </div>
        </motion.div>


        {/* Right Image */}
        <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full flex justify-center"
        >
        <img
        src={About}
        alt="Chef preparing food"
        className="rounded-xl shadow-lg w-full max-w-md object-cover"
        />
        </motion.div>
        </div>
    </div>
  )
}

export default Restaurant_infor
