import React from 'react'
import NavBar from '../components/NavBar'  
import Footer from '../components/Footer'
import CreateEventForm from '../components/CreateEventForm'
const AdminPage = () => {
  return (
    <div>
      <NavBar />
      <main className='flex justify-center items-center h-screen bg-gray-100'>
        <CreateEventForm/>
      </main>
      <Footer />
    </div>
  )
}

export default AdminPage
