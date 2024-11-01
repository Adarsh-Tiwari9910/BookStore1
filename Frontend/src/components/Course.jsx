import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
 
import Cards from './Cards';
import axios from "axios";

const Course = () => {
   const [book, setBook] = useState([]);

   useEffect(() => {
      const getBook = async () => {
         try {
            const res = await axios.get("https://bookstore1-backend-g6s9.onrender.com/book");
            setBook(res.data);
          
         } catch (error) {
            console.log(error);
         }
      };
      getBook();
   }, []);

   return (
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
         <div className='text-center mt-10'>
            <h1 className='text-2xl font-semibold md:text-4xl'>
               We are delighted to have you <span className='text-pink-500'>Here!:) </span>
            </h1>
            <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad quibusdam eligendi quisquam debitis sapiente fuga consectetur rerum doloremque error accusantium, ducimus reiciendis soluta nostrum voluptatibus in. Facere, quas veniam?</p>
            <button className='bg-pink-500 mt-3 text-white px-4 py-2 rounded'>
               <Link to="/">Home</Link>
            </button>
         </div>
         <div className='mt-10 grid grid-cols-1 md:grid-cols-3'>
            {book.map((item) => {
               return (
                  <Cards key={item.id} item={item} />
               );
            })}
         </div>
      </div>
   );
};

export default Course;
