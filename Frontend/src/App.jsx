import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Freebook from './components/Freebook'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  

  return (
    <>
    <Toaster/>
        <Navbar/>
        <Banner/>
        <Freebook/>
        <Footer/>
         
    </>
  )
}

export default App
