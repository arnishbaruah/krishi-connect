import React from 'react'
import farmer2 from '../../asset/farmer1.png'
import farmer3 from '../../asset/farmer5.png'
import farmer1 from '../../asset/farmer0.png'
import { Link } from "react-scroll";

export default function Caraousal() {
  return (
   <>
   <div id="carouselExampleIndicators" class="carousel slide lightGreenbg" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div className="row">
            <div className="col-md-6 p-5 text-center leftContainer d-flex flex-column align-items-center justify-content-center " style={{height:"500px"}}>
             <h4 className='p-2 darkGreenText'> "Nurturing India's Growth, One Crop at a Time." </h4>
             <span className='p-2 '> 
             "The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings."
             </span>
             <div className="d-flex p-1 mt-2 ">
             <button className='btn darkGreenbg mx-3' style={{color:"white"}}>Learn More.. </button>
             <Link className=""  to="services" smooth={true} duration={500}>
             <button className='btn darkGreenbg' style={{color:"white"}}>Go to Services</button>
 </Link>
             </div>
            </div>
            <div className="col-md-6">
            <img class="d-block w-100" src={farmer2} alt="First slide" />
            </div>
        </div>
    </div>
    <div class="carousel-item">
    <div className="row">
            <div className="col-md-6 p-5 text-center leftContainer d-flex flex-column align-items-center justify-content-center " style={{height:"500px"}}>
             <h4 className='p-2 darkGreenText'> "Farming is a profession of hope." </h4>
             <span className='p-2 '> 
             "Agriculture is the most healthful, most useful, and most noble employment of man."
             </span>
             <div className="d-flex p-1 mt-2 ">
             <button className='btn darkGreenbg mx-3' style={{color:"white"}}>Learn More.. </button>
             <Link className=""  to="services" smooth={true} duration={500}>
             <button className='btn darkGreenbg' style={{color:"white"}}>Go to Services</button>
 </Link>
             </div>
            </div>
            <div className="col-md-6 mt-5">
            <img class="d-block mt-4" src={farmer3} alt="Second slide" />
            </div>
        </div>
      {/* <img class="d-block w-100" src="..." alt="Second slide" /> */}
    </div>
    <div class="carousel-item">
    <div className="row">
            <div className="col-md-6 p-5 text-center leftContainer d-flex flex-column align-items-center justify-content-center " style={{height:"500px"}}>
             <h4 className='p-2 darkGreenText'> "The glory of farming is that it has the power to take the ordinary and turn it into something extraordinary." </h4>
             <span className='p-2 '> 
             "Agriculture is the most healthful, most useful, and most noble employment of man."
             </span>
             <div className="d-flex p-1 mt-2 ">
             <button className='btn darkGreenbg mx-3' style={{color:"white"}}>Learn More.. </button>
             <Link className=""  to="services" smooth={true} duration={500}>
             <button className='btn darkGreenbg' style={{color:"white"}}>Go to Services</button>
 </Link>
             </div>
            </div>
            <div className="col-md-6 mt-4">
            <img class="d-block mt-4" src={farmer1} alt="Third slide" />
            </div>
        </div>
      {/* <img class="d-block w-100" src="..." alt="Third slide" /> */}
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
   </>
  )
}
