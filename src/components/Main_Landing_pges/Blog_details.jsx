import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { motion } from "framer-motion";
import { details } from "../../data/projects";
import Details from '../../assets/images/Details.png'
import Detail1 from '../../assets/images/Details1.png'

const Blog_details = () => {
  return (
    <>
    <Navbar/>
    <div className="px-4 md:px-10 lg:px-28 py-16 mt-20">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-serif text-center leading-tight mb-10"
      >
        The secret tips & tricks to prepare a <br />
        perfect burger & pizza for our customers
      </motion.h1>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-12 overflow-hidden rounded-xl shadow"
      >
        <img
          src={Details}
          alt="Food Dish"
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-gray-700"
      >
        <h2 className="text-xl font-semibold mb-4">
          What do you need to prepare a home–made burger?
        </h2>

        <p className="mb-6 leading-relaxed">
          Creating the perfect burger and pizza is an art, combining
          ingredients, techniques, and passion to craft dishes that truly
          delight the palate. Today, we’ll unveil some closely guarded secrets
          and insider tips for mastering these beloved staples of the culinary
          world.
        </p>

        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Quality Beef:</strong> The heart of a perfect burger is
            top-notch beef. Opt for fresh, high-quality ground beef with a fat
            content of about 20% for the juiciest, most flavorful results.
          </li>

          <li>
            <strong>Seasoning:</strong> Simplicity is key here. A generous pinch
            of salt and black pepper enhances the natural flavors without
            overpowering them.
          </li>

          <li>
            <strong>Don’t Overwork the Meat:</strong> While forming patties, be
            gentle. Overworking the meat can lead to density and toughness,
            resulting in a dry burger.
          </li>

          <li>
            <strong>Cooking:</strong> Hot heat is essential. Whether grilling or
            pan-searing, ensure your cooking surface is hot enough to create a
            crisp crust and seal in those delicious juices.
          </li>

          <li>
            <strong>Resting:</strong> Always let your cooked burgers rest for a
            few minutes before serving. This helps redistribute juices for a
            moist and flavorful bite.
          </li>
        </ol>
      </motion.div>
      
    </div>
    {/* 3card */}
      <div className="px-4 md:px-20 lg:px-30 py-10 mt-20">
        <div className="text-center mb-8">
        <h1 className="text-5xl font-serif mb-3">Read More Articles</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
        We consider all the drivers of change gives you the components you
        need to change to create a truly happens.
        </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((item, i) => (
              <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
              <img
              src={item.img}
              className="w-full h-48 object-cover"
              />
              <div className="p-5 text-start">
              <p className="text-gray-500 text-sm">
              {item.date}
              </p>
              </div>

              <div className="px-3 py-2 text-start">
                        <h5 className=" text-xl font-serif">
                            {item.title}
                        </h5>
              </div>
              </motion.div>

          ))}
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Blog_details
