import React, { useState } from "react"
import SideBar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection"
import Services from '../components/Services'

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../components/InfoSection/Data'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroSection/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home