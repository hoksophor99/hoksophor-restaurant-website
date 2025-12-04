import React from 'react'
import { motion } from "framer-motion";
import footer_logo from '../assets/images/footer_logo.png'
import Footer_img1 from '../assets/images/footer_img1.png'
import Footer_img2 from '../assets/images/footer_img2.png'
import Footer_img3 from '../assets/images/footer_img3.png'
import Footer_img4 from '../assets/images/footer_img4.png'
import { Twitter, Facebook, Instagram, Github   } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-[#474747] text-gray-300 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="flex items-center space-x-2 text-2xl font-semibold text-white">
                <img
                src={footer_logo}
                alt="logo"
                className="w-15 h-15 object-contain"
                />
        <span className='text-2xl font-serif font-semibold mt-4'>Bistro Bliss</span>
        </h2>
        <p className="mt-4 text-sm leading-relaxed">
        In the new era of technology we look in the future with certainty and pride to
        for our company and.
        </p>


            {/* Social Icons */}
        <div className="flex space-x-4 mt-4 text-xl">
        <a href="#" className="w-[38px] h-[38px] flex items-center justify-center bg-[#AD343E] rounded-full text-white hover:scale-110 transition transform duration-200">
        <Twitter />
        </a>
        <a href="#" className="w-[38px] h-[38px] flex items-center justify-center bg-[#AD343E] rounded-full text-white hover:scale-110 transition transform duration-200">
        <Facebook />
        </a>
        <a href="#" className="w-[38px] h-[38px] flex items-center justify-center bg-[#AD343E] rounded-full text-white hover:scale-110 transition transform duration-200">
        <Instagram />
        </a>
        <a href="#" className="w-[38px] h-[38px] flex items-center justify-center bg-[#AD343E] rounded-full text-white hover:scale-110 transition transform duration-200">
        <Github />
        </a>
        </div>
        </motion.div>


        {/* Pages */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <h3 className="text-white font-semibold mb-4">Pages</h3>
        <ul className="space-y-2 text-sm">
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>Delivery</li>
        </ul>
        </motion.div>


        {/* Utility Pages */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h3 className="text-white font-semibold mb-4">Utility Pages</h3>
        <ul className="space-y-2 text-sm">
        <li>Start Here</li>
        <li>Styleguide</li>
        <li>Password Protected</li>
        <li>404 Not Found</li>
        <li>Licenses</li>
        <li>Changelog</li>
        <li>View More</li>
        </ul>
        </motion.div>


        {/* Instagram Gallery */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
        <h3 className="text-white font-semibold mb-4">Follow Us On Instagram</h3>
        <div className="grid grid-cols-2 gap-3">
        <img src={Footer_img1} className="rounded-lg object-cover h-28 w-full" />
        <img src={Footer_img2} className="rounded-lg object-cover h-28 w-full" />
        <img src={Footer_img3} className="rounded-lg object-cover h-28 w-full" />
        <img src={Footer_img4} className="rounded-lg object-cover h-28 w-full" />
        </div>
        </motion.div>
        </div>


        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-12 pt-6 border-t border-gray-700">
        Copyright © 2023 Hashtag Developer. All Rights Reserved
        </div>
    </footer>
  )
}

export default Footer
