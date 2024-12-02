import React from 'react'

import AboutUs from '../components/AboutUs';

import Caraousal from '../components/common/Caraousal'
import Contact from "../components/Contact";
import Service from "../components/Platform";
import NavigationBar from "../components/NavigationBar";

export default function HomePage() {
  return (
    <>
    <NavigationBar />
       <Caraousal/>
       <Service/>
       <AboutUs/>
       <Contact/>
      
    </>
  )
}
