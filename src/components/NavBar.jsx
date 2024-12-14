import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo1 from "../assets/images/logo1.png";
import ManageProfile from '../assets/images/Manager.jpg';
const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false); 
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
}, [])

  const handleLogout = () => {
    localStorage.removeItem('user');
    alert("Logged out successfully");
    navigate('/');
  }

  return (
    <div className='bg-white border p-6'>
        {
            location.pathname === '/' ? (
                <img src={logo1} alt="ACity Logo" className="h-16" />
            ) : (
                <div className="container mx-auto flex items-center justify-between px-6">
                    <></>
                </div>
            )
        }
      {location.pathname !== '/' && (
        <>
          <div className="container mx-auto flex items-center justify-between px-6">
          
            
            <div className="relative">
              <div className="flex items-center cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
                {user ? <img src={ManageProfile} alt="profile" className="h-16 rounded-full" /> : <></>}
              </div>
              {showDropdown && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                  <li
                    onClick={() => setShowDropdown(false)}
                    className="hover:text-red-600 cursor-pointer px-4 py-2"
                  >
                    {user&& user.name}
                  </li>
                  <li
                    onClick={() => setShowDropdown(false)}
                    className="hover:text-red-600 cursor-pointer px-4 py-2"
                  >
                    
                    {user&&`Role: ${user.role}`}
                  </li>
                 
                  <li
                    onClick={handleLogout}
                    className="hover:text-white cursor-pointer px-4 py-2 bg-red-600 text-white"
                  >
                    Logout
                  </li>
                </ul>
              )}
            </div>

            <div className="flex items-center ml-10">
              <img src={logo1} alt="ACity Logo" className="h-16" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center flex-1">
              ACity Event Management System
            </h1>
            <div className="w-16"></div>
          </div>

          <nav className="bg-white py-4">
            <div className="container mx-auto flex justify-evenly space-x-8">
             {user ? <></> : <Link to="/" className={`text-lg font-medium ${location.pathname === '/' ? 'text-red-600' : 'text-gray-700'} hover:text-red-600`}>Home</Link>}

             {user ? <></> : <Link to="/about" className={`text-lg font-medium ${location.pathname === '/about' ? 'text-red-600' : 'text-gray-700'} hover:text-red-600`}>About</Link>}

             <Link to="/events" className={`text-lg font-medium ${location.pathname === '/events' ? 'text-red-600' : 'text-gray-700'} hover:text-red-600`}>Events</Link>

             {user ? <></> : <Link to="/signup" className={`text-lg font-medium ${location.pathname === '/signup' ? 'text-red-600' : 'text-gray-700'} hover:text-red-600`}>Registration</Link>}

             {user ? <></> : <Link to="/login" className={`text-lg font-medium ${location.pathname === '/login' ? 'text-red-600' : 'text-gray-700'} hover:text-red-600`}>Login</Link>}

             {user && user.role !== 'admin'  ? <Link to="/dashboard" className={`text-lg font-medium ${location.pathname === '/dashboard' ? 'text-red-600' : 'text-gray-700'} hover:text-red-600`}>Dashboard</Link> : <></>}

             {user && user.role === 'admin' ? <Link to="/admin" className={`text-lg font-medium ${location.pathname === '/admin' ? 'text-red-600' : 'text-gray-700'} hover:text-red-600`}>Admin</Link> : <></>}

             {user && user.role !== 'admin' ? <Link to="/contact" className={`text-lg font-medium ${location.pathname === '/contact' ? 'text-red-600' : 'text-gray-700'} hover:text-red-600`}>Contact Us</Link> : <></>}
             
             {user?.role !== 'admin' ? <Link to="/feedback" className={`text-lg font-medium ${location.pathname === '/feedback' ? 'text-red-600' : 'text-gray-700'} hover:text-red-600`}>Feedback</Link> : <></>}
            </div>
          </nav>
        </>
      )}
    </div>
  );
}

export default NavBar;
