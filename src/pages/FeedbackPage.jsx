import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState(null); // Simulate user login state
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  // Simulate user login state check (you should replace this with actual login logic)
  useEffect(() => {
    // Example: Checking if user is logged in
    const loggedInUser = localStorage.getItem('user'); // or use your authentication system
    setUser(loggedInUser);
  }, []);

  const handleInputChange = (e) => {
    setFeedback(e.target.value);
  };

  const validateForm = (feedback) => {
    const errors = {};
    if (!feedback) errors.feedback = 'Feedback cannot be empty';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      const formErrors = validateForm(feedback);
      if (Object.keys(formErrors).length === 0) {
        setSuccessMessage('Thank you for your feedback! We appreciate your input.');
        setFeedback(''); // Reset feedback input
      } else {
        setErrors(formErrors);
      }
    } else {
      alert('Please login to submit feedback');
    }
  };

  return (
    <div>
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-12 bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-red-600 mb-4">We Value Your Feedback</h2>
          <p className="text-center text-gray-600 mb-4">Share Your Feedback</p>
          {successMessage && (
            <p className="text-green-500 text-center mb-4">{successMessage}</p> // Show success message
          )}
          <form onSubmit={handleSubmit}>
            {/* Feedback Textarea */}
            <div className="mb-4">
              <textarea
                name="feedback"
                value={feedback}
                onChange={handleInputChange}
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Let us know your thoughts..."
              />
              {errors.feedback && <p className="text-red-500 text-xs">{errors.feedback}</p>} {/* Error message */}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white font-medium py-2 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FeedbackPage;
