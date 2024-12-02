import React from 'react'


import Weather from '../../components/weather/Weather';
import NavigationBar from "../../components/CommonNavigation";



export default function WeatherIndex() {
  
  return (
    <>
    <NavigationBar />
    
    <Weather/>
    </>
    
  )
}
