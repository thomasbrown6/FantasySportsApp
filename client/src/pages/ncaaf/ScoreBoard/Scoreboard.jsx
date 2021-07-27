import React from 'react';
import '../ScoreBoard/Score.css';
import Grouprows from '../img/Grouprows.png';
import Slider from '../slider/Qslider';
import Headlineslider from '../headlines/Headlineslider';
import men from '../img/men.png';
import men2 from '../img/men2.png';
import L_flags from '../FlagsTable/L_flags';
import flag1 from '../img/flag1.png';
import flag2 from '../img/flag2.png';
import flag3 from '../img/flag3.png';
import flag4 from '../img/flag4.png';
import flag5 from '../img/flag5.png';
import flag6 from '../img/flag6.png';
import flag7 from '../img/flag7.png';
import flag8 from '../img/flag8.png';
import flag9 from '../img/flag9.png';
import flag10 from '../img/flag10.png';
import flag11 from '../img/flag11.png';
import flag12 from  '../img/flag12.png';
import flag13 from   '../img/flag13.png';
import flag14 from   '../img/flag14.png';
import flag15 from   '../img/flag15.png';
import flag16 from   '../img/flag16.png';

// import Audio from '../MusicPlayer/Audio';
import Audio from '../components/Audio';
import { ReactVideo } from "reactjs-media";
import Textslider from '../videosslider/Textslider';
import Podcast from '../podcastsboard/Podcast';
import Social from '../sociallinks/Social';

function Scoreboard() {
    return (
      <>
      <div className="container-fluid">
        <div className="row">
              <div className="col col-xl-3 col-sm-3 col-md-3 col-lg-3 col-xl-3" >
                  <Slider />
                      <img src={Grouprows} alt="Grouprows" className="scoreleft"  /> 
                      <p className="scoreText1">2020-21 Bowl Projections</p>        
                      <p className="scoreText2">Allstate Playoff Predictor</p>        
                      <p className="scoreText3">College Pick'em</p>        
                      <p className="scoreText4">Position U 2.0</p>        
                      <p className="scoreText5">CFB Recruiting</p> 
                      </div>
                      
                      <div className="col col-xl-3 col-sm-3 col-md-3 col-lg-3 col-xl-3" >
                      <L_flags />
                      <div className="tabledata">
                      <div className="col col-xl-1 col-sm-1 col-md-1 col-lg-1 col-xl-1" >
                      <img src={flag1} alt="flag1" className="flag1" />
                      <img src={flag2} alt="flag2" className="flag2" />
                      <img src={flag3} alt="flag3" className="flag3" />
                      <img src={flag4} alt="flag4" className="flag4" />
                      <img src={flag5} alt="flag5" className="flag5" />
                <img src={flag6} alt="flag6" className="flag6" />
                <img src={flag7} alt="flag7" className="flag7" />
                <img src={flag8} alt="flag8" className="flag8" />
                </div>
                <div className="col col-xl-1 col-sm-1 col-md-1 col-lg-1 col-xl-1" >
                <h5 className="flagtext1">18 SMU</h5>
                <h5 className="flagtext2">Temple</h5>
                <h5 className="flagtext7">25 Liberty</h5>
                <h5 className="flagtext6">Verginia Tech</h5>
                <h5 className="flagtext11">13 Michigain</h5>
                <h5 className="flagtext12">25 Indiana</h5>
                <h5 className="flagtext13">Arezona State</h5>
                <h5 className="flagtext14">20 USC</h5>
                </div>
                <div className="col col-xl-1 col-sm-1 col-md-1 col-lg-1 col-xl-1" >
                <h5 className="flagtext3">6-1</h5>
                <h5 className="flagtext4">1-3</h5>
                <h5 className="flagtext8">6-0</h5>
                <h5 className="flagtext9">4-2</h5>
                <h5 className="flagtext17">1-1</h5>
                <h5 className="flagtext18">2-0</h5>
                <h5 className="flagtext19">0-0</h5>
                <h5 className="flagtext20">0-0</h5>
                </div>
                <div className="col col-xl-1 col-sm-1 col-md-1 col-lg-1 col-xl-1" >
                <h5 className="flagtext5">10:30 PM</h5>
                <h5 className="flagtext10">10:30 PM</h5>
                <h5 className="flagtext21">10:30 PM</h5>
                <h5 className="flagtext22">10:30 PM</h5>
                </div>
                </div>    
                </div>
                <div className="col col-xl-3 col-sm-3 col-md-3 col-lg-3 col-xl-3" >
                <L_flags />
                <div className="tabledata">
                <div className="col col-xl-1 col-sm-1 col-md-1 col-lg-1 col-xl-1" >
                <img src={flag9} alt="flag1" className="flag1" />
                <img src={flag10} alt="flag2" className="flag2" />
                <img src={flag11} alt="flag3" className="flag3" />
                <img src={flag12} alt="flag4" className="flag4" />
                <img src={flag13} alt="flag5" className="flag5" />
                <img src={flag14} alt="flag6" className="flag6" />
                <img src={flag15} alt="flag7" className="flag7" />
                <img src={flag16} alt="flag8" className="flag8" />
         </div>
         <div className="col col-xl-1 col-sm-1 col-md-1 col-lg-1 col-xl-1" >
         <h5 className="flagtext1">Notrh Carolina</h5>
         <h5 className="flagtext2">Duke</h5>
         <h5 className="flagtext7">West Verginia</h5>
         <h5 className="flagtext6">22 Texas</h5>
         <h5 className="flagtext11">Mich. St.</h5>
         <h5 className="flagtext12">lowa</h5>
         <h5 className="flagtext13">9 BYU</h5>
         <h5 className="flagtext14">21 Boise State</h5>
         </div>
         <div className="col col-xl-1 col-sm-1 col-md-1 col-lg-1 col-xl-1" >
         <h5 className="flagtext3">4-2</h5>
         <h5 className="flagtext4">2-5</h5>
         <h5 className="flagtext8">4-2</h5>
         <h5 className="flagtext9">4-2</h5>
         <h5 className="flagtext15">1-1</h5>
         <h5 className="flagtext16">0-2</h5>
         <h5 className="flagtext19">6-1</h5>
         <h5 className="flagtext20">1-3</h5>
         
         
         </div>
         <div className="col col-xl-1 col-sm-1 col-md-1 col-lg-1 col-xl-1" >
         <h5 className="flagtext5">10:30 PM</h5>
         <h5 className="flagtext10">10:30 PM</h5>
         <h5 className="flagtext21">10:30 PM</h5>
         <h5 className="flagtext22">10:30 PM</h5>
         </div>
         </div>
         </div>    
         <div className="col col-xl-3 col-sm-3 col-md-3 col-lg-3 col-xl-3" >
         <Headlineslider />
         <img src={men} alt="menImage" className="men" />
         <p className="menTest">10/09/2020</p>
         <h4 className="heading2">Fantasy Football Streaming 
         Picks Week 5</h4>
         <p className="menText2">Week 5 provides a much better slate of streaming<br/>
         quarterbacks, tight ends, and defenses. <br/>
         Teddy Bridgewater headlines the streaming quarterback....</p>
         <img src={men2} alt="menImage" className="men2" />
        
         <p className="menTest2">10/09/2020</p>
         <h4 className="heading3">Fantasy Football Sleepars
        Week 5</h4>
        <p className="menText3">Fantasy Football Sleepars for Week 5 are  <br/> the great Eddle use Halan...
        </p>
        </div>
        
        </div>
        <Podcast />
        <Social />  
             
        <div className="row">
        
        <Audio />         
        <Audio style={{marginTop:'6%'}} />         
        <Audio style={{marginTop:'12%'}} />         
        <Audio style={{marginTop:'18%'}} />         
        <Audio style={{marginTop:'24%'}} />         
        <Audio style={{marginTop:'30%'}} />            
        </div>
        <div className="row" >
        <div className="video">
        <ReactVideo
        src="https://storage.coverr.co/videos/BALBxhjqfldnwtv00YopEAA014UtVoZo00R?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjExMjc0NTQwfQ.rVZT49viuSpaSaXUkejPw3N9cvSHbxmSwhrnDUKJCMc"
        autoPlay
        primaryColor="blue"
        poster="https://www.linkpicture.com/q/runner.png"
        Height
        />
        <ReactVideo
        src="https://storage.coverr.co/videos/BALBxhjqfldnwtv00YopEAA014UtVoZo00R?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjExMjc0NTQwfQ.rVZT49viuSpaSaXUkejPw3N9cvSHbxmSwhrnDUKJCMc"
        autoPlay
        primaryColor="blue"
        poster="https://www.linkpicture.com/q/player12.png"
        Height
        />
        <ReactVideo
        src="https://storage.coverr.co/videos/BALBxhjqfldnwtv00YopEAA014UtVoZo00R?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjExMjc0NTQwfQ.rVZT49viuSpaSaXUkejPw3N9cvSHbxmSwhrnDUKJCMc"
        autoPlay
        primaryColor="blue"
        poster="https://www.linkpicture.com/q/twoplayer.png"
        Height
        />
        <div className="smallvideos">
        <ReactVideo
        src="https://storage.coverr.co/videos/BALBxhjqfldnwtv00YopEAA014UtVoZo00R?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjExMjc0NTQwfQ.rVZT49viuSpaSaXUkejPw3N9cvSHbxmSwhrnDUKJCMc"
        autoPlay
        primaryColor="blue"
        poster="https://www.linkpicture.com/q/twoplayer.png"
        Height
        />
        <ReactVideo
        src="https://storage.coverr.co/videos/BALBxhjqfldnwtv00YopEAA014UtVoZo00R?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjExMjc0NTQwfQ.rVZT49viuSpaSaXUkejPw3N9cvSHbxmSwhrnDUKJCMc"
        autoPlay
        primaryColor="blue"
        poster="https://www.linkpicture.com/q/twoplayer.png"
        Height
        />
        <p className="menTestsmallvideos">10/09/2020</p>
        <h4 className="menTestsmallvideosHeading">Fantasy Football Sleepars
        Week 5</h4>
        <p className="menTestsmallvideosPara">Fantasy Football Sleepars for Week 5 are  <br/> the great Eddle use Halan...
        </p>
        <p className="menTestsmallvideos2">10/09/2020</p>
        <h4 className="menTestsmallvideosHeading2">Fantasy Football Sleepars
        Week 5</h4>
        <p className="menTestsmallvideosPara2">Fantasy Football Sleepars for Week 5 are  <br/> the great Eddle use Halan...
        </p>
        <h4 className="viewallvideos"><a>VIEW ALL VIDEOS &#8594;</a></h4>
        </div>

        <div className="videostextslider">
        <div className="links2">
        
        <div className="col-lg-10 col-xl-8 mx-auto">
            <div className="p-5 bg-black shadow rounded">  
                <div>          
                    <ol className="carousel-indicators mb-0">
                        <li  data-target="#carouselExampleIndicators" ></li>
                        <li className="active" data-target="#carouselExampleIndicators" ></li>
                        <li data-target="#carouselExampleIndicators" ></li>
                    </ol>
                    <div className="carousel-inner px-5 pb-4">
                        <div className="carousel-item active">                                            
                                        <p className="font-italic lead" ></p>          
                        </div>
                        <div className="carousel-item">    
                                        <p className="font-italic lead" ></p>                        
                        </div>
                        <div className="carousel-item">     
                                        <p className="font-italic lead" ></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>   
        <Textslider />
        </div>
        </div>
        </div>
   </div>
    </>
        )
}

export default Scoreboard;
