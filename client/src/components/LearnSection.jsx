import React from 'react'
import { motion } from 'framer-motion'

const LearnSection = () => {
  return (
    <section className='py-20 bg-gradient-to-br from-white via-blue-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <motion.h2 
          className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Learn from the best
        </motion.h2>
        
        <motion.p 
          className='text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover our top-rated courses across various categories. From coding and design to business and wellness, 
          our courses are crafted to deliver results.
        </motion.p>
      </div>
    </section>
  )
}

export default LearnSection