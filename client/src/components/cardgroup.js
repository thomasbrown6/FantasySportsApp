import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import GameOne from '../assets/images/gameone.jpeg'
import GameTwo from '../assets/images/gametwo.jpeg'
import GameThree from '../assets/images/gamethree.jpeg'

class Cardgroup extends React.Component{
    render(){
        return(
            <div>
                <CardGroup>
  <Card bg='secondary' text='light'>
    <Card.Img variant="top" src={GameOne}/>
    <Card.Body >
      <Card.Title>Game One</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg='secondary' text='light'>
    <Card.Img variant="top" src={GameTwo} />
    <Card.Body>
      <Card.Title>Game Two</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg='secondary' text='light'>
    <Card.Img variant="top" src={GameThree} />
    <Card.Body>
      <Card.Title>Game Three</Card.Title>
      <Card.Text>
        Testing to see how it translates
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
            </div>
        )
    }
}

export default Cardgroup;