import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Course from './components/Course.jsx';
import Courses from './courses/Courses.jsx';
import Signup from './components/Signup.jsx';
import Contact from './components/Contact.jsx';
import AuthProvider from './context/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
       <App/>
    ),
  },
  {
    path: "/course",
    element: <Courses/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);
createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />

  </AuthProvider>
   
)
