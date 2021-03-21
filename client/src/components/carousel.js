import React from 'react'
import Subheader from './subheader';
import Hopkins from '../assets/images/hopkinscatch.jpg'
import Mahomes from '../assets/images/mahomespass.jpg'
import Jackson from '../assets/images/lamarjuke.jpg'
import Henry from '../assets/images/henrystiffarm.jpeg'
import Carousel from 'react-bootstrap/Carousel'


class PhotoCarousel extends React.Component{
    render(){
        return(

            <Carousel id='carouselHeader'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Jackson}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Mahomes}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Henry}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Hopkins}
      alt="Fourth slide"
    />

    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        )
    }
}

export default PhotoCarousel;