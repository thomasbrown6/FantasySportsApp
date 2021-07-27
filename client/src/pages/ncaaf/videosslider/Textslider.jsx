import React from 'react'
import './textslider.css';

function Textslider() {
    return (
        <div class="col-lg-10 col-xl-8 mx-auto">
            <div class="p-5 bg-black shadow rounded">  
                <div>          
                    <ol class="carousel-indicators mb-0">
                        <li  data-target="#carouselExampleIndicators" ></li>
                        <li class="active" data-target="#carouselExampleIndicators" ></li>
                        <li data-target="#carouselExampleIndicators" ></li>
                    </ol>
                    <div class="carousel-inner px-5 pb-4">
                        <div class="carousel-item active">                                            
                                        <p class="font-italic lead" style={{marginLeft: '-17px'}}> VIDEOS</p>          
                        </div>
                        <div class="carousel-item">    
                                        <p class="font-italic lead" style={{marginLeft: '-17px'}}> VIDEOS</p>                        
                        </div>
                        <div class="carousel-item">     
                                        <p class="font-italic lead" style={{marginLeft: '-17px'}}> VIDEOS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Textslider
