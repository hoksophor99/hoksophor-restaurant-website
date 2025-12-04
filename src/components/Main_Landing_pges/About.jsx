import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Landing_about from '../Landing_pages/Landing_about'
import Feedback from '../Landing_pages/Feedback'
import Video_page from '../Mainpage_about.jsx/Video_page'
import Restaurant_infor from '../Mainpage_about.jsx/Restaurant_infor'


const About = () => {
  return (
    <>
    <Navbar/>
    <div className='mt-20'>
      <Landing_about/>
    </div>
    <Video_page/>
    <Restaurant_infor/>
    <Feedback/>
    <Footer/>
    </>

  )
}

export default About
