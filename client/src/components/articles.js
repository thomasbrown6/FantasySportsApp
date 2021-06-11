import React from 'react'

class Articles extends React.Component{
    constructor(props){
        super(props);
this.state = {
    img: this.props.img,
    title: this.props.title,
    description: this.props.description,
    weblink: this.props.weblink,
    date: this.props.date,
}
        
    }
    render(){
        const{img, title, description, date, weblink} = this.state
        return(
            <div id ='articlesmain'>
              <div>
                <row>
              <img src={img} style={{width:'550px'}}/>

                </row>
              <row>

              </row>
              <row>
                
              <h5 id='datebubble'>{date}</h5> 
                </row>
              <row>
              <h1>{title}</h1>
                
                </row>
               <row>
                
              <h4>{description}</h4>
              </row>
              <row>
                
              <a href ={weblink}><h3>Explore more</h3></a>
                </row>

              </div>

            </div>
        )
    }
}

export default Articles;