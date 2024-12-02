
import React from "react";
import { Link } from "react-scroll";
import { useUserContext } from '../context/UserContext';

import { useState , useEffect } from "react";
import axios from "axios";
import { Link as RouterLink , useNavigate } from "react-router-dom";
import OtpVerification from './OtpVerification'
import '../css/NavigationBar.css'
const NavigationBar = () => {
  const navigate = useNavigate();
// State to store form data
const { details ,setDetails } = useUserContext();
const { setUserContext } = useUserContext();
const [formData, setFormData] = useState({
  fullname: "",
  email: "",
  password: "",
  role:"",
  phoneno:"",
  city : "",

});
const [loading, setLoading] = useState(false);
const [Resdata, RessetData] = useState("");
// const [login, setlogin] = useState(false);
// // to verify authentication complete
const [auth, setauth] = useState(false);
useEffect(()=>{
  if (localStorage.getItem("access_token")) {
    setLoading(true)
    // Navigate("/");
    setauth(true);
    setLoading(false);

  }
  
},[details])

// to run loading component

  // Extracting form data from the state
  // const { fullname, email, password, role, phoneno , city } = formData;

  // Handler function to update form data when input fields change
  // const onChangeHandler = (event) => {
  //   const { name, value } = event.target;
  //   console.log(name , value);
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  

  //   }));
  // };

  // const onRegister = async (event) => {
  //   event.preventDefault();
  //   // setLoading(true);
  
  //   try {
  //     // send data to backend and store it in data 
  //     const data = await axios.post(
  //       "http://localhost:8800/api/register",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",  // no need to specify header
  //         },
  //       }
  //     );
  //     // Redirect to home page after successful registration
  //     if (data) {
  //       // setLoading(false);
  //       // if user registered but verification pending then redirect user to verification page
  //       if (data.data.userStatus === "PENDING") {
  //         alert(data.data.message);
  //         // navigate(`/govschemes/home/${email}`)
          
  //         openVerificationModel();
  //       }
  //     }
  //   } catch (error) {
      
  //     // Handle registration error
  //     // setLoading(false);
  //     // if (error.response && error.response.status === 400) {
  //     //   //user exit and verified then give aler and redirect to log page
  //     //   alert(error.response.data.message);
  //     //   localStorage.removeItem("access_token"); // remove value of local storage i.e similer to logout
  //     //   window.location.assign(`/login`); //redirect
  //     // } else {
  //     //   console.error(error);
  //     //   // Handle other errors (if needed)
  //     // }
  //   }
  // };
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // Function to close the modal

  // const closeModal = (data) => {
   
  //   setIsModalOpen(false);
  // };

  // Your submit data function
  // const openVerificationModel = async () => {
  //   // Perform your data submission logic here

  //   // After data submission, open the modal
  //   openModal();
  // }; 

  // to set error if any eeror occurs
  const [error, setError] = useState('');


  // const GetUser = async () => {
  //   // set loading true
  //   setLoading(true);
  //   try {
  //     const response = await axios.get("http://localhost:8800/api", {
  //       headers: {
  //         Authorization: `${localStorage.getItem("access_token")}`,
  //       },
  //     });
  //     console.log("data in navbar");
  //     RessetData(response.data);
      
  //     setUserContext(response.data);
  //     //  set loading false
  //     setLoading(false);
  //     // set authentication complete
  //     setauth(true);
  //   } catch (e) {
  //     console.log(e);
  //     setLoading(false);
  //   }
  // };

  // logout 
  const handleLogout = () => {
    // Clear the access_token from localStorage when logging out
    setLoading(true);
    localStorage.removeItem("access_token");
    setDetails(null)
    // Redirect the user to the login page or home page after logout
    // You can add your own redirect logic based on your routes
   
    setauth(false);
    setTimeout(() => {
      setLoading(false);
    }, 300);
   
  };

  // to render Component
  // useEffect(
  //   (req, res) => {
  //     // if token is not then rediret it to home page
  //     if (!localStorage.getItem("access_token")) {
  //       // Navigate("/");
  //     } else {
  //       GetUser();
  //     }
  //   },
  //   [login] // add dependency when login set then online render componenet again and again
  // );
  // Send Login data To backend 
  // const onLogin = async (event) => {
  //   event.preventDefault();
  //   setLoading(true);

  //   try {
  //     const data = await axios.post("http://localhost:8800/api/login", formData);

  //     if (data.status === 200) {
  //       setLoading(false);
  //       setlogin(true);
  //       setauth(true);
  //       RessetData(data.data);
  //       const user = data.data;
  //       localStorage.setItem('access_token', user.token);
  //       setUserContext(data.data.user);
       
  //     }
  //   } catch (error) {
  //     // Handle login error
  //     if (error.response && error.response.status === 400) {
  //       // setLoading(false);
  //       setLoading(false);
  //     alert("LogIn Failed")
  //       console.log(error)
  //       localStorage.removeItem('access_token');
  //       setError(error.response.data.message); // Set the error message received from the server
  //     } else {
  //       console.error(error);
  //       setError('An error occurred during login. Please try again.');
  //     }
  //   }
  // };

  const onLoginAlert = ()=>{
    alert("Now You Can Login Here")
    navigate('/')
  }
 

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <RouterLink
            to="/"
            className="navbar-brand navLink"
            style={{ color: "#1b5749" }}
            smooth={true}
            duration={500}
          >
            <span style={{ color: "Green" }}>Krishi</span>Connect.
          </RouterLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <RouterLink className="navLink" to="/">
                  Home
                </RouterLink>
              </li>
              <li className="nav-item">
                <RouterLink
                  className="navLink"
                  to="/"
                  smooth={true}
                  duration={500}
                >
                  Services
                </RouterLink>
              </li>
              <li className="nav-item">
                <RouterLink
                  className="navLink"
                  to="/"
                  smooth={true}
                  duration={500}
                >
                  About
                </RouterLink>
              </li>
              <li className="nav-item">
                <RouterLink
                  className="navLink"
                  to="/"
                  smooth={true}
                  duration={500}
                >
                  Contact Us
                </RouterLink>
              </li>
            </ul>
          </div>
          {/* Button trigger modal  */}
          {/* model */}
          {/* during loging set loading   */}
          {/* {loading ? (
            <div className="spinner-border text-success" role="status">
              <span className="sr-only"></span>
            </div>
          ) :  */}
          {
          auth  ? ( // if  authentication done thenonly show user name hide login button
            <>
              <div className="d-flex justify-content-center">
                <div className="tooltip-container">
                  <button
                    type="button"
                    className="btn btn-outline-success shadow-none "
                  >
                    {details.data.fullname}
                  </button>
                  <button
                    className="btn btn-danger tooltip-text"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <button
              className="btn darkGreenbg px-2 py-1"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              style={{ color: "white" }} onClick={onLoginAlert}
            >
              LogIn
            </button>
          )}
        </div>
      </nav>

{/* LogIn model  */}
{/* <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog " role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLongTitle">Farmer Registration</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <div className="mb-3">
                  <label className="form-label mediumGreenText">Email address</label>
                  <input
                    onChange={onChangeHandler}
                    value={email}
                    type="email"
                    name="email"
                    className="form-control shadow-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label mediumGreenText">Password</label>
                  <input
                    onChange={onChangeHandler}
                    value={password}
                    type="password"
                    name="password"
                    className="form-control shadow-none"
                  />
                </div>

                <div className="d-flex align-items-center justify-content-between mb-2">
                  <button
                    onClick={(e) => onLogin(e)}
                    className="btn darkGreenbg SHADOW-NONE w-100" data-dismiss="modal"
                  >
                    Login
                  </button>
                 
                </div>
              </div>
              <div class="modal-footer d-flex justify-content-between">
    <div style={{display : "block"}}>
        <h6 className="mediumGreenText">Not Registered Yet ? Click on Register</h6>
    </div>
    <div>
        <button type="button" class="btn btn-outline-success w-100"  data-toggle="modal" data-target="#RegisterModel" data-dismiss="modal" >Register</button>
    </div>
    </div>
    
  </div>
</div>
</div> */}

{/* Register Model  */}
{/* <div class="modal fade" id="RegisterModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-scrollable" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLongTitle">Farmer Registration</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      
    <div className="mb-3">
                  <label className="form-label mediumGreenText">Full Name</label>
                  <input
                    onChange={onChangeHandler}
                    value={fullname}
                    type="email"
                    name="fullname"
                    className="form-control shadow-none"
                  />
                </div>
    <div className="mb-3">
                  <label className="form-label mediumGreenText">Email address</label>
                  <input
                    onChange={onChangeHandler}
                    value={email}
                    type="email"
                    name="email"
                    className="form-control shadow-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label mediumGreenText">Password</label>
                  <input
                    onChange={onChangeHandler}
                    value={password}
                    type="password"
                    name="password"
                    className="form-control shadow-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label mediumGreenText">Phone No</label>
                  <input
                    onChange={onChangeHandler}
                    value={phoneno}
                    type="text"
                    name="phoneno"
                    className="form-control shadow-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label mediumGreenText">City</label>
                  <input
                    onChange={onChangeHandler}
                    value={city}
                    type="text"
                    name="city"
                    className="form-control shadow-none"
                  />
                </div>
                <div className="">
                  <label className="form-label mediumGreenText">Role</label>
                  <div class="dropdown-container w-50">
            <select class="custom-select form-control shadow-none" name="role" onChange={onChangeHandler}>
              <option value="none" >
               Type
              </option>
              <option value="fbs">Farmer/Buyer/Seller</option>
              <option value="expert">Agriculture Expert</option>
              <option value="admin">Admin</option>

            </select>
          </div>
                </div>

                <div className="d-flex align-items-center justify-content-between mb-2">
                  <button
                    onClick={(e) => onRegister(e)}
                    className="btn darkGreenbg SHADOW-NONE w-100" data-dismiss="modal"
                  >
                    Register
                  </button>
                 
                </div>
              </div>
              <div class="modal-footer d-flex justify-content-between">
    <div style={{display : "block"}}>
        <h6 className="mediumGreenText">Allready Registered ! Click on LogIn</h6>
    </div>
    <div>
        <button type="button" class="btn btn-outline-success w-100" data-toggle="modal" data-target="#exampleModalCenter" data-dismiss="modal">LogIn</button>
    </div>
    </div>
  </div>
</div>
</div>
     */}
   
{/* verification model  */}
{/* {isModalOpen && (
<OtpVerification email = {email}  onChildData = {closeModal} />
)} */}


    </>
    
  );
};

export default NavigationBar;
