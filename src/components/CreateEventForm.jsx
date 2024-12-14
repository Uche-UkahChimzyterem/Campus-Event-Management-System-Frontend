import React, { useState } from 'react'
import axios from 'axios';

const CreateEventForm = () => {
  const [loading,setLoading] = useState(false);
    const [event, setEvent] = useState({
        name: '',
        event_date: '',
        location: '',
        description: '',
        capacity: '',
        event_time: '',
        type: "",
        created_by: JSON.parse(localStorage.getItem('user'))?.id
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(event);
        axios.post('http://localhost:4000/api/events/createEvent', event)
            .then(res => {
                setLoading(false);
                alert(res.data.message);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
                alert(err.response.data.error);
            })
    }
    

    return (
        <div className='bg-white shadow-lg rounded-lg overflow-hidden p-6 w-8/12'>
            <h1 className='text-2xl font-bold text-center mb-6'>Create Event Form</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="event-name">Event Name</label>
                    <input className='border border-gray-300 rounded-md p-2' type="text" id="event-name" placeholder='Event Name' value={event.name} onChange={e => setEvent({ ...event, name: e.target.value })} />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="event-date">Event Date</label>
                    <input className='border border-gray-300 rounded-md p-2' type="date" id="event-date" placeholder='Event Date' value={event.event_date} onChange={e => setEvent({ ...event, event_date: e.target.value })} />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="event-location">Event Location</label>
                    <input className='border border-gray-300 rounded-md p-2' type="text" id="event-location" placeholder='Event Location' value={event.location} onChange={e => setEvent({ ...event, location: e.target.value })} />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="event-description">Event Description</label>
                    <textarea className='border border-gray-300 rounded-md p-2' id="event-description" placeholder='Event Description' value={event.description} onChange={e => setEvent({ ...event, description: e.target.value })} />
                </div>
                <div className="flex flex-col gap-2">
            <label htmlFor="eventType">Event Type</label>
            <select
              className="border border-gray-300 rounded-md p-2"
              id="eventType"
              value={event.type}
              onChange={(e) =>
                setEvent({ ...event, type: e.target.value })
              }
              required
            >
              <option value="">Select Event Type</option>
              <option value="Workshops">Workshops</option>
              <option value="Seminars">Seminars</option>
              <option value="Club activities">Club activities</option>
            </select>
          </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="event-time">Event Time</label>
                    <input className='border border-gray-300 rounded-md p-2' type="time" id="event-time" placeholder='Event Time' value={event.event_time} onChange={e => setEvent({ ...event, event_time: e.target.value })} />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="event-capacity">Event Capacity</label>
                    <input className='border border-gray-300 rounded-md p-2' type="number" id="event-capacity" placeholder='Event Capacity' value={event.capacity} onChange={e => setEvent({ ...event, capacity: Math.max(0, e.target.value) })} />
                </div>
                <button type='submit' className='bg-red-600 text-white px-4 py-2 rounded-md'>Create Event</button>
            </form>
        </div>
    )
}

export default CreateEventForm
