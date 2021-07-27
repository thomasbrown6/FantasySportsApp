import React from 'react';
import './social.css';
import threedots from '../img/threedots.png';

function Social() {
    return (
        <>
        
        <div>
        <div className="links">
        
        <div className="col-lg-10 col-xl-8 mx-auto">
            <div className="p-5 bg-black shadow rounded">  
                <div>          
                    <ol className="carousel-indicators mb-0"  style={{marginLeft: '-3%'}}>
                        <li  data-target="#carouselExampleIndicators" ></li>
                        <li className="active" data-target="#carouselExampleIndicators" ></li>
                        <li data-target="#carouselExampleIndicators" ></li>
                    </ol>
                    <div className="carousel-inner px-5 pb-4">
                        <div className="carousel-item active">                                            
                                        <p className="font-italic lead" style={{marginLeft: '-17px'}}> FOLLOW CFS</p>          
                        </div>
                        <div className="carousel-item">    
                                        <p className="font-italic lead" style={{marginLeft: '-17px'}}> FOLLOW CFS</p>                        
                        </div>
                        <div className="carousel-item">     
                                        <p className="font-italic lead" style={{marginLeft: '-17px'}}> FOLLOW CFS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        <div class="socialbtns">
              <ul>
        <li><a href="#" className="fa fa-lg fa-facebook">Facebook</a></li>
        <li><a href="#" className="fa fa-lg fa-twitter">Twitter</a></li>
        <li><a href="#" className="fa fa-lg fa-instagram">Instagram</a></li>
        <li><a href="#" className="fa fa-lg fa-youtube">Youtube</a></li>
        <li><a href="#" className="fa fa-lg fab fa-snapchat">Snapchat</a></li>
              </ul>
     </div>
     </>
    )
}

export default Social
