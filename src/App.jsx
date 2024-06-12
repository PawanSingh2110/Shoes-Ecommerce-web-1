import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Hero from './components/Hero'
import Blur from './components/Blur'
import Slider from './components/Slider'
import About from './components/About'
import Popular from './components/Popular'
import Base from './components/Base'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
     <Navbar/>
     <Header/>
     <Hero/>
     <Blur/>
     <Slider/>
     <About/>
     <Popular/>
     <Base/>
     <Footer/>
    </div>
  )
}

export default App
