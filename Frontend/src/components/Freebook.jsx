import React, { useEffect, useState } from 'react'
 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import axios from "axios";
const Freebook = () => {
  const [book, setBook] = useState([]);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
      };
      useEffect(() => {
        const getBook = async () => {
           try {
              const res = await axios.get("https://bookstore1-backend-h2k4.onrender.com/book");
              setBook(res.data.filter((data)=>data.price==0));
            
           } catch (error) {
              console.log(error);
           }
        };
        getBook();
     }, []);
     
     
  return (
  <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-4'>
    <h1 className='font-semibold text-xl font-serif'>Free Courses Offered</h1>
    <p>Lorem ipsum do ribus cumque dolore natus sequi ratione libero possimus illo deserunt numquam labore?</p>
    <div className='mt-3'>
    <Slider {...settings}>
      {book.map((item)=>{
            return <Cards item={item} key={item.id}/>
      })}
    </Slider>
    </div>
  </div>
  </>
  )
}

export default Freebook
