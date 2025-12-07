import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../services/api'

export default function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      navigate('/courses')
    }
  }, [navigate])

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await signup({ username, email, password })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      
      // Redirect based on role
      if (res.data.user.role === 'admin') {
        navigate('/admin')
      } else {
        navigate('/courses')
      }
    window.location.reload()
    } catch (err) {
      setMsg(err.response?.data?.message || 'Signup failed')
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 px-4'>
      <div className='bg-white shadow-2xl rounded-2xl w-full max-w-md p-8'>
        <h2 className='text-3xl font-bold text-center text-purple-600 mb-6'>Create Account</h2>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            placeholder='Username'
            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            placeholder='Email'
            type='email'
            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder='Password'
            type='password'
            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type='submit'
            className='w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg'
          >
            Sign Up
          </button>
        </form>

        {msg && <p className='text-red-500 text-center mt-4 bg-red-50 py-2 px-4 rounded-lg'>{msg}</p>}

        <p className='text-center mt-6 text-gray-600'>
          Already have an account?{' '}
          <Link to='/login' className='text-purple-600 font-semibold hover:text-purple-700'>
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}