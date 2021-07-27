import React from 'react';
import jambo from '../img/Inner-Banner01.png';
import playerimg from '../img/playerimg.png';
import wol from '../img/wol.png';
import playbutton from '../img/playbutton.png';
import bang from '../img/bang.png';
import blueblur from '../img/blueblur.png';
import btnBG from '../img/btnBG.png';
import silver from '../img/silver.png';
import blueplate from '../img/blueplate.png';
import '../jambotran/Jam.css';


function Jam() {
    return (
        
        <div className="boxx" >
          <img src={jambo} alt="jambo" className="jambotran" />
        
        <img src={bang} alt="bang" className="bang" />
        <img src={blueblur} alt="blueblur" className="blueblur" />
        <img src={wol} alt="playerimage" className="wol" />
        <p className="wolpara">10/09/2020 <br/> Matchup Previews + Week 5 <br/> Injury Analysis with Dr.David<br/> Chao(2020 Fantasy Football)</p>
        <img src={playbutton} alt="playbuttonimage" className="playbutton" />
        <img src={playerimg} alt="playerimage" className="playerimg" />  
        <a className="btnBG" >Explore more &#8594;</a>
        <img src={btnBG} alt="btnBGimage" className="btnBG2" />  
        <p className="ndpara">Trusting USC as Pac-12 play opens <br/> throwing to Travis to Etienne, and<br/> more to watch in Week 10 </p>          
        <img src={silver} alt="silverimage" className="silver" />  
        <img src={blueplate} alt="blueplateimage" className="blueplate" />  
        <h3 className="score">COLLGE FOOTBALL SCOREBOARD</h3>            
        <div className="score1">
        <div class="p-5 bg-black shadow rounded alignClass">  
            <div>          
            <ol class="carousel-indicators mb-0">
                        <li ></li>
                        <li class="active" ></li>
                        <li  ></li>
                    </ol>
                <div class="carousel-inner px-2 pb-4">
                    <div class="carousel-item ">                                            
                                    <p class="font-italic2 lead"> <i></i>SATURDAY'S GAMES</p>          
                    </div>
                    <div class="carousel-item active">    
                                    <p class="font-italic2 lead"> <i></i>SATURDAY'S GAMES</p>                        
                    </div>
                    <div class="carousel-item">     
                                    <p class="font-italic2 lead"> <i></i>SATURDAY'S GAMES</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div> 
     
    )
}

export default Jam;
