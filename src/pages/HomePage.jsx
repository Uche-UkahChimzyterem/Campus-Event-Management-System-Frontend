import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import {Link} from "react-router-dom"
import image8 from "../assets/images/image8.png"
const HomePage = () => {
  return (
    <div>
     <NavBar />
     <Banner />

     <main>
               {/* What You Will Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">What You Will Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-md">
              <i className="fas fa-users text-red-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Networking Opportunities</h3>
              <p>Connect with like-minded individuals and industry leaders during our events.</p>
            </div>
            {/* Card 2 */}
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-md">
              <i className="fas fa-microphone text-red-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Inspiring Talks</h3>
              <p>Learn from experienced professionals who share their journeys and insights.</p>
            </div>
            {/* Card 3 */}
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-md">
              <i className="fas fa-lightbulb text-red-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Creative Workshops</h3>
              <p>Engage in interactive sessions designed to boost your creativity and skills.</p>
            </div>
          </div>

          {/* Centered Start Your Experience Button */}
          <div className="mt-6 text-center">
            <Link to="/events" className="inline-block px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700">
              Start Your Experience!
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">ACity Event Management</h2>
            <p className="mt-4 text-lg text-gray-600">
              At Academic City University College (ACity), our Event Management System is designed to showcase all the amazing events happening on campus. 
              <br />
              Whether it's academic seminars, cultural festivals, sports competitions, or social gatherings, our platform ensures you stay informed and never miss out on the vibrant life at ACity.
            </p>
            <div className="mt-6">
              <Link to="/about" className="inline-block px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700">
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Section (Image 6) */}
          <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
            <img src={image8} alt="Event Image" className="max-w-xs md:max-w-md object-contain rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

            {/* Comforting Message Section */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Your Opinion Matters</h2>
          <p className="text-lg text-gray-600 mb-4">
            We are always looking to improve and provide the best experience for you. Please take a moment to share your feedback with us.
          </p>
          <Link to="/feedback" className="px-8 py-4 bg-red-600 text-white rounded-full text-xl hover:bg-red-700">
            Give Feedback
          </Link>
        </div>
      </section>
     </main>

     <Footer />
    </div>
  )
}

export default HomePage
