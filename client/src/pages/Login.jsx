import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../services/api'

export default function Login() {
  const [identifier, setIdentifier] = useState('')
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
    setMsg('')
    try {
      const res = await login({ identifier, password })
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
      setMsg(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 px-4'>
      <div className='bg-white shadow-lg rounded-xl w-full max-w-md p-8'>
        <h2 className='text-3xl font-bold text-center text-blue-600 mb-6'>
          Seekho Login
        </h2>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            placeholder='Username or Email'
            className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400'
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />

          <input
            placeholder='Password'
            type='password'
            className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg'
          >
            Login
          </button>
        </form>

        {msg && <p className='text-red-500 text-center mt-4'>{msg}</p>}

        {/* Forgot + Signup Section */}
        <div className='flex items-center justify-between mt-4'>
          <label className='flex items-center'>
            {/* Add checkbox later if needed */}
          </label>

          <Link to='/forgot-password' className='text-blue-600'>
            Forgot Password?
          </Link>
        </div>

        <p className='text-center mt-4'>
          Don't have an account?{' '}
          <Link to='/signup' className='text-blue-600 font-semibold'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}
