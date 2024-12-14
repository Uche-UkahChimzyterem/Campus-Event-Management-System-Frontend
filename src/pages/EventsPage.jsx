import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import EventsCards from '../components/EventsCards';
import { FaCalendarAlt, FaTags } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from 'axios';
import api from "../middleware/api";

const EventsPage = () => {
  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/events/getEvents');
      setEvents(res.data.events);
    } catch (err) {
      console.error(err);
    }
  };

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [events, setEvents] = useState([]); // Fetched events
  const [eventMessage, setEventMessage] = useState("");
  const [confirmed, setIsConfirmed] = useState(false);

  const [eventsForSelectedDate, setEventsForSelectedDate] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);

    // Filter events based on the selected date
    const selectedDateString = date.toDateString(); // Convert the date to string for comparison
    const filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.event_date); // Parse the event date
      return eventDate.toDateString() === selectedDateString; // Compare date strings
    });

    setEventsForSelectedDate(filteredEvents); // Update the filtered events state

    if (filteredEvents.length > 0) {
      setEventMessage("Events available for this day.");
    } else {
      setEventMessage("No events available for this day.");
    }
  };

  const handleRSVP = async (event) => {
    setIsConfirmed(false);
    try {
      const response = await api.post(`/api/events/confirmRsvp`, {
        event_id: event.id,
        user_id: JSON.parse(localStorage.getItem("user")).id,
      });
      setIsConfirmed(false);
      alert(response.data.message);
    } catch (error) {
      setIsConfirmed(false);
      if (error.response.data.error === "Event is already full") {
        alert("Event is already full");
      } else if (error.response.data.error === "User has already RSVP'd for this event") {
        alert("User has already RSVP'd for this event");
      } else {
        alert("Error confirming RSVP");
      }
      console.log(error);
    }
  };

  const getTileContent = ({ date, view }) => {
    if (view === "month" && events.some(event => new Date(event.event_date).toDateString() === date.toDateString())) {
      return (
        <div className="dot-container">
          <div className="dot bg-red-500 w-2 h-2 rounded-full mx-auto mt-1"></div>
        </div>
      );
    }
    return null;
  };

  // Updated filter to check both category and type
  const filteredEvents = selectedCategory
    ? events.filter((event) => event.category === selectedCategory || event.type === selectedCategory)
    : events;

  const eventsToDisplay = eventsForSelectedDate.length > 0 ? eventsForSelectedDate : filteredEvents;

  return (
    <div>
      <NavBar />
      <header>
        <nav className="bg-white py-4">
          <div className="container mx-auto flex justify-evenly space-x-8">
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="flex items-center text-gray-700 hover:text-red-600 font-medium"
            >
              <FaCalendarAlt className="mr-2" /> Events by Date
            </button>
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center text-gray-700 hover:text-red-600 font-medium"
            >
              <FaTags className="mr-2" /> Categories
            </button>
          </div>
          {showCategories && (
            <div className="absolute top-30 right-[25rem] bg-white shadow-lg rounded mt-2 p-4 z-10">
              <ul className="space-y-2">
                <li
                  onClick={() => setSelectedCategory("Workshop")}
                  className="hover:text-red-600 cursor-pointer"
                >
                  Workshop
                </li>
                <li
                  onClick={() => setSelectedCategory("Academics")}
                  className="hover:text-red-600 cursor-pointer"
                >
                  Academics
                </li>
                <li
                  onClick={() => setSelectedCategory("Career")}
                  className="hover:text-red-600 cursor-pointer"
                >
                  Careers
                </li>
                <li
                  onClick={() => setSelectedCategory("Social")}
                  className="hover:text-red-600 cursor-pointer"
                >
                  Social
                </li>
                <li
                  onClick={() => setSelectedCategory("Sports")}
                  className="hover:text-red-600 cursor-pointer"
                >
                  Sports
                </li>
              
              </ul>
            </div>
          )}
        </nav>
      </header>

      {showCalendar && (
        <div className="absolute bg-white shadow-lg rounded mt-2 p-4 z-10">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            className="react-calendar"
            tileContent={getTileContent}
          />
        </div>
      )}

      <div className="container mx-auto mt-6 px-6 pb-10">
        <div className="text-xl font-bold mb-4">{eventMessage}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {eventsToDisplay.length > 0 ? (
            eventsToDisplay.map((event) => (
              <EventsCards key={event.id} event={event} handleRSVP={handleRSVP} />
            ))
          ) : (
            <div>No events to display</div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventsPage;
