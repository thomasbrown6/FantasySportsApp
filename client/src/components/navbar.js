import React from 'react'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import Home from '../pages/home'
import News from '../pages/news'
import Podcast from '../pages/podcast'
import Profile from '../pages/profile'
import Fantasy from '../pages/fantasy'
import NFL from '../pages/nfl'
import NCAAF from '../pages/ncaaf'
import Stats from '../pages/stats'
import Articles from '../pages/articles'



class Navbar extends React.Component{
    render(){
        return(

            <div>
                <Router>
 <Switch>
       

            <Route path='/fantasy' component={Fantasy} />
            <Route path='/nfl' component={NFL} />
            <Route path='/ncaaf' component={NCAAF} />
            <Route path='/stats' component={Stats} />
            <Route path='/articles' component={Articles} />
            <Route path='/news' component={News} />

            

            <nav id='navbar'>
                 <ul id='navbar'>
                     <Link to= '/nfl'>
                <h3><li>NFL<li/>
                     </li></h3></Link>
            <Link to='/ncaaf'>
                <h3><li>NCAAF</li></h3>
            </Link>
            <Link to='/stats'>
                <h3><li>Stats</li></h3>
            </Link>
            <Link to='/fantasy'>
                <h3><li>Fantasy HQ</li></h3>
            </Link>
            <Link to='/Articles'>
                <h3><li>Articles</li></h3>
            </Link>
            <Link to='/news'>
                <h3><li>News</li></h3>
            </Link>

            </ul>
            </nav>
            </Switch>
</Router>
            </div>
        )
    }
}

export default Navbar;