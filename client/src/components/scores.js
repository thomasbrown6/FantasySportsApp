import { useState } from 'react'
import React from 'react'
import { render} from 'react-dom'
import Cardgroup from './cardgroup'
import Carousel from 'react-bootstrap/Carousel'


// fix the class extends into a Function component This will be where Thomas's API will target.


function Scores() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
<div id='scores'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <Cardgroup/>

        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Cardgroup/>

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Cardgroup/>

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
);
    }

  // render(<Scores />);

export default Scores;