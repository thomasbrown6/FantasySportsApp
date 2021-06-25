import React from 'react'
import { Link } from 'react-router-dom'
import Cerberus from '../assets/images/cerberus.png'

class Logo extends React.Component{
    render(){
        return(
            <div>
              <Link to= '/'>
              <img id='logo' src={Cerberus}/></Link>

            </div>
        )
    }
}

export default Logo;