import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Diet from './components/Diet';
import Works from './components/Works';
import Testimonials from './components/Testimonials';
import './App.css'
import CTA from './components/CTA';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Diet/>
      <Works/>
      <Testimonials/>
      <Pricing/>
      <CTA/>
      <Footer/>
    </>
  )
}

export default App
