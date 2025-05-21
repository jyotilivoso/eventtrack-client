import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import ClientReviews from '../components/ClientReviews'
import DiscountBanner from '../components/DiscountBanner'

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs/>
      <ClientReviews/>
      <DiscountBanner/>
      
    </div>
  )
}

export default Home
