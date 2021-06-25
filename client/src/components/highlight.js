import React from 'react'
import ReactPlayer from 'react-player'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Highlightsmain from '../assets/images/HIGHLIGHTSMAIN.png'

import Highlightsoutline from '../assets/images/HIGHLIGHTSOUTLINE.png'
import Highlights2 from '../assets/images/HIGHLIGHTS2.png'

const Highlights = props => {
        return(
          <div>

<img src= {Highlights2} id ='highlightneon' />

            <div id='highlights' className="player-wrapper">
                    <h1 id> HIGHLIGHTS</h1>

                <ReactPlayer
    className='react-player'
    url={props.videolink}
    width='648px'
    height='648px'
  />
                        

<div>
                

              <row>

              </row>
              <row>
                
              <h5 id='datebubble'>{props.date}</h5> 
                </row>
              <row>
              <h1>{props.title}</h1>
                
                </row>
               <row>
                
              <h4>{props.description}</h4>
              </row>


              </div>
            </div>
          </div>
        )
    }


export default Highlights;