import React from 'react'
import Navbar from '../components/navbar'
import Profile from '../pages/profile'
import Login from '../components/login'
import Hopkins from '../assets/images/hopkinscatch.jpg'
import Mahomes from '../assets/images/mahomespass.jpg'
import Jackson from '../assets/images/lamarjuke.jpg'
import Henry from '../assets/images/henrystiffarm.jpeg'
import Subheader from './subheader'
import PhotoCarousel from './carousel'

class Header extends React.Component{
    render(){
        return(
        <div>
<PhotoCarousel/>
        </div>
        )
        }
    }
export default Header;