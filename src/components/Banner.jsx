import React from 'react'
import image2 from "../assets/images/image2.png";
import { useNavigate } from 'react-router-dom';
const Banner = () => {
  const navigate = useNavigate();
  return (
    <header className='h-[450px] flex flex-col justify-center items-center' style={{
        backgroundImage: `url(${image2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>

        <ul className='flex justify-center items-center gap-4 text-white text-xl p-4'>
            <li onClick={() => navigate('/')} className='hover:text-red-500 cursor-pointer' >Home</li>
            <li onClick={() => navigate('/about')} className='hover:text-red-500 cursor-pointer'>About</li>
            <li onClick={() => navigate('/events')} className='hover:text-red-500 cursor-pointer'>Events</li>
            <li onClick={() => navigate('/signup')} className='hover:text-red-500 cursor-pointer'>Registration</li>
            <li onClick={() => navigate('/login')} className='hover:text-red-500 cursor-pointer'>Login</li>
            <li onClick={() => navigate('/signup')} className='hover:text-red-500 cursor-pointer'>Signup</li>
            <li onClick={() => navigate('/contact')} className='hover:text-red-500 cursor-pointer'>Contact Us</li>
            <li onClick={() => navigate('/feedback')} className='hover:text-red-500 cursor-pointer'>Feedback</li>
        </ul>
      

      <div className='flex flex-col justify-center items-center h-full gap-4'>
        <h1 className='text-white text-4xl font-bold'>Welcome to ACity Event Management</h1>
        <p className='text-white text-xl font-bold'>Experience seamless event planning and management with us.</p>
        <p className='text-white text-xl font-bold'>Join us to create memorable moments that last a lifetime.</p>
        <button onClick={() => navigate('/signup')} className='bg-white px-6 py-5 rounded-md text-red-700 hover:bg-red-700 hover:text-white'>Register Now</button>
      </div>


    </header>
  )
}

export default Banner
