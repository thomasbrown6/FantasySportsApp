import React from 'react'
import Featuredhighlights from '../components/featuredhighlights';
import Featureinfo from '../components/featuredinfo';
import Featuredmain from '../components/featuredmain';
import Featurepodcast from '../components/featuredpodcast'
import Featurevideo from '../components/featuredvideo';
import Highlights from '../components/highlight';
class Home extends React.Component{
    render(){
        return(
            <div id= 'home'>
                <row id='outerfeatured'>
                <br></br>
                <br></br>
<Featuredmain/>
                    
                </row>
                <row>
<Featurepodcast/>

                    
                </row>
                <br></br>
                <br></br>
                <row>

<Featuredhighlights/>
                    
                </row>
                <br></br>
                <br></br>
                <row>
<Featurevideo/>

                    
                </row>
                <br></br>
                <br></br>
                <row>

<Featureinfo/>
                    
                </row>

            </div>
        )
    }
}

export default Home;