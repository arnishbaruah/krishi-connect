import React, { useEffect, useState } from 'react'
import farmer1 from "../../asset/farmer4.jpg";
import { useParams } from 'react-router-dom';
import { getDatawithId } from '../../api/utilityAPI';
export default function ArticalsDescription() {
  const [loading, setLoading] = useState(true);

    const [data , setData] = useState([]);
    const { id } = useParams();
    console.log(id);
   const getDatainfo =async(id) =>{
    const res =  await getDatawithId(id);
    console.log(res.data.data);
    setData(res.data.data)
    setLoading(false)
    };
    console.log("hii")
    console.log(data)
    
    useEffect (()=>{
        getDatainfo(id);
    },[])
  return (
   <>
   <div className="container d-flex justify-content-center lightGreenbg " >
    
   {loading && (
     <div className="spinner-border text-success mb-5" style={{marginTop:"150px"}} role="status">
              <span className="sr-only"></span>
            </div>
          ) }
          </div>

{data.map((data) => (
  
   <div className="container  lightGreenbg mb-5 " style={{marginTop:"86px"}}>
        <div className="row justify-content-center darkGreenbg p-3 text-center" > 
        <h4 className='text-center text-white'> " {data.title} "</h4>
        </div>

        <div className="row mt-3 justify-content-center">
          <div className="col-md-10 " style={{background:"white"}}>
          <p className='mediumGreenText text-md'>{data.thumbnaiText}</p>
          </div>
        </div>

        <div className="row mt-3 justify-content-center ">
          <div className="col-md-4 ">
            <img  src={`/${data.filename}`}  style={{height:"250px"}}alt="" srcset="" />
          </div>

          <div className="col-md-7 mx-2 mt-2 bg-white bordar mediumGreenText "> <p>{data.paragraphOne}</p> </div>
        </div>

        <div className="row mt-3 justify-content-center ">
         
          <div className="col-md-7  mb-2 mx-2 darkGreenbg bordar bordar-rounded ">
           <p>{data.paragraphTwo}</p>
          </div>
          <div className="col-md-4 ">
            <img  src={`/${data.filename}`} style={{height:"250px"}} alt="" srcset="" />
          </div>

        </div>
        <div className="row mt-3 justify-content-center">
          <div className="col-md-9  mb-3 " style={{background:"white"}}>
          <p className='mediumGreenText' >{data.paragraphTwo}</p>
          </div>
        </div>
        <div className="row justify-content-center darkGreenbg " > 
        <p className='text-white'> " Author :-Ganesh Golhar "</p>
        </div>
      </div> ))}
   </>
  )
}
