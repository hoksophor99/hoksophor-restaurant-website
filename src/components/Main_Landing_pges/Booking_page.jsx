import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Booking_page = () => {
  const [form, setForm] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    person: "1 Person",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 pt-32 pb-16">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif text-center mb-4"
        >
          Book A Table
        </motion.h1>

        <p className="text-center text-gray-600 max-w-xl mb-12">
          We consider all the drivers of change gives you the components you need
          to change to create a truly happens.
        </p>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl"
        >
          {/* Grid Inputs */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Date */}
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full border rounded-full px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium mb-1">Time</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full border rounded-full px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-full px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="x-xxx-xxx-xxxx"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-full px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>
          </div>

          {/* Total People */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-1">
              Total Person
            </label>
            <select
              name="person"
              value={form.person}
              onChange={handleChange}
              className="w-full border rounded-full px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none"
            >
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4 People</option>
              <option>5+ People</option>
            </select>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-[#AD343E] text-white py-3 rounded-full text-lg font-medium shadow-md hover:bg-[#922b33] transition"
          >
            Book A Table
          </motion.button>
        </motion.div>

        {/* Map Section */}
        <div className="w-full max-w-5xl mt-16 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="restaurant location"
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8979383230105!2d-74.09073708459368!3d40.857423179317725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDUxJzI2LjciTiA3NMKwMDUnMjYuNiJX!5e0!3m2!1sen!2sus!4v1616179564534!5m2!1sen!2sus"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Booking_page;

