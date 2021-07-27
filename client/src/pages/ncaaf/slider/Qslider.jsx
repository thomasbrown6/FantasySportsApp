import React from 'react';
import '../slider/slider.css';
function Qslider() {
    return (
        <div class="col-lg-10 col-xl-8 mx-auto">
            <div class="p-5 bg-black shadow rounded">  
                <div  id="carouselExampleIndicators" >          
                    <ol class="carousel-indicators mb-0" style={{marginLeft: '-3%'}}>
                        <li  data-target="#carouselExampleIndicators" ></li>
                        <li class="active" ></li>
                        <li data-target="#carouselExampleIndicators" ></li>
                    </ol>
                    <div class="carousel-inner px-5 pb-4" >
                        <div class="carousel-item ">                                            
                                        <p class="font-italic"> <i></i>QUICK LINKS</p>          
                        </div>
                        <div class="carousel-item active">    
                                        <p class="font-italic"> <i></i>QUICK LINKS</p>                        
                        </div>
                        <div class="carousel-item">     
                                        <p class="font-italic"> <i></i>QUICK LINKS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qslider;
