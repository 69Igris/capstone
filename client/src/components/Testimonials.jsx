import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Developer",
    company: "Google",
    image: "SJ",
    content: "Seekho transformed my career! The courses are well-structured and the instructors are top-notch. I landed my dream job at Google thanks to the skills I learned here.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "UX Designer",
    company: "Adobe",
    image: "MC",
    content: "The design courses here are exceptional. I went from a beginner to landing a position at Adobe in just 8 months. The community support is incredible!",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Data Scientist",
    company: "Microsoft",
    image: "ER",
    content: "Best investment I've ever made in my education. The practical approach to teaching data science helped me transition from marketing to tech seamlessly.",
    rating: 5
  },
  {
    id: 4,
    name: "David Kim",
    role: "Full Stack Developer",
    company: "Amazon",
    image: "DK",
    content: "The project-based learning approach is what sets Seekho apart. Every course includes real-world projects that I could showcase in my portfolio.",
    rating: 5
  }
]

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section className='py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div 
          className='text-center mb-16'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
            What Our Students Say
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Join thousands of learners who have transformed their careers with Seekho
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 gap-8'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300'
            >
              {/* Rating Stars */}
              <div className='flex mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </motion.svg>
                ))}
              </div>

              {/* Content */}
              <p className='text-gray-700 mb-6 leading-relaxed'>
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className='flex items-center'>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4'>
                  {testimonial.image}
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800'>{testimonial.name}</h4>
                  <p className='text-sm text-gray-600'>
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className='text-center mt-12'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials