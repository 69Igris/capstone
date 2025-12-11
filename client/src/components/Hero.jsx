import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className='bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24 pb-12 sm:pb-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Main Heading */}
        <motion.div 
          className='max-w-4xl mx-auto mb-8'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className='text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empower your future with the
            <br />
            courses designed to{' '}
            <span className='text-blue-600 relative'>
              fit your choice.
              <motion.div 
                className='absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded-full'
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>
            </span>
          </motion.h1>
          
          <motion.p 
            className='text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We bring together world-class instructors, interactive content, and a supportive community to help 
            you achieve your personal and professional goals.
          </motion.p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className='max-w-2xl mx-auto mb-10 sm:mb-12'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className='relative flex'>
            <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for courses"
              className='w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg'
            />
            <motion.button 
              className='bg-blue-600 text-white px-8 py-4 rounded-r-xl hover:bg-blue-700 transition-colors duration-200 font-medium text-lg shadow-lg'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Search
            </motion.button>
          </div>
        </motion.div>

        {/* Trusted By Section */}
        <motion.div 
          className='mb-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className='text-gray-500 mb-4 sm:mb-6 text-base sm:text-lg text-center'>Trusted by learners from</p>
          <motion.div 
            className='flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {['Microsoft', 'Walmart', 'accenture', 'Adobe', 'PayPal'].map((company, index) => (
              <motion.div 
                key={company}
                className={`text-xl sm:text-2xl md:text-3xl font-semibold ${
                  company === 'Walmart' ? 'text-blue-500 font-bold' :
                  company === 'accenture' ? 'text-purple-600' :
                  company === 'Adobe' ? 'text-red-600 font-bold' :
                  company === 'PayPal' ? 'text-blue-700' :
                  'text-gray-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {company}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero