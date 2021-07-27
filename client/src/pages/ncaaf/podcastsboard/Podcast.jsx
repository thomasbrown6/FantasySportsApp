import React from 'react'
import '../ScoreBoard/Score.css';
import blueplate from '../img/blueplate.png';

function Podcast() {
    return (
        <div className="row">
        <img src={blueplate} alt="blueplateimage" className="blueplate2" />
        <h3 className="blueplateText2">COLLEGE FOOTBALL PODCASTS</h3> 
        </div>
    )
}

export default Podcast
