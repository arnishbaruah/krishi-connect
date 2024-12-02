import React from 'react'

// import Gov_Articles from "../featurePages/articles/Gov_Articles";
import { BrowserRouter, Routes, Route , useLocation } from "react-router-dom";
import GovHome from './featurePages/govSchems/GovHome'
import AddSchemes from './featurePages/govSchems/AddSchemes'
import HomePage from './pages/HomePage';
import WeatherIndex from "./featurePages/weatherAPI/WeatherIndex";
import Footer from "./components/Footer";


import './css/variable.css';
import ApmcHomePage from './featurePages/apmc/ApmcHomePage';
import AriticalHome from './featurePages/articles/AriticalHome';
import ArticalsDescription from './featurePages/articles/ArticalsDescription';
import CommunityHomePage from './featurePages/communitySupport/CommunityHomePage';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
   
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
    <BrowserRouter>
    
    <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/govschemes/home" element={ <GovHome/>} />
      <Route path="/govschemes/addSchemes" element={ <AddSchemes/>} />
      <Route path="/weather/home" element={<WeatherIndex />} />
      <Route path="/apmc/home" element={<ApmcHomePage/>} />
      <Route path="/articals/home" element={<AriticalHome/>} />
      <Route path="/community/home" element={<CommunityHomePage/>} />
      <Route path="/articals/articalsdescription/:id" element={<ArticalsDescription />}/>


        </Routes>
        <Footer/>
       </BrowserRouter>
       
    <div>
     
    
    </div>
    
    </>
  )
}




// src/components/FileUpload.js

// import React, { useState } from 'react';
// import axios from 'axios';

// const FileUpload = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleFileUpload = async () => {
//     if (file) {
//       const formData = new FormData();
//       formData.append('file', file);

//       try {
//         await axios.post('http://localhost:8800/api/upload', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         console.log('File uploaded successfully');
//       } catch (error) {
//         console.error('Error uploading file:', error);
//       }
//     } else {
//       console.error('No file selected');
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleFileUpload}>Upload File</button>
//     </div>
//   );
// };

// export default FileUpload;
