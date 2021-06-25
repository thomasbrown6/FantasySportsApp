import React from 'react'
import ReactPlayer from "react-player"
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import VIDEO from '../assets/images/VIDEOSOUTLINE.png'
import VIDEO2 from '../assets/images/VIDEOS2.png'

class Featurevideo extends React.Component{
    render(){
        return(
            <div>
<img src={VIDEO} id='videoneon'/>
            <div id='featurevideo'> 
            
                <h1 id>VIDEOS</h1>
                <CardDeck>
  <Card>
  <div className="card bg-dark text-white">
  
      <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=fqvxaCHnzBo'
            width='100%'
            height='100%'
          />
    <h5 className="card-title">Card title</h5>

  </div>

  </Card>
  <Card>
  <div className="card bg-dark text-white">
  
      <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=fqvxaCHnzBo'
            width='100%'
            height='100%'
          />
    <h5 className="card-title">Card title</h5>

  </div>

  </Card>
  <Card>
  <div className="card bg-dark text-white">
  
      <ReactPlayer
    className='react-player'
    url='https://www.youtube.com/watch?v=fqvxaCHnzBo'
    width='100%'
    height='100%'
  />
    <h5 className="card-title">Card title</h5>

  </div>
  </Card>
</CardDeck>
            </div>
            </div>
        )
    }
}

export default Featurevideo;