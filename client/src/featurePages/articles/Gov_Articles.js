import React from 'react'
import bgImg from '../../Assets/ArticlesCategory/bg1.jpg';
import img1 from '../../Assets/ArticlesCategory/Crop1.png';
import img2 from '../../Assets/ArticlesCategory/Soil1.png';
import img3 from '../../Assets/ArticlesCategory/Pestiside1.png';
import img4 from '../../Assets/ArticlesCategory/Weather1.png';
import img5 from '../../Assets/ArticlesCategory/Machinary1.png';
import img6 from '../../Assets/ArticlesCategory/Irrigation1.png';

import 'bootstrap/dist/css/bootstrap.css';
import {Navbar} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

function Gov_Articles () {
    const navigate = useNavigate()
  return (

<div>
<div className='Background-Image' style={{backgroundImage:`url(${bgImg})`, backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '500px',}}>
    {/* <img style={{width:"100rem", height:"40rem" }} src={bgImg}  /> */}
        <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light">
      {/* <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container> */}
    </Navbar>
    <div className="title" style={{color:"white", margin:"6rem 5rem 8rem"}}>
        <h1 style={{fontSize:"5rem"}}>AgriInsight Hub</h1>
    <h3>Where Farmers Find Answers to Growth</h3>
    </div> 
     <div>
<div class="input-group" style={{width:"38rem", margin:" -4rem 30rem"}}>
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-success">search</button>
</div>
    </div>
</div>
<div className="Categories" style={{marginTop:"2rem"}}>
        <h1 style={{textAlign:"center", color:"#435D3C", fontSize:"3rem",fontWeight:"bold", textDecoration:"underline"}}>Categories</h1>
        <div className="box-container" style={{display:"flex", background:"#f8f8f8", marginTop:"2rem"}}>
       {/* <div style={{padding:'0 1rem'}}><button class="btn btn-success btn-block " aria-hidden="true"><img src={img1}  width="100"/></button>{' '}</div>
       <div style={{padding:'0 1rem'}}><button class="btn btn-success btn-block " style={{border:"none",background:"#E9FBB7"}}><img src={img2} width="100" /></button>{' '}</div> 
       <div style={{padding:'0 1rem'}}><button class="btn btn-success btn-block " ><img src={img3}  width="100" height="100"/></button>{' '}</div> 
       <div style={{padding:'0 1rem'}}> <button class="btn btn-success btn-block"style={{border:"none",background:"#E9FBB7"}}><img src={img4} width="120" /></button>{' '}</div>
       <div style={{padding:'0 1rem'}}> <button class="btn btn-success btn-block" ><img src={img5}  width="100"/></button>{' '}</div>
       <div style={{padding:'0 1rem'}}> <button class="btn btn-success btn-block"style={{border:"none",background:"#E9FBB7"}}><img src={img6} width="100" /></button>{' '}</div> */}
        {/* <button class="btn btn-success" style={{border:"none",background:"061712"}}><img src={img5}  width="60"/></button> */}
    <div style={{boxShadow:"0 8px 2px 0",padding:"0 1.5rem"}}className="box">
        <button style={{marginTop:"3rem"}}class="btn btn-success" onClick={() => navigate('Category_1')}>
               <img src={img1} width="200" display=""/>
                <h3>Crop Cultivation</h3></button>
        </div>
    <div style={{boxShadow:"0 8px 2px 0", padding:"0 1.5rem"}} className="box">
        <button class="btn btn-success" style={{border:"none",background:"#E9FBB7", marginTop:"3rem"}}>
          <img src={img2} width="200" height="200" />
          <h3 style={{color:"black"}}>Soil Health and Fertility</h3>
        </button>     
   </div>
    <div style={{boxShadow:"0 8px 2px 0", padding:"0 1.5rem"}}className="box">
        <button style={{marginTop:"3rem"}}class="btn btn-success">
                <img src={img3} width="200" height="200" />
                <h3>Weed and Pest Control</h3></button>
        </div>
    <div style={{boxShadow:"0 8px 2px 0", padding:"0 1.5rem"}} className="box">
        <button class="btn btn-success"  style={{border:"none",background:"#E9FBB7", marginTop:"3rem"}}>
          <img src={img4} width="200" height="200" />
          <h3 style={{color:"black"}}>Drought and Flood </h3>
        </button>     
   </div>
       <div style={{boxShadow:"0 8px 2px 0", padding:"0 1.5rem"}}className="box">
        <button style={{marginTop:"3rem"}}class="btn btn-success">
                <img src={img5} width="200" height="200" />
                <h3>Farm Machinery</h3></button>
        </div>
    <div style={{boxShadow:"0 8px 2px 0", padding:"0 1.5rem"}} className="box">
        <button class="btn btn-success" style={{border:"none",background:"#E9FBB7", marginTop:"3rem"}}>
          <img src={img6} width="200" height="200" />
          <h3 style={{color:"black"}}>Irrigation and Management</h3>
        </button>     
   </div>
   
    </div>
    </div>
</div>

  );
}

export default Gov_Articles;


