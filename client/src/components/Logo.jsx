import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className='flex items-center space-x-3 group'>
      <div className='relative'>
        <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300'>
          <span className='text-white font-bold text-xl'>S</span>
        </div>
        <div className='absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-70'></div>
      </div>
      <div className='flex flex-col'>
        <span className='text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors'>Seekho</span>
        <span className='text-xs text-gray-500 -mt-1'>Learn & Grow</span>
      </div>
    </Link>
  )
}

export default Logo