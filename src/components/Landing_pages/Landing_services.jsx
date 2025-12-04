import React from 'react'
import { services } from '../../data/projects'




const Landing_services = () => {
  return (
    <>
    <section className='bg-[#fffff] py-20 px-16'>
        <div className='text-4xl md:text-5xl font-serif '>
            <p>We also offer unique </p>
            <p>services for your events</p>
            
        </div>
        {/* card */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 '>
        {services.map((item, index) => (    
            <div key={index} 
            className="bg-neutral-primary-soft block max-w-sm  ">
                    <img className="rounded-2xl md:w-80 md:h-80 object-cover transition-all duration-300 hover:scale-105 hover:shadow-xl" src={item.img} alt="" />

                <div className=" items-start">
                    <a href="#">
                        <h5 className="mt-10 mb-6 text-2xl font-serif font-semibold tracking-tight text-heading">
                            {item.title}
                        </h5>
                    </a>
                    <p className="text-gray-600 text-sm lg:text-lg fade-in delay-200">
                        {item.caption}
                    </p>

                </div>
            </div>
            ))}
        </div>
        
    </section>
    </>
  )
}

export default Landing_services
