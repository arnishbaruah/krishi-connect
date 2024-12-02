import React from 'react';
import { Link } from "react-router-dom";
import { useUserContext } from '../context/UserContext';

import './platform.css'
import schmelogo from '../schmelogo.png';
import weather from '../weather.png';
import product from '../product.png';
import men from '../men.png';
import menlogo from '../menlogo.png';
import logo from '../logo.png';
function ServiceSection() {
  const { details ,setDetails } = useUserContext();
//   const value1=details.data.email;
//   const value2=details.data.password;
// const url = `http://localhost:3000/?value1=${value1}&value2=${value2}`;
const url = `https://krishiconnect-ecommerce.cyclic.app/`
  return (

    <section  className="text-center">
      <div className="container container1" id="services">
        <div className="row">
          <div className="col-12">
            <div className="intro">
              <h6>For You</h6>
              <h1 className='darkGreenText'>What Do This Platform Provide?</h1>
              <p className="mx-auto mediumGreenText">
              A one-stop application for Indian farmers offers weather updates, crop information, market prices, and more to improve farming practices and livelihoods.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4" >
          
          <div className="col-lg-4 col-md-6 mb-3  " style={{height:"300px"}}>
          <Link to="/govschemes/home" style={{ textDecoration: 'none' }}> 
            <div className="service cardGrid" >
              <img src={schmelogo} alt="abc" />
              <h5>Government Scheme </h5>
              <p className=' lightGreenText'>
              Updates on government agricultural schemes and subsidies.
              </p>
            </div>
            </Link>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-3 " style={{height:"300px"}}>
          <Link to={url} style={{ textDecoration: 'none' }}> 
            <div className="service cardGrid">
              <img src={logo} alt="" />
              <h5>Ecommerce</h5>
              <p className=' lightGreenText'>
              E-commerce delivery for a seamless online shopping experience..
              </p>
            </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 mb-3 " style={{height:"300px"}}>
          <Link to="/apmc/home" style={{ textDecoration: 'none' }}> 
            <div className="service cardGrid">
              <img src={product} alt="" />
              <h5>APMC Market </h5>
              <p className=' lightGreenText'>
              Access to local and national agricultural market prices.
              </p>
            </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 mb-3 " style={{height:"300px"}}>
          <Link to="/weather/home" style={{ textDecoration: 'none' }}> 
            <div className="service cardGrid">
              <img src={weather} alt="" />
              <h5>Weather Updates</h5>
              <p className=' lightGreenText'>
              Real-time weather Information for informed decision-making.
              </p>
            </div >
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 mb-3 " style={{height:"300px" }}>
          {
          localStorage.getItem("access_token")?(
          <Link to="/community/home" style={{ textDecoration: 'none' }}> 
            <div className="service cardGrid">
              <img src={menlogo} alt="" />
              <h5>Community Support</h5>
              <p className=' lightGreenText'>
              Community support for farmers to connect, share experiences, and seek expert advice.
              </p>
            </div>
            </Link>):(<Link to="/" style={{ textDecoration: 'none' }}> 
            <div className="service cardGrid">
              <img src={menlogo} alt="" />
              <h5>Community Support</h5>
              <p className=' lightGreenText'>
              Community support for farmers to connect, share experiences, and seek expert advice.
              </p>
            </div>
            </Link>) }
          </div>
          <div className="col-lg-4 col-md-6 mb-3 " style={{height:"300px"}}>
          <Link to="/articals/home" style={{ textDecoration: 'none' }}> 
            <div className="service cardGrid " >
              <img src={men} alt="" />
              <h5>Informative articles</h5>
              <p className=' lightGreenText'>
              Informative articles covering a wide range of agricultural topics for knowledge enhancement.
              </p>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
