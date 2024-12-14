### Campus Event Management 

#### Overview
The Campus Event Management application is designed to streamline event planning and coordination on campus. It provides a user-friendly platform where students and admins can manage, RSVP, and stay updated on upcoming events and activities.

---

#### Features 
- User Authentication: Secure login and registration for both users and admins.  
- Event Management: Easy creation, viewing, and management of events.  
- RSVP System: Users can RSVP for events and manage their participation.  
- Admin Dashboard: Admins can access additional features such as event creation and user management.  
- Responsive Design: Optimized for both mobile and desktop for an excellent user experience.

---

#### Technologies Used  
- Frontend: React, Vite, Tailwind CSS  
- Backend: Node.js, Express, Supabase  
- Authentication: JWT (JSON Web Tokens)  
- Styling:Tailwind CSS  
- State Management: React Hooks  
- HTTP Client:Axios

---

#### Backend Repository  
Find the backend repository for this project at:  
[**Backend Repo Link**]

---

#### Deployed Project  
The live project is deployed and can be accessed here:  
[**Deployed Project Link**]

---

#### Project Structure

##### Frontend
- Components: Includes reusable UI elements like NavBar, Footer, Banner, EventCards, etc.  
- Pages: Various pages including HomePage, Dashboard, AdminPage, RsvpConfirmationPage.  
- Services: Handles API calls for events, authentication, and user management.  
- Styling: Tailwind CSS ensures a responsive, clean design.

##### Backend
- Controllers: Handle business logic for authentication and event management.  
- Routes: Define the API endpoints for authentication and event-related operations.  
- Middleware: Authentication middleware for protecting routes.  
- Database: Supabase is used for data storage and retrieval.

---

#### Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/campus-event-management.git
   ```

2. Navigate to the project directory:  
   ```bash
   cd campus-event-management
   ```

3. Install dependencies:
   - Frontend:
     ```bash
     cd frontend2
     npm install
     ```  
   - Backend: 
     ```bash
     cd Nodejs-supabase
     npm install
     ```

4. Environment Variables:  
   Create a `.env` file in the `Nodejs-supabase` directory and add your environment variables:  
   ```env
   PORT=3000  
   JWT_SECRET=your_jwt_secret  
   JWT_EXPIRES=1d
   ```

5. Run the application:  
   - Start the backend server: 
     ```bash
     cd Nodejs-supabase
     npm start
     ```  
   - Start the frontend development server:  
     ```bash
     cd frontend
     npm run dev
     ```

6. Access the application: 
   - Backend: [http://localhost:3000](http://localhost:4000)  
   - Frontend: [http://localhost:5173](http://localhost:5173)

---

#### Usage 
- User Registration: Sign up to create an account and start interacting with events.  
- Login: Access your account to RSVP and manage events.  
- Admin Features: Admins can create and manage events through the admin dashboard.  
- RSVP: Users can RSVP for events and view upcoming events.

---

#### Admin Details
- Email: Arnold@example.com  
- Password: test

---


## Contributing
Anyone can help! Fork the repo, make changes, and submit a pull request with improvements or bug fixes.

Uche-Ukah Chimzyterem Janet
 License


## Contact Information
For any inquiries or feedback, feel free to reach out to [uche-ukah.chimzyterem@gmail.com].

## License
This project is licensed under the MIT License. Check the LICENSE file for more details.
