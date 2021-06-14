import React from 'react'
import ReactPlayer from "react-player"
import Card from 'react-bootstrap/Card'

const Podcast = props =>{
    return(
      <Card id='podcastcard'>

    <div id='podcastindividual' class="player-wrapper">

      <ReactPlayer
            className='react-player'
            url={props.video}
            width='100%'
            height='100%'
          />
      <h5 id='podcasttitle'class="card-title">{props.title}</h5>
      <p id='podcastdescription'class="card-text">{props.description}</p>
    </div>
      </Card>

    )
}

export default Podcast