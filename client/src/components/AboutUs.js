import React from 'react'
import "../css/weather.css";
import farmar1 from "../asset/farmer1.jpeg";
import farmer2 from '../asset/farmer2.png'


export default function AboutUs() {
  return (
    <>
    <div className="container mt-5 " id='about' >
    <div className="weatherContainer  mt-5 mb-5"  >
          {/* row  */}
          <div className="row main darkGreenbg d-flex justify-content-center mt-5"  >
            {/* for left div  */}
            <div className="col-md-4 leftdiv  mt-5 mb-5">
              <div className="content border  bg-white  p-3 m-0  ">
              
               
                  <img className='w-100' src={farmar1} alt="" />
                
               
              </div>
            </div>

            {/* for right div  */}

            <div className="col-md-6 shadow-sm mb-5 bg-white rounded  mt-5 mb-5 ">
                <div className="info m-2 mr-4">
              <h3 className='p-2 darkGreenText'>Who We Are</h3>
             <p className=' p-2 text-justify  mediumGreenText'> We are a passionate team focused on revolutionizing the way Indian farmers access vital resources. Our goal is to create the One-Stop Application for Indian Farmers, a user-friendly web platform that combines crucial agricultural features.</p>
               <button className=' btn darkGreenbg ' style={{color:"white" , fontWeight: "500"}}>Learn More</button>
                </div>
                <div className="row d-flex justify-content-center text-center mt-4 p-2">
                
  

                <div className="col-md-3"><img className='img-fluid' src={farmer2} style={{height:"41px" , width:"55px"}} alt="" /> <br /> <span className='mediumGreenText'> 100K </span> <br /> <span className='mediumGreenText'>Farmer</span> </div>
                    <div className="col-md-3"><img className='img-fluid' src={farmer2} style={{height:"41px" , width:"41px"}} alt="" /> <br /> <span className='mediumGreenText'> 100K </span> <br /> <span className='mediumGreenText'>Farmer</span> </div>
                    <div className="col-md-3"><img className='img-fluid' src={farmer2} style={{height:"41px" , width:"41px"}} alt="" /> <br /> <span className='mediumGreenText'> 100K </span> <br /> <span className='mediumGreenText'>Farmer</span> </div>
                </div>

             
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
