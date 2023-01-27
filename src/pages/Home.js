import React from 'react'
import Navbar from "../components/Navbar"
import Monitor from "../components/Monitor"
import Footer from "../components/Footer"
import Tokenomic from '../components/Tokenomic'
import About from '../components/About'
import Timeline from '../components/Timeline'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Monitor />
        <Tokenomic />
        <About />
        <Timeline />
        <Footer />
    </div>
  )
}

export default Home