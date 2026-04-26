import {useState ,useEffect } from 'react'
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from '../assets/images/Logo.png'
import { Link, useLocation  } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const [showAll, setShowAll] = useState(false);

        const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about_page" },
        { name: "Menu", path: "/menu_page" },
        { name: "Pages", path: "/pages" },
        { name: "Contact", path: "/cantact_page" }
    ];
    const [activeItem, setActiveItem] = useState("");
      useEffect(() => {
    const current = navItems.find((item) => item.path === location.pathname);
    if (current) setActiveItem(current.name);
  }, [location.pathname]);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-1">
        {/* Logo */}
        <div className="flex items-center text-2xl font-serif font-semibold">
        <img
        src={Logo}
        alt="logo"
        className="w-20 h-20 object-contain"
        />
        Bistro Bliss
        </div>


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => {
                setActiveItem(item.name);
                setShowAll(false);
              }}
              className="relative px-4 py-2 rounded-full"
            >
              {/* Animated pill background */}
              {activeItem === item.name && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-gray-100 rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}

              {/* Menu text */}
              <span className="relative text-gray-700">{item.name}</span>
            </Link>
          ))}


        <motion.a
        href='/booking_page'
        whileHover={{ scale: 1.05 }}
        className="px-6 py-2 border border-gray-700 hover:bg-[#B0163C] rounded-full text-gray-800 font-medium"
        >
        Book A Table
        </motion.a>
        </nav>


        {/* Mobile Menu Button */}
        <button
        className="lg:hidden "
        onClick={() => setOpen(!open)}
        >
        {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        </div>


        {/* Mobile Menu */}
        {open && (
        <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:hidden text-center bg-white shadow-md p-4 flex flex-col gap-4"
    >
        {navItems.map((item) => (
            <Link
                key={item.name}
                to={item.path}              
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
                onClick={() => setOpen(false)}
            >
                {item.name}               
            </Link>
        ))}


        <div class="flex justify-center">
        <a href='/booking_page' class="px-6 py-2 border border-gray-700 rounded-full text-gray-800 font-medium w-max">
            Book A Table
        </a>
        </div>
        </motion.div>
        )}
    </header>
  )
}

export default Navbar
