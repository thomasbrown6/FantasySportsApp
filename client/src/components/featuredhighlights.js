import React from 'react'
import Highlight from './highlight'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

class Featuredhighlights extends React.Component{
    render(){
        return(
            <div id='featurehighlights'>
<Highlight videolink = 'https://www.youtube.com/watch?v=inSiFjznNWw' date ='09/10/2020'/>
<Col id='highlightscol'>
 {/* custom button end */}
<br></br>
    <Card   bg='dark' style={{ width: '28rem'}}>
  <Card.Body >
    <div id='subcards' className='cards' >

     {/* Card sub section */}
     <div id ='infocard' className="card bg-secondary mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="https://www.dailyherald.com/storyimage/da/20210414/sports/210419664/AR/0/AR-210419664.jpg&updated=202104141454&MaxW=900&maxH=900&noborder&Q=80" className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="card-text">Matchup Preview + Week 5 Injury Analysis with Dr. Seuss</p>
      </div>
    </div>
  </div>
</div>
    {/* Card Sub section */}
    <div id ='infocard' className="card bg-secondary mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_22/c_fill,f_auto,h_495,q_auto,w_880/v1/m/5/a/5a54a96ac203816fd74b6f0b66412e849a851cff/nfl-insider-thinks-russell-wilson-trade-possible.jpg" className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="card-text">Matchup Preview + Week 5 Injury Analysis with Dr. Seuss</p>
      </div>
    </div>
  </div>
</div>
    {/* Card Sub section */}
    <div id ='infocard' className="card bg-secondary mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="https://touchdownwire.usatoday.com/wp-content/uploads/sites/59/2020/10/USATSI_15061576.jpg" className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        {/* <h5 className="card-title">Card title</h5> */}
        <p className="card-text">Matchup Preview + Week 5 Injury Analysis with Dr. Seuss</p>
      </div>
    </div>
  </div>
</div>
    {/* Card Sub section */}
    <div id ='infocard' className="card bg-secondary mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec6f8dcacbd7400065de2fb%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D291%26cropX2%3D2374%26cropY1%3D77%26cropY2%3D2160" className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        {/* <h5 className="card-title">Card title</h5> */}
        <p className="card-text">Matchup Preview + Week 5 Injury Analysis with Dr. Seuss</p>
      </div>
    </div>
  </div>
</div>
    {/* Card Sub section */}
    <div id ='infocard' className="card bg-secondary mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="https://image.cnbcfm.com/api/v1/image/106863671-1617644053820-gettyimages-1295705920-ai5i2339_2021011075342536.jpeg?v=1617644192" className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        {/* <h5 className="card-title">Card title</h5> */}
        <p className="card-text">Matchup Preview + Week 5 Injury Analysis with Dr. Seuss</p>
      </div>
    </div>
  </div>
</div>
    </div>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#">View More</Card.Link>
  </Card.Body>
</Card>
    </Col>
            </div>
        )
    }
}

export default Featuredhighlights;