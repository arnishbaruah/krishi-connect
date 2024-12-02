import React, { useState } from 'react';
 // Import Bootstrap CSS
import first from '../first.jpg';

function App() {
  const [activeCircle, setActiveCircle] = useState(null);

  const circles = [
    { id: 1, text: 'Government Yojana Awareness', info: 'For more click here' },
    { id: 2, text: 'E-commerce Platform', info: 'For more click here' },
    { id: 3, text: 'Daily APMC Price Updates', info: 'For more click here ' },
    { id: 4, text: 'Community Network', info: 'For more click here' },
    { id: 5, text: 'Informative Articles', info: 'For more click here ' }, // Add this
    { id: 6, text: 'Weather Forecasting', info: 'For more click here' }, // Add this
  ];

  const handleClick = (circleId) => {
    if (activeCircle === circleId) {
      setActiveCircle(null);
    } else {
      setActiveCircle(circleId);
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            {circles.map((circle) => (
              <div
                key={circle.id}
                className={`col-6 w-100 circle p-3 m-1 ${
                  activeCircle === circle.id ? 'bg-success' : 'bg-primary'
                }`}
                onClick={() => handleClick(circle.id)}
              >
                <p className="text-white">{circle.text}</p>
                {activeCircle === circle.id && (
                  <div className="info mt-3 p-3 bg-light border">
                    {circle.info}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          {/* Right-side image */}
          <img
            src={first}
            alt="Right Side Image"
            className="img-fluid h-100 w-100"
          />
        </div>
      </div>
    </div>
  );
}

export default App;









































































// import React, { useState } from 'react';
// import './platform.css'
// function HeroSlider() {
//   // Define a state variable to keep track of the clicked button
//   const [activeButton,
//     setActiveButton] = useState(null);

//   // Function to handle button click
//   const handleButtonClick = (buttonIndex) => {
//     // Update the active button when clicked
//     setActiveButton(buttonIndex);
//   }

//     ;

//   // Function to determine the button's class based on whether it's active
//   const getButtonClass = (buttonIndex) => {
//     if (activeButton === buttonIndex) {
//       return 'btn btn-success btn-lg w-100 mb-3';
//     }

//     else {
//       return 'btn btn-primary btn-lg w-100 mb-3';
//     }
//   }

//     ;

//   return (
//     <>
//     <div className="hero-slider-container" >
//       <div className="owl-carousel owl-theme hero-slider" >
//         <div className="slide slide2" >
//           <div className="container" >
//           <div className="row">
//         <div className="col-12 col-lg-10 offset-lg-1 text-white">
//           <h6 className="text-white text-uppercase">Launch your career on Future-Force</h6>
//           <h1 className="display-3 my-4">The #1 way college students <br />get hired</h1>
//           {/* <a href="#" className="btn btn-brand">Get Started</a>
//           <a href="#" className="btn btn-outline-light ms-3">Login</a> */}
//         </div>
//       </div>
  
            
//             <div className="row" >
//               <div className="col-md-12" > <button className={
//                 getButtonClass(1)
//               }

//                 onClick={
//                   () => handleButtonClick(1)
//                 }

//               > Button 1 <span className="bi bi-arrow-right" ></span> </button> <button className={
//                 getButtonClass(2)
//               }

//                 onClick={
//                   () => handleButtonClick(2)
//                 }

//               > Button 2 <span className="bi bi-arrow-right" ></span> </button> <button className={
//                 getButtonClass(3)
//               }

//                 onClick={
//                   () => handleButtonClick(3)
//                 }

//               > Button 3 <span className="bi bi-arrow-right" ></span> </button> <button className={
//                 getButtonClass(4)
//               }

//                 onClick={
//                   () => handleButtonClick(4)
//                 }

//               > Button 4 <span className="bi bi-arrow-right" ></span> </button> <button className={
//                 getButtonClass(5)
//               }

//                 onClick={
//                   () => handleButtonClick(5)
//                 }

//               > Button 5 <span className="bi bi-arrow-right" ></span> </button> <button className={
//                 getButtonClass(6)
//               }

//                 onClick={
//                   () => handleButtonClick(6)
//                 }

//               > Button 6 <span className="bi bi-arrow-right" ></span> </button>
//               </div>
//             </div>
            
//           </div>
//         </div>
//       </div>

//     </div>
//     <section id="about">
//       <div className="container container1">
//         <div className="row justify-content-center">
//           <div className="col-lg-5 py-5">
//             <div className="row">
//               <div className="col-12">
//                 <div className="info-box">
//                   <img src="img/pro2.png" alt="" />
//                   <div className="ms-4">
//                     <h5>Amisha, UC Berkeley</h5>
//                     <p>
//                       "A recruiter at eBay reached out to me directly and
//                       encouraged me to apply. Applying was easy and I knew
//                       exactly what they were looking for."
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 mt-4">
//                 <div className="info-box">
//                   <img src="img/pro1.png" alt="" />
//                   <div className="ms-4">
//                     <h5>James, Boston University</h5>
//                     <p>
//                       "Within one week of creating my profile—one week!—I was
//                       invited to interview for Dell Technologies. And I got a
//                       job!"
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 mt-4">
//                 <div className="info-box">
//                   <img src="img/pro3.png" alt="" />
//                   <div className="ms-4">
//                     <h5>Sam, UC Irvine</h5>
//                     <p>
//                       "One day I got an email in my inbox saying you have a
//                       message from Microsoft. It was an invitation to
//                       interview!"
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-5">
//             <img src="img/1223.jpg" alt="" />
//           </div>
//         </div>
//       </div>
//     </section>
//     </>
//     );
// }

// export default HeroSlider;