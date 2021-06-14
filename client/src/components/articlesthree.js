import React from 'react'


class Articles3 extends React.Component{
    constructor(props){
        super(props);
this.state = {
    img: this.props.img,
    title: this.props.title,
    description: this.props.description,
    date: this.props.date,
    weblink: this.props.weblink
}
        
    }
    render(){
        const{img, title, description, weblink, date} = this.state
        return(
            <div id ='articlesthree'>
       <div>
              <img src={img} style={{width:'250px'}}/>
              <div id='articlescontent'>

              <h5 id='datebubble'>{date}</h5> 

              <h1>{title}</h1>
              
              <h4>{description}</h4>
              
              <a href ={weblink}><h3>Explore more</h3></a>
              </div>
              

              </div>
</div>
            
        )
    }
}

export default Articles3;