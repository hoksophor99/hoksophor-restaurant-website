import React from 'react'
import Img from '../../assets/images/img.png'


const Landing_about = () => {
  return (
    <section className="w-full bg-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 gap-20">
    {/* Left Image */}
        <div className="w-full lg:w-1/2 relative group">
        <img
        src={Img}
        alt="Food"
        className="rounded-3xl shadow-xl w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        </div>


        {/* Right Content */}
        <div className="w-full lg:w-1/2 space-y-6">
        <h1 className="text-4xl lg:text-6xl font-serif leading-tight text-gray-900 fade-in">
        We provide healthy <br /> food for your family.
        </h1>


        <p className="text-gray-600 text-lg lg:text-xl fade-in delay-200">
        Our story began with a vision to create a unique dining experience that merges
        fine dining, exceptional service, and a vibrant ambiance. Rooted in the city's rich
        culinary culture, we aim to honor our local roots while infusing a global palate.
        </p>


        <p className="text-gray-600 text-lg lg:text-xl fade-in delay-300">
        At place, we believe that dining is not just about food, but about the overall
        experience. Our staff, renowned for their warmth and dedication, strives to make
        every visit an unforgettable event.
        </p>


        <a href='/about_page' className="mt-4 px-8 py-3 rounded-full border border-gray-700 text-gray-800 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 fade-in delay-500">
        More About Us
        </a>
        </div>


        {/* Contact Card */}
        {/* <div className=" left-1/2 lg:left-1/3 bottom-4 transform -translate-x-1/2 bg-gray-900 text-white p-8 rounded-3xl shadow-2xl space-y-6 w-[90%] max-w-md animate-slide-up">
        <h2 className="text-2xl font-semibold">Come and visit us</h2>


        <div className="space-y-3 text-gray-300">
        <div className="flex items-center gap-3">
        <span>📞</span>
        <p>(414) 857 - 0107</p>
        </div>


        <div className="flex items-center gap-3">
        <span>✉️</span>
        <p>happytummy@restaurant.com</p>
        </div>


        <div className="flex items-center gap-3">
        <span>📍</span>
        <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
        </div>
        </div>
        </div> */}
    </section>
  )
}

export default Landing_about
