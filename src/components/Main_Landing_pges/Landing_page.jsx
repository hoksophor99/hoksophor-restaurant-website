import React from 'react'
import Navbar from '../Navbar'
import Header from '../Landing_pages/Header'
import Landing_menu from '../Landing_pages/Landing_menu'
import Landing_about from '../Landing_pages/Landing_about'
import Landing_services from '../Landing_pages/Landing_services'
import Feedback from '../Landing_pages/Feedback'
import Blog from '../Landing_pages/Blog'
import Footer from '../Footer'






const Landing_page = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Landing_menu/>
    <Landing_about/>
    <Landing_services/>
    <Feedback/>
    <Blog/>
    <Footer/>

    </>

  )
}

export default Landing_page
