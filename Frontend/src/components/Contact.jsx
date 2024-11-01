import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Validate inputs
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Log data and show success message
    console.log({ name, email, message });
    alert("Message sent!");

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="modal-box border-[2px] shadow-md p-5 rounded-md">
        <h3 className="font-bold text-lg">Contact Us</h3>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-3 py-1 border rounded-md outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label className="block">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-3 py-1 border rounded-md outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label className="block">Message</label>
            <textarea
              placeholder="Enter Your Message"
              className="w-full px-3 py-1 border rounded-md outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && <p className="text-red-600">{errors.message}</p>}
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
            >
                Send Message
            </button>
            <button
            className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
               <Link to="/">Home</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
