import React from 'react'
import Search from '../assets/images/search.png'
class Login extends React.Component{
    render(){
        return(
            <div className="float-container" id='login'>
                <img className='float-child' id='search' src={Search}/>
                   <a href=''> 
                   <h3 className='float-child'>Login</h3>                    
                    </a>
            </div>
        )
    }
}

export default Login;