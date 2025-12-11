import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [user, setUser] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {

    const checkUser = () => {
      const userData = localStorage.getItem('user')
      if (userData) {
        try {
          setUser(JSON.parse(userData))
        } catch (err) {
          console.error('Error parsing user data:', err)
        }
      } else {
        setUser(null)
      }
    }
console.log('user-before', user);
    checkUser()
    console.log('user-after', user);

    // Listen for storage changes (for logout/login updates)
    window.addEventListener('storage', checkUser)
    return () => window.removeEventListener('storage', checkUser)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    setIsMobileMenuOpen(false)
    navigate('/login')
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'backdrop-blur-lg bg-white/80 border-white/20 mx-4 mt-4 rounded-2xl shadow-lg border' 
          : 'backdrop-blur-md bg-white/70 border-white/10 border-b'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        isScrolled ? 'max-w-4xl' : 'max-w-7xl'
      }`}>
        <div className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled ? 'h-14' : 'h-16'
        }`}>
          {/* Logo */}
          <motion.div 
            className='flex-shrink-0'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className={`font-bold text-blue-600 hover:text-blue-700 transition-all duration-300 ${
              isScrolled ? 'text-xl' : 'text-2xl'
            }`}>
              <div className='flex items-center space-x-2'>
                <motion.div 
                  className={`bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 ${
                    isScrolled ? 'w-8 h-8 text-sm' : 'w-10 h-10 text-lg'
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  S
                </motion.div>
                <span>Seekho</span>
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-6'>
            {user ? (
              <>
                <Link 
                  to="/courses"
                  className={`text-gray-700 hover:text-blue-600 font-medium transition-all ${
                    isScrolled ? 'text-sm' : 'text-base'
                  }`}
                >
                  Courses
                </Link>
                {user.role === 'admin' && (
                  <Link 
                    to="/admin"
                    className={`text-gray-700 hover:text-purple-600 font-medium transition-all ${
                      isScrolled ? 'text-sm' : 'text-base'
                    }`}
                  >
                    Admin
                  </Link>
                )}
                <div className='flex items-center gap-3'>
                  <Link 
                    to="/profile"
                    className={`text-gray-700 hover:text-blue-600 font-medium transition-all ${
                      isScrolled ? 'text-sm' : 'text-base'
                    }`}
                  >
                    👤 {user.username}
                  </Link>
                  <motion.button 
                    onClick={handleLogout}
                    className={`bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl ${
                      isScrolled ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-base'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Logout
                  </motion.button>
                </div>
              </>
            ) : (
              <motion.button 
                onClick={() => navigate('/login')}
                className={`bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl ${
                  isScrolled ? 'px-5 py-2 text-sm' : 'px-6 py-2.5 text-base'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Login / Signup
              </motion.button>
            )}
          </div>
          
          {/* Mobile Menu */}
          <div className='md:hidden flex items-center gap-3'>
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {user ? (
                <>
                  <Link
                    to="/courses"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors"
                  >
                    Courses
                  </Link>
                  <Link
                    to="/profile"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors"
                  >
                    Profile ({user.username})
                  </Link>
                  {user.role === 'admin' && (
                    <Link
                      to="/admin"
                      onClick={closeMobileMenu}
                      className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium transition-colors"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-medium transition-colors text-center"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar