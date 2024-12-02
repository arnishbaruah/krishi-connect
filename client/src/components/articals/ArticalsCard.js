import React, { useState, useEffect } from "react";
import farmer1 from "../../asset/farmer4.jpg";
import "../../css/ArticalsCard.css";
import { Link } from "react-router-dom";
import farmar1 from "../../asset/farmer1.jpeg";




export default function ArticalsCard({ data }) {
  const isDataAvailable = Object.keys(data).length > 0;
  return (
    <>
      {/* card container  */}
      
      {isDataAvailable ? (
      <div class="col mb-3 mt-3 ">
        <div class="card h-100 shadow">
          <img src={`${data.path}`}  class="card-img-top img-fluid" style={{height:"220px"}} alt="..." />
          <div class="card-body mb-0">
            <h5 class="card-title">{data.title}</h5>
            <p class="card-text">
             
             {data.thumbnaiText}
            </p>
          </div>
          <div className="d-flex justify-content-end">
            <Link to = {`/articals/articalsdescription/${data._id}`} >
            <button className="btn btn-success m-2 mt-0 p-1 px-1">
              Read More
            </button>
            </Link>
            
          </div>
          <div class="card-footer">
            <small class="text-muted"> Published on - {(data.createdAt).split('T')[0]}</small>
          </div>
        </div>
      </div> ) : (
        <div className="col mb-3 mt-3">
          <div className="card h-100 shadow">
            <div className="card-body">
              <p className="card-text">No data available.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
