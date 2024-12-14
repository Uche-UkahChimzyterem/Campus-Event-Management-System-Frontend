import React, { useState, useEffect } from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import eventImage5 from '../assets/images/image5.png'
import eventImage1 from '../assets/images/image1.png'
import eventImage4 from '../assets/images/image4.png'
import eventImage3 from '../assets/images/image3.png'
import eventImage6 from '../assets/images/image6.png'
import eventImage7 from '../assets/images/image7.png'

const EventsCards = ({ event, handleRSVP, onCancel}) => {
  const [image, setImage] = useState(null)
  const [rsvpStatus, setRsvpStatus] = useState(false)

  useEffect(() => {
    imageSetter()
    // Check localStorage for RSVP status on page load
    // const savedRSVPStatus = localStorage.getItem(`rsvpStatus_${event.event_id}`)
    if (event.status==="confirmed") {
      setRsvpStatus(true)
    }
  }, [event.event_id])

  const imageSetter = () => {
    if (event?.name?.includes('Official Chattering Ceremony of NSBE')) {
      setImage(eventImage5)
    } else if (event?.name?.includes('Sustainability Workshop')) {
      setImage(eventImage1)
    } else if (event?.name?.includes('FIE Business Fair')) {
      setImage(eventImage4)
    } else if (event?.name?.includes('Varsity League')) {
      setImage(eventImage3)
    } else if (event?.name?.includes('Annual Robotics Shutdown')) {
      setImage(eventImage6)
    } else if (event?.name?.includes('Cocktail Evening')) {
      setImage(eventImage7)
    }
  }

  const handleClickRSVP = () => {
    handleRSVP(event)
    setRsvpStatus(true)
    // Save RSVP status in localStorage
    localStorage.setItem(`rsvpStatus_${event.event_id}`, 'true')
  }

  return (
    <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={event.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{event.name}</h2>
        <p className="text-gray-600 text-sm mt-2">{event.event_date}</p>
        <p className="text-gray-600 text-sm mt-1"><FaMapMarkerAlt className="inline-block mr-1" /> {event.location}</p>
        <p className="text-gray-600 text-sm mt-1">{event.available_seats} seats available</p>
        <div className="p-4 flex justify-end ">
          <button
            onClick={handleClickRSVP}
            className={`mt-4 px-4 py-2 rounded ${new Date(event?.event_date?.split("|")[0]) < new Date() ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-red-600 text-white hover:bg-red-700'}`}
            disabled={new Date(event?.event_date?.split("|")[0]) < new Date()|| event.status === "confirmed"}
          >
            {event.status === "confirmed" ? 'RSVP\'d' : 'RSVP'}
          </button>

          {onCancel && <button onClick={()=> onCancel(event.event_id)} className="mt-4 px-4 py-2 rounded bg-gray-400 text-gray-700">Cancel RSVP</button>}
        </div>
      </div>
    </div>
  )
}

export default EventsCards
