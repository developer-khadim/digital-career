import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout'
import Home from './page/Home/Home'

import Services from './page/Services/Services'
import Testimonials from './page/Testimonials/Testimonials'
import Technologies from './page/Technologies/Technologies'
import Contact from './page/Contact Us/Contact'
import WhatAreWe from './page/WhatAreWe/WhatAreWe'
import Careers from './page/Careers/Careers'
 
const App = () => {
  return (
   
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route path="/services" element={<Services />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/what-are-we" element={<WhatAreWe />} />
            <Route path='/careers' element={<Careers/>}/>
          </Route>
        </Routes>
      </Router>

  )
}

export default App