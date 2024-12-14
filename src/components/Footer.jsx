import React from 'react'
import logo1 from "../assets/images/logo1.png";
const Footer = () => {
  return (
    <footer className='bg-black border border-black p-6 text-white'>
      <div className='flex gap-60'>
        <img src={logo1} alt="ACity Logo" className="h-16" />
    
        <ul className='flex justify-center items-center gap-4 text-xl'>
            <li className='hover:text-red-500 cursor-pointer'>Privacy</li>
            <li className='hover:text-red-500 cursor-pointer'>Copyright Discloure</li>
            <li className='hover:text-red-500 cursor-pointer'>Accessibility</li>
            <li className='hover:text-red-500 cursor-pointer'>Digital Accessibility</li>
        </ul>
    </div> 
    <iframe
                src="https://maps.google.com/maps?q=Academic%20City%20University%20College&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title="Map of Academic City University College"
                width="40%"
                height="150"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
  
    </footer>
  )
}

export default Footer
