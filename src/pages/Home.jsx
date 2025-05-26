import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import ClientReviews from '../components/ClientReviews'
import DiscountBanner from '../components/DiscountBanner'
import HeroImage from "../assets/image/Heroimage.png"



function Home() {
  return (
    <div>
      <HeroSection heroImage={HeroImage} />
      <AboutUs/>
      <ClientReviews/>
      <DiscountBanner/>
      
    </div>
  )
}

export default Home
