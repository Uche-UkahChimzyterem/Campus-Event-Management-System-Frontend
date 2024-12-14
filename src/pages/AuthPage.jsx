import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const AuthPage = () => {
  return (
    <div>
      <NavBar/>
      <div className='flex justify-center items-center h-[80vh] bg-gray-100'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default AuthPage
