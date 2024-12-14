import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import eventImage1 from '../assets/images/about1.png'
import eventImage2 from '../assets/images/about2.png'
import eventImage3 from '../assets/images/about3.png'
const AboutPage = () => {
  return (
    <div>
      <Navbar />
        <main>
                  {/* About Section */}
      <div className="bg-gray-100 py-16 px-6 flex justify-between">
        <div className="container mx-auto text-left max-w-2xl">
          <h1 className="text-4xl font-bold text-red-600 mb-6">About</h1>
          <p className="text-lg text-gray-800 mb-6">
            ACity Event Management System is a platform designed to streamline the organization, promotion, and
            management of events at Academic City University College. The system allows students and faculty to easily
            create, attend, and stay informed about various campus events, ensuring that every event is well-organized
            and accessible to the entire Academic City community.
          </p>
          <h2 className="text-4xl font-bold text-red-600 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-800 mb-6">
            Our mission is to provide a seamless, user-friendly platform that enhances the student and faculty
            experience by simplifying event management. We aim to foster a vibrant campus culture where students and
            faculty alike can easily connect, engage, and participate in a wide range of academic, social, and cultural
            events.
          </p>
          <h2 className="text-4xl font-bold text-red-600 mb-6">What We Offer</h2>
          <ul className="list-disc list-inside text-lg text-gray-800 mb-6">
            <li>Easy event creation and registration</li>
            <li>Comprehensive event details and schedules</li>
            <li>Real-time updates and notifications</li>
            <li>Interactive event participation for students</li>
            <li>Seamless communication between organizers and attendees</li>
          </ul>
        </div>

        {/* Event Images */}
        <div className="flex flex-col justify-start space-y-4">
          <img src={eventImage1} alt="Event Image 1" className="w-48 h-48 object-cover rounded-md" />
          <img src={eventImage2} alt="Event Image 2" className="w-48 h-48 object-cover rounded-md" />
          <img src={eventImage3} alt="Event Image 3" className="w-48 h-48 object-cover rounded-md" />
        </div>
      </div>
        </main>
      <Footer />
    </div>
  )
}

export default AboutPage
