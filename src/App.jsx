import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing_page from './components/Main_Landing_pges/Landing_page'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../src/components/Main_Landing_pges/About'
import Menu from './components/Main_Landing_pges/Menu'
import Pages from './components/Main_Landing_pges/Pages'
import Contact from './components/Main_Landing_pges/Contact'
import Booking_page from './components/Main_Landing_pges/Booking_page'
import Blog_details from './components/Main_Landing_pges/Blog_details'





function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="/about_page" element={<About />} />
        <Route path="/menu_page" element={<Menu />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blog_details" element={<Blog_details />} />
        <Route path="/booking_page" element={<Booking_page/>} />
        <Route path="/cantact_page" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
