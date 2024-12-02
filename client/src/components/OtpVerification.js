// this file include otp verification model with their logic 
import React from 'react'
import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
export default function OtpVerification({email , onChildData}) {
    
    // set values of otp and error
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [childValue, setChildValue] = useState(true);

console.log(email);
      // function to set value of otp
  const handleOtpChange = (e) => {
  
    setOtp(e.target.value);
    
  };

  // to varify otp
  const handleVerifyClick = async () => {
    try {
      //verify otp post request
      const data = await axios.post("https://krushi-connect-backend.onrender.com/api/verifyOtp", {
        otp,
        email,
      });

      if (data.status === 200) {
        setChildValue(false);
        onChildData(childValue);
        const user = data.data;
        alert("Otp Validation Successfull. Now you can LogIn");
        
      }
    } catch (error) {
      // Handle login error
      if (error.response && error.response.status === 400) {
        setError("Invalid Otp"); // Set the error message received from the server
      } else {
        console.error(error);
        setError(
          "An error occurred during Otp Verification . Please try again."
        );
      }
    }
  };
  
  return (
    <div className="d-flex flex-column align-items-center">
    <small className="text-danger" style={{marginTop:"85px"}}>OTP verification is needed for Login</small>
    <button type="button" className="btn btn-success mt-3" data-toggle="modal" data-target="#exampleModal">
      Please Verify OTP
    </button>
    <h4 className='text-danger mt-3'>{error}</h4>
       <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title darkGreenText" id="exampleModalLabel">OTP Verification</h5>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>
             <div className="modal-body">
               {/* Modal content */}
   
               <input type="text" className="form-control shadow-none darkGreenText " onChange={handleOtpChange} placeholder="Enter the 6-digit OTP sent to your email"   maxLength="6"/>
             </div>
             <div className="modal-footer">
               <button type="button" className="btn btn-success" onClick={handleVerifyClick}  data-dismiss="modal" aria-label="Close" >Verify otp</button>
             </div>
           </div>
         </div>
       </div>
     </div>
  )
}
