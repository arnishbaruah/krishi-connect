import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  // Sample data (you can replace it with real data)
  
  return (
    <>
    <footer className="text-center text-lg-start  ">
      {/* <!-- Section: Social media --> */}
    
      {/* <!-- Section: Social media --> */}

      {/* <!-- Section: Links  --> */}
      <section className="darkGreenbg text-white">
        <div className=" text-center text-white text-md-start mt-2">
          {/* <!-- Grid row --> */}
          <div className="row mt-1">
            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
              {/* <!-- Content --> */}
              <h6 className="text-uppercase fw-bold text-white">TechFusion Freelancers</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" />
              <p className='text-justify'>
                A collective of ambitious BTech students turned freelancers,
                TechFusion, is breathing life into innovative applications.
                With a fusion of skills, dedication, and creativity, we're
                building applications that redefine possibilities and empower
                businesses. 
              </p>
            </div>
            {/* <!-- Grid column -->

        <!-- Grid column --> */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2 text-justify">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold text-white">Products</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <Link to="/" className="text-white">
                  BIThub
                </Link>
              </p>
              <p>
                <Link to="/" className="text-white">
                  Rent It Out
                </Link>
              </p>
              <p>
                <Link to="/" className="text-white">
                Service Provider
                </Link>
              </p>
              <p>
                <Link to="/" className="text-white">
                  Leave Management System
                </Link>
              </p>
            </div>
            {/* <!-- Grid column -->

        <!-- Grid column --> */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2 text-justify">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold text-white">Useful links</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <Link to="https://www.linkedin.com/in/ganesh-golhar-827915211/" className="text-white">
                  Ganesh Golhar - Linkdin
                </Link>
              </p>
              <p>
              <Link to="https://github.com/ganesh29082002" className="text-white">
                Ganesh Golhar - GitHub
                </Link>
              </p>
              <p>
              <Link to="https://www.linkedin.com/in/mahesh-rohane-5986b6245/" className="text-white">

                Mahesh Rohane - Linkdin
                </Link>
              </p>
              <p>
              <Link to="https://github.com/Mahesh77r" className="text-white">
                Mahesh Rohane - GitHub
                </Link>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2 text-justify">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold text-white">Contact</h6>   <hr className="mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <i className="fas fa-home mr-3"></i> Wardha, Maharastra 442001, IN
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> techfusion@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 9119484622
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> + 78454621006
              </p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>
        <div className="text-center p-3">
        © 2020 Copyright:
        <Link className="text-white" to="https://bitHub.com/">
          BitHub
        </Link>
      </div>
      </section>
      {/* <!-- Section: Links  -->

  <!-- Copyright --> */}
      
      {/* <!-- Copyright --> */}
    </footer>
    {/* <!-- Footer --> */}
  </>
  );
};

export default Footer;
