import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNumber: '',
    phone: '',
    message: ''
  });

  const [user, setUser] = useState(null); // Check login status
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  // Simulate user login state check (you should replace this with actual login logic)
  useEffect(() => {
    // Example: Checking if user is logged in
    const loggedInUser = localStorage.getItem('user'); // or use your authentication system
    setUser(loggedInUser);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (data) => {
    const errors = {};
    // Perform form validation here (for email, roll number, etc.)
    if (!data.email) errors.email = 'Email is required';
    if (!data.rollNumber) errors.rollNumber = 'Roll number is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      const formErrors = validateForm(formData);
      if (Object.keys(formErrors).length === 0) {
        // If no validation errors, show success message
        setSuccessMessage('Thank you for contacting us. We will get back to you shortly!');
        setFormData({ name: '', email: '', rollNumber: '', phone: '', message: '' }); // Reset form data
      } else {
        setErrors(formErrors);
      }
    } else {
      alert('Please login to be able to contact us');
    }
  };

  return (
    <div>
      <Navbar />
      {/* Conditional rendering based on user authentication */}
      {user ? (
        <main className="py-12 bg-gray-100">
          <div className="container mx-auto flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Contact Us</h2>
              {successMessage && (
                <p className="text-green-500 text-center mb-4">{successMessage}</p> // Show success message
              )}
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your email"
                    required
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>

                {/* Roll Number Field */}
                <div className="mb-4">
                  <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700">Roll No</label>
                  <input
                    type="text"
                    id="rollNumber"
                    name="rollNumber"
                    value={formData.rollNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your roll number"
                    required
                  />
                  {errors.rollNumber && <p className="text-red-500 text-xs">{errors.rollNumber}</p>}
                </div>

                {/* Phone Number Field */}
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your message"
                    rows="4"
                    required
                  ></textarea>
                </div>

                {/* Send Message Button */}
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white font-medium py-2 rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </main>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl font-semibold text-gray-700">Please log in to access the contact form.</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ContactUsPage;
