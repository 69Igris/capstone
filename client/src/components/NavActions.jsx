import React from 'react'

const NavActions = () => {
  return (
    <div className='flex items-center space-x-4'>
      {/* Search Icon */}
      <button className='p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200'>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      {/* Notifications */}
      <button className='relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200'>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5-5 5-5m-6-3v2a6 6 0 000 12v2a6 6 0 010-12z" />
        </svg>
        <span className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full'></span>
      </button>

      {/* Login Button */}
      <button className='text-gray-700 hover:text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200'>
        Login
      </button>

      {/* Create Account Button */}
      <button className='bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
        Create Account
      </button>
    </div>
  )
}

export default NavActions