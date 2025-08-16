import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout'
import Home from './page/Home/Home'
import About from './page/About Us/About'
import Services from './page/Services/Services'
import Testimonials from './page/Testimonials/Testimonials'
import Technologies from './page/Technologies/Technologies'
import Contact from './page/Contact Us/Contact'
import HowToStart from './page/How to start/howtostart' 
const App = () => {
  return (
   
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/how-to-start' element={<HowToStart/> } />
          </Route>
        </Routes>
      </Router>

  )
}

export default App