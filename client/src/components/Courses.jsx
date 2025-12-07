import React from 'react'
import { motion } from 'framer-motion'

const courses = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    instructor: "GreatStack",
    rating: 4,
    reviews: 4,
    price: "$39.99",
    image: "JS",
    bgColor: "from-blue-900 to-blue-800",
    label: "What is JavaScript",
    subtitle: "Introduction and 1st program"
  },
  {
    id: 2,
    title: "Advanced Python Programming",
    instructor: "GreatStack",
    rating: 4,
    reviews: 5,
    price: "$67.99",
    image: "PYTHON",
    bgColor: "from-yellow-400 to-yellow-300",
    label: "Crash Course",
    subtitle: "Master Python"
  },
  {
    id: 3,
    title: "Cloud Computing Essentials",
    instructor: "GreatStack",
    rating: 3,
    reviews: 5,
    price: "$55.99",
    image: "Gemini",
    bgColor: "from-gray-900 to-gray-800",
    label: "Clone",
    subtitle: "Build your own version"
  },
  {
    id: 4,
    title: "Cybersecurity Basics",
    instructor: "GreatStack",
    rating: 4,
    reviews: 3,
    price: "$59.49",
    image: "Crypto",
    bgColor: "from-purple-900 to-indigo-900",
    label: "Largest",
    subtitle: "Crypto Marketplace"
  }
]

const Courses = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-orange-400 fill-current' : 'text-gray-300 fill-current'}`}
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ))
  }

  return (
    <section className='py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Courses Grid */}
        <motion.div 
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer'
            >
              {/* Course Image/Thumbnail */}
              <div className={`h-48 bg-gradient-to-br ${course.bgColor} flex flex-col items-center justify-center p-6 text-white relative`}>
                <div className='text-4xl font-bold mb-2'>{course.image}</div>
                <div className='text-lg font-semibold mb-1'>{course.label}</div>
                <div className='text-sm opacity-90'>{course.subtitle}</div>
              </div>

              {/* Course Details */}
              <div className='p-5'>
                <h3 className='text-lg font-semibold text-gray-800 mb-2 line-clamp-2'>
                  {course.title}
                </h3>
                
                <p className='text-sm text-gray-600 mb-3'>{course.instructor}</p>
                
                {/* Rating */}
                <div className='flex items-center gap-2 mb-3'>
                  <span className='font-semibold text-gray-800'>{course.rating}</span>
                  <div className='flex gap-1'>
                    {renderStars(course.rating)}
                  </div>
                  <span className='text-sm text-gray-500'>({course.reviews})</span>
                </div>

                {/* Price */}
                <div className='text-xl font-bold text-gray-900'>
                  {course.price}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show All Courses Button */}
        <motion.div 
          className='text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-medium'
          >
            Show all courses
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Courses