import React from 'react'
import Podcast from './podcast'
import Podcasttitle from '../assets/images/PODCASTMAIN.png'
import Podcast2 from '../assets/images/PODCASTOUTLINE.png'

class Featurepodcast extends React.Component{
    render(){
        return(
            
            <div >

<img src={Podcasttitle} id='podcastneon'/>
<div id='featuredpodcast'>
<h1>PODCAST</h1>
    <div id= 'podcastgroup'>

                <Podcast id='podcastindividual'  
                title ='Article' description ='' video='https://www.youtube.com/watch?v=fqvxaCHnzBo'/>
                <br></br>
                <Podcast  
                title ='article' description =''video='https://www.youtube.com/watch?v=fqvxaCHnzBo'/>
                <Podcast  
                title ='article' description =''video='https://www.youtube.com/watch?v=fqvxaCHnzBo'/>
                <Podcast  
                title ='article' description =''video='https://www.youtube.com/watch?v=fqvxaCHnzBo'/>
                <Podcast  
                title ='article' description =''video='https://www.youtube.com/watch?v=fqvxaCHnzBo'/>
                <Podcast  
                title ='article' description =''video='https://www.youtube.com/watch?v=fqvxaCHnzBo'/>
                <Podcast  
                title ='article' description =''video='https://www.youtube.com/watch?v=fqvxaCHnzBo'/>
         
    </div>
</div>


       
            </div>
        )
    }
}

export default Featurepodcast;