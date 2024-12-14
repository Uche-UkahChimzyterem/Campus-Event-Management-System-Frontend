import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import EventsCards from '../components/EventsCards';

import api from '../middleware/api';

const UserDashboardPage = () => {
  const [user, setUser] = useState(null); // Set initial state to null for clarity
  const [events, setEvents] = useState([]);

  // Combined effect to initialize user and fetch events
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser); // Set user first
      fetchUserEvents(storedUser.id); // Call API immediately after setting user
    }
  }, []);

  const fetchUserEvents = async (userId) => {
    try {
      const res = await api.get(`/api/events/getUserEvents/${userId}`);
      setEvents(res.data.events);
    } catch (err) {
      console.error("Error fetching user events:", err);
    }
  };

  const handleRSVP = (eventTitle) => {
    alert(`RSVP clicked for event: ${eventTitle}`);
  };
  const handleCancelRSVP = async (eventId) => {
   try {
     await api.delete(`/api/events/cancelRSVP/${eventId}`).then(res => {
      if(res.data.message === "RSVP cancelled successfully") {
        alert(res.data.message);
        window.location.reload();
      } else {
        alert("Error cancelling RSVP");
      }
    });
   } catch (err) {
    alert("Error cancelling RSVP");
    console.error("Error canceling RSVP:", err);
   }
  };

  return (
    <div>
      <NavBar />
      <main className="bg-gray-100">
        <h1 className="text-2xl font-bold text-center pt-5">My RSVP'd Events</h1>
        <div className="container mx-auto mt-6 px-6 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {events.map((event) => (
              <EventsCards key={event.id} event={event} handleRSVP={handleRSVP} onCancel={handleCancelRSVP} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserDashboardPage;
