import React from 'react'
import { useState , useEffect } from "react";

import {useNavigate } from "react-router-dom";
import axios from "axios";
const AddSchemes = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
    name: "",
    details: "",
    state: "",
    type: "",
    category: "",
    link: "",
  });

  
  // Extracting form data from the state
   const { name, details, state, type, category, link } = user;

    const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({...user, [name]: value});  
  };

  const onAddingGovSchemes = async (e) =>{
     e.preventDefault();

     const res = await axios.post(
        "https://krushi-connect-backend.onrender.com/api/addgovschemes",
        user,
        {
          headers: {
            "Content-Type": "application/json", // no need to specify header
          },
          //A common use of JSON is to exchange data to/from a web server. When sending data to a web server, the data has to be a string.
          // Convert a JavaScript object into a string with JSON.stringify().
        //   body: JSON.stringyfy({
        //          name, details, state, type, category, link 
        //   })
        });
        console.log(res);
        
        if (res.status === 200 || !res){
            window.alert(res.data.message);
            console.log("Submission Error");
        }else{
            window.alert("Schemes successfully added");
            console.log("Schemes successfully added");
        }
        // Use history to navigate to a different route
        navigate('/govschemes/home');
  }
  return (
    <>
        <div class="modal-dialog modal-dialog-scrollable" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="schemeModalLongTitle">
                Government Schemes
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="mb-3">
                <label className="form-label mediumGreenText">Name of Scheme</label>
                <input
                  onChange={onChangeHandler}
                  value={name}
                  type="text"
                  name="name"
                  className="form-control shadow-none"
                />
              </div>
              {/* <div className="mb-3">
                <label className="form-label mediumGreenText">
                  Email address
                </label>
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
              </div> */}
              <div className="mb-4">
                <label className="form-label mediumGreenText">Description of Scheme</label>
                <input
                  onChange={onChangeHandler}
                  value={details}
                  type="text"
                  name="details"
                  className="form-control shadow-none"
                />
              </div>
              <div className="mb-4">
                <label className="form-label mediumGreenText">State</label>
                <input
                  onChange={onChangeHandler}
                  value={state}
                  type="text"
                  name="state"
                  className="form-control shadow-none"
                />
              </div>
              <div className="">
                <label className="form-label mediumGreenText">Government Type</label>
                <div class="dropdown-container w-50">
                  <select
                    class="custom-select form-control shadow-none"
                    name="type"
                    onChange={onChangeHandler}
                  >
                    <option value="none">Type</option>
                    <option value="State Government">State Government</option>
                    <option value="Central Government">Central Government</option>
                  </select>
                </div>
              </div>

              <div className="">
                <label className="form-label mediumGreenText">Scheme Category</label>
                <div class="dropdown-container w-50">
                  <select
                    class="custom-select form-control shadow-none"
                    name="category"
                    onChange={onChangeHandler}
                  >
                    <option value="none">All</option>
              <option value="Agricultural Credit">Agricultural Credit</option>
              <option value="Animal Husbandry">Animal Husbandry</option>
              <option value="Agricultural Insurance">
                Agricultural Insurance
              </option>
              <option value="Agricultural Marketing">
                Agricultural Marketing
              </option>
              <option value="Backward class and Minority Welfare">
                Backward class and Minority Welfare
              </option>
              <option value="Education">Education</option>
              <option value="Energy Department">Energy Department</option>
              <option value="Farmers Welfare and Agricultural Development">
                Farmers Welfare and Agricultural Development
              </option>
              <option value="Health">Health</option>
              <option value="Higher Education">Higher Education</option>
              <option value="Horticulture">Horticulture</option>
              <option value="Irrigation">Irrigation</option>
              <option value="Panchayat and Rural Development">
                Panchayat and Rural Development
              </option>
              <option value="Plant Protection">Plant Protection</option>
              <option value="Seeds">Seeds</option>
              <option value="Training and Extension for farmers">
                Training and Extension for farmers
              </option>
              <option value="Urban Administration">Urban Administration</option>
                  </select>
                </div>
              </div>

                <div className="mb-4">
                <label className="form-label mediumGreenText">Link</label>
                <input
                  onChange={onChangeHandler}
                  value={link}
                  type="text"
                  name="link"
                  className="form-control shadow-none"
                />
              </div>

              <div className="d-flex align-items-center justify-content-between mb-2">
                <button
                  onClick={(e) => onAddingGovSchemes(e)}
                  className="btn darkGreenbg SHADOW-NONE w-100"
                  data-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default AddSchemes

