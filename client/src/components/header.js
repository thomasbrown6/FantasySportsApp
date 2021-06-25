import React from 'react'
import Navbar from './navbar'
import Login from './login'
import Logo from './logo'
import Linebreak from './linebreak'

class Header extends React.Component{
    render(){
        return(
            <div id='header'>
<Linebreak color='darkgray'/>
            <div className='row'>
                <div id='loginDiv'className='col-md-2'>
<Logo/>
            </div>
                <div className='col-md-8'>
<Navbar/>
                </div>
                <div id='profileDiv'className='col-md-2'>
<Login/>               
 </div>
                </div>
            </div>
        )
    }
}

export default Header;