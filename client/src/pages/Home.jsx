import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import LearnSection from '../components/LearnSection'
import Courses from '../components/Courses'
import Testimonials from '../components/Testimonials'

export default function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    const userStr = localStorage.getItem('user')
    if (userStr) {
      try {
        const user = JSON.parse(userStr)
        if (user.role === 'admin') {
          navigate('/admin')
        } else {
          navigate('/courses')
        }
      } catch (err) {
        console.error('Error parsing user:', err)
      }
    }
  }, [])

  return (
    <div>
      <Hero />
      <LearnSection />
      <Courses/>
      <Testimonials />
    </div>
  )
}
