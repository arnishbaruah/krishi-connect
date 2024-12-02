

import React from "react";
import "../../css/GovHome.css";
import axios from 'axios'
import NavigationBar from "../../components/CommonNavigation";
import { useState , useEffect } from "react";
import {useNavigate ,Link } from "react-router-dom";
export default function GovHome() {
    const navigate = useNavigate();
  // State to store form data

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    phoneno: "",
    city: "",
  });
const [schemeData , setSchemedata ] = useState([]);
const [filterRecords, setFilterRecords] = useState([]);

  const getgovschemes = async ()=>{
      const res =  await axios.get("https://krushi-connect-backend.onrender.com/api/getgovschemes")
      console.log(res.data);
      setSchemedata(res.data);
      setFilterRecords(res.data)
  }

  useEffect(() =>{
  getgovschemes()
  },[]);

  const handleInputChange = (event) => {
    const filterText = event.target.value.toLowerCase();
  
    if (filterText === 'all') {
      // If the search query is "all," set the articalData to the original data
      setSchemedata(filterRecords);
    } else {
      // Otherwise, filter the records based on the search query
      const newData = filterRecords.filter(row => 
        row.state.toLowerCase().includes(filterText) || 
        row.type.toLowerCase().includes(filterText) ||
        row.category.toLowerCase().includes(filterText) || 
        (row.details.toLowerCase().includes(filterText) || row.name.toLowerCase().includes(filterText))


      );
  
      setSchemedata(newData);
    }
  }
  return (
    <>
    <NavigationBar/>
      <div className=" mt-5 text-center mainContainer-govScheme " >
        <h2 className="mt-3 p-3 darkGreenText font-weight-bolder">
          Government Scheme Information
        </h2>
                 <button
                  // onClick={(e) => onRegister(e)}
                  onClick={() => navigate('/govschemes/addSchemes')}
                  className="btn darkGreenbg SHADOW-NONE w-20"
                  data-dismiss="modal"
                >
                  Add Schemes
                </button>
     

        {/* filter bar  */}
       
        {/* table for crop suggetion  */}
        <div class="accordion container" id="accordionExample">
        <div className=" filtar-bar w-100 darkGreenbg mt-3  d-flex justify-content-center ">
          <div class="dropdown-container">
            <select class="custom-select  px-1" onChange={handleInputChange}>
              <option value="all" >
                Select State
              </option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div class="dropdown-container">
            <select class="custom-select" onChange={handleInputChange}>
              <option value="all" >
                Government Type
              </option>
              <option value="State Government">State Government</option>
              <option value="Central Government">Central Government</option>
            </select>
          </div>
          <div class="dropdown-container">
            <select class="custom-select" id="categorySelect" onChange={handleInputChange}>
              <option value="all" >
                Scheme Category
              </option>
              <option value="all">All</option>
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
          <div class="dropdown-container">
            <input
              type="text"
              className="custom-select"
              placeholder="&#128269; Search Scheme Here" onChange={handleInputChange}
            />
          </div>
        </div>

          {/* Scheme 1 */}
          {schemeData.map((items, index) => (
  <div className="card p-1 pb-0" key={index}>
    <div className="card-header bg-white" id={`heading${index}`}>
      <h6 className="mb-0 collapsebtn p-0">
        <button
          className="bg-white btn-block text-left collapsed p-1 collapsebtn mediumGreenText"
          type="button"
          data-toggle="collapse"
          data-target={`#collapse${index}`}
          aria-expanded="false"
          aria-controls={`collapse${index}`}
        >
          {items.name}
        </button>
      </h6>
    </div>

    <div
      id={`collapse${index}`}
      className="collapse my-2"
      aria-labelledby={`heading${index}`}
      data-parent="#accordionExample"
    >
      <div className="card-body">{items.details}</div>
      <div>
      <Link to = "https://www.indiansugar.com/PDFS/GOVERNMENT_SCHEMES_FOR_AGRICULTURE__Revised-26.12.2019.pdf">
      <button className="btn darkGreenbg mx-3">More Details</button>
      </Link>
      <Link to = {`${items.link}`}>
      <button className="btn btn-success">Apply Scheme</button>
      </Link>
    </div>
    </div>
   
  </div>
))}


          {/* Scheme 2 */}
          {/* <div className="card p-1 pb-0">
            <div class="card-header bg-white " id="headingOne ">
              <h6 class="mb-0 ">
                <button
                  class="bg-white btn-block text-left collapsed p-1 collapsebtn mediumGreenText"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  PM Kisan Samman Nidhi Yojana
                </button>
              </h6>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                The next central government agriculture scheme that we want to
                list here is PM Kisan Samman Nidhi Yojana. It is a
                government-funded scheme that aims to provide ample income
                support to small and marginal farmers in India.
              </div>
            </div>
          </div> */}

          {/* Scheme 3 */}
          {/* <div className="card p-0 pb-0">
            <div class="card-header bg-white " id="headingOne ">
              <h6 class="mb-0 p-0">
                <button
                  class="bg-white btn-block text-left collapsed p-1 collapsebtn mediumGreenText"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Kisan Credit Card (KCC)
                </button>
              </h6>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                The exclusive focus of this scheme is on providing timely credit
                assistance for basic expenses like buying seeds, fertilizers,
                pesticides, machinery, and other inputs.
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br />
    </>
  );
}
