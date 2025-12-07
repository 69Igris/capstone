import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <footer className='bg-gray-900 text-gray-300'>
      {/* Main Footer Content */}
      <motion.div 
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          
          {/* Company Info */}
          <motion.div className='space-y-4' variants={itemVariants}>
            <div className='flex items-center space-x-2'>
              <motion.div 
                className='w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center'
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className='text-white font-bold text-lg'>S</span>
              </motion.div>
              <span className='text-2xl font-bold text-white'>Seekho</span>
            </div>
            <p className='text-sm text-gray-400 leading-relaxed'>
              Empowering learners worldwide with quality education and professional development opportunities.
            </p>
            <div className='flex space-x-4'>
              <motion.a 
                href="#" 
                className='hover:text-blue-500 transition-colors'
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className='hover:text-blue-500 transition-colors'
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className='hover:text-blue-500 transition-colors'
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className='hover:text-blue-500 transition-colors'
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className='text-white font-semibold mb-4 text-lg'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link to="/about" className='hover:text-blue-500 transition-colors text-sm'>About Us</Link>
              </li>
              <li>
                <Link to="/courses" className='hover:text-blue-500 transition-colors text-sm'>Courses</Link>
              </li>
              <li>
                <Link to="/instructors" className='hover:text-blue-500 transition-colors text-sm'>Instructors</Link>
              </li>
              <li>
                <Link to="/pricing" className='hover:text-blue-500 transition-colors text-sm'>Pricing</Link>
              </li>
              <li>
                <Link to="/blog" className='hover:text-blue-500 transition-colors text-sm'>Blog</Link>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h3 className='text-white font-semibold mb-4 text-lg'>Support</h3>
            <ul className='space-y-2'>
              <li>
                <Link to="/help" className='hover:text-blue-500 transition-colors text-sm'>Help Center</Link>
              </li>
              <li>
                <Link to="/faq" className='hover:text-blue-500 transition-colors text-sm'>FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className='hover:text-blue-500 transition-colors text-sm'>Contact Us</Link>
              </li>
              <li>
                <Link to="/terms" className='hover:text-blue-500 transition-colors text-sm'>Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className='hover:text-blue-500 transition-colors text-sm'>Privacy Policy</Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className='text-white font-semibold mb-4 text-lg'>Stay Updated</h3>
            <p className='text-sm text-gray-400 mb-4'>Subscribe to our newsletter for the latest courses and updates.</p>
            <form className='space-y-2'>
              <input 
                type="email" 
                placeholder="Your email address"
                className='w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm'
              />
              <motion.button 
                className='w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium text-sm'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-sm text-gray-400'>
              © 2025 Seekho. All rights reserved.
            </p>
            <div className='flex space-x-6 text-sm text-gray-400'>
              <Link to="/sitemap" className='hover:text-blue-500 transition-colors'>Sitemap</Link>
              <Link to="/accessibility" className='hover:text-blue-500 transition-colors'>Accessibility</Link>
              <Link to="/cookies" className='hover:text-blue-500 transition-colors'>Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer