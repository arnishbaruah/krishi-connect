import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from 'react-bootstrap';

function CropCultivation_Article() {
  return (
<div>
    <div className="heading">
         <h1 style={{textAlign:"center", color:"#435D3C", fontSize:"3rem",fontWeight:"bold", textDecoration:"underline"}}>Articles</h1>
    </div>
       <div className="container" style={{marginTop:"2rem"}}>
    <div class="row gy-4">
        {/* card 1 */}
        <div class="col-sm">
            <div class="card h-100">
                  <Card.Img style={{height:"16rem"}} variant="top" src="https://static.toiimg.com/photo/msid-92775530/92775530.jpg" />                
                <div class="card-body">
                <Card.Title>How A Farmer From Nashik Grew 195 Quintal Onion</Card.Title>
                <Card.Text>Modern farming methods have often proven effective and have delivered outstanding results. A farmer from Nashik, stands testimony to the wonders modern farming techniques can ...</Card.Text>
      <button className='btn btn-primary'>Read More </button> 
                </div>
            </div>
        </div>
        {/* card 2 */}
        <div class="col-sm">
            <div class="card h-100">
                <Card.Img style={{height:"16rem"}}  variant="top" src="https://mahadhan.co.in/wp-content/uploads/2018/02/pomegranate-2825556_960_720.jpg" />
                <div class="card-body">
                <Card.Title>How Mahadhan Helps Farmers Get A Good Pomegranate Produce</Card.Title>
                <Card.Text>Mahadhan’s fertilisers have constantly delivered results and played a significant role in farmers’ success stories. It’s no wonder then that Mahadhan is one of the ...</Card.Text>
      <button className='btn btn-primary' >Read More</button>
                </div>
            </div>
        </div>
        {/* card 3 */}
        <div class="col-sm">
            <div class="card h-100">
                <Card.Img style={{height:"16rem"}} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Vehn%C3%A4pelto_6.jpg" />
                <div class="card-body">
                <Card.Title>7 tips to get the best Wheat produce</Card.Title>
        <Card.Text>
          Wheat is one of the most important food crops in the world and wheat farming requires proper planning to produce a high yield. Most farmers ...
        </Card.Text>

      <button className='btn btn-primary' >Read More</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div style={{marginTop:"2rem"}} class="container">
    <div class="row gy-4">
        {/* card 4 */}
        <div class="col-sm">
            <div class="card h-100">
          <Card.Img style={{height:"16rem"}} variant="top" src="https://files.worldwildlife.org/wwfcmsprod/images/Cotton_09.21.12_Industries/hero_small/74bop80spn_133837741.jpg" />
                <div class="card-body">
        <Card.Title>
            Cotton farming – the success story</Card.Title>
        <Card.Text>
          Cotton is one of the most important crops in the Marathwada and Vidarbha region of Maharashtra. At a time when most regions in the state ...
        </Card.Text>
      <button className='btn btn-primary'>Read More</button>
                </div>
            </div>
        </div>
        {/* card 5 */}
        <div class="col-sm">
            <div class="card h-100">
                <Card.Img style={{height:"16rem"}} variant="top" src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX42337335.jpg" />
                <div class="card-body">
        <Card.Title>Tips on increasing sugarcane yield</Card.Title>
        <Card.Text>
          Mr. Sanjeev Mane from Sangli was awarded Krushi Bhushan for his astounding work in farming and yielding a whopping 100 tonne sugarcane per acre. How ...
        </Card.Text>

      <button className='btn btn-primary'>Read More</button>
                </div>
            </div>
        </div>
        {/* card 6 */}
        <div class="col-sm">
            <div class="card h-100">
                <Card.Img style={{height:"16rem"}} variant="top" src="https://mahadhan.co.in/wp-content/uploads/2017/10/shutterstock_492499081.jpg" />
                <div class="card-body">
        <Card.Title>All you need to know about grape farming in India</Card.Title>
        <Card.Text>
          India is among the leading 10 countries in the world in the production of grapes. Mostly used in India as a table fresh fruit, grapes ...
        </Card.Text>
      <button className='btn btn-primary'>Read More</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default CropCultivation_Article
