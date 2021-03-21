import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Gameone from '../assets/images/gameone.jpeg'
import Gametwo from '../assets/images/gametwo.jpeg'
import Gamethree from '../assets/images/gamethree.jpeg'

class Schedule extends React.Component{
    render(){
        return(
            <div>
<CardGroup>
  <Card id='cardmain' bg='dark' border='primary' text='light'>
    <Card.Img id='cardimage' variant="top" src={Gameone} />
    <Card.Body>
      <Card.Title id='cardtitle'>San Francisco 49ers VS Seattle Seahawks</Card.Title>
      <Card.Text >
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg='dark' border='primary' text='light'>
    <Card.Img variant="top" src={Gametwo} />
    <Card.Body>
      <Card.Title>Carolina Panthers VS the Atlanta Falcons</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg='dark' border='primary' text='light'>
    <Card.Img variant="top" src={Gamethree} />
    <Card.Body>
      <Card.Title>Kansas City Chiefs VS Baltimore Ravens</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
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

export default Schedule;