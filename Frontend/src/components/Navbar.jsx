import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Login from './Login';
import { useAuth } from '../context/AuthProvider';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [authUser, setAuthUser ] = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("Users");
    setAuthUser(null)
    navigate('/');
    window.location.reload(); 
  };

  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/course">Course</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><a href="#">About</a></li> {/* Keep this as an <a> if it's external */}
    </>
  );

  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 sticky top-0 left-0 right-0 ${sticky ? "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out" : ""} z-50 py-3`}>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {navItems}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">BookStore</a>
          </div>
          <div className='navbar-end space-x-3'>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navItems}
              </ul>
            </div>
            <div className='hidden md:block'>
              <label className="px-3 py-2 border rounded-md flex items-center gap-2">
                <input type="text" className="outline-none" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                  <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                </svg>
              </label>
            </div>
            <div className="">
            {authUser ? (
              <button className="bg-red-500 text-white p-3 rounded-md hover:bg-red-600 duration-300" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <a className="bg-black text-white p-3 rounded-md hover:bg-slate-500 duration-300" onClick={() => document.getElementById('my_modal_3').showModal()}>
                Login
              </a>
            )}
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
