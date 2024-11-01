import React from 'react';
import Navbar from '../components/Navbar';
import Course from '../components/Course';
import Signup from '../components/Signup'; // Import the Signup component
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthProvider'; // Import the useAuth hook

const Courses = () => {
  const [authUser,setAuthUser]= useAuth(); // Destructure authUser from context

  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
        {authUser ? (
          <Course /> // Render Course component if authUser is defined
        ) : (
          <Signup /> // Render Signup component if authUser is not defined
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
