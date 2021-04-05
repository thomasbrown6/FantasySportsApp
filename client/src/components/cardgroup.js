import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import GameOne from '../assets/images/gameone.jpeg';
import GameTwo from '../assets/images/gametwo.jpeg';
import GameThree from '../assets/images/gamethree.jpeg';

const Cardgroup = (props) => {
	return (
		<div>
			<CardGroup>
				<Card bg='secondary' text='light'>
					<Card.Img variant='top' src={GameTwo} />
					<Card.Body>
						<Card.Text>{props.game}</Card.Text>
						<Card.Text>Home: {props.home}</Card.Text>
						<Card.Text>Away: {props.away}</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className='text'>{props.date}</small>
					</Card.Footer>
				</Card>
				<Card bg='secondary' text='light'>
					<Card.Img variant='top' src={GameTwo} />
					<Card.Body>
						<Card.Text>{props.game}</Card.Text>
						<Card.Text>
							<img id='cardimg' src={props.homelogo} />
							Home: {props.home}
						</Card.Text>
						<Card.Text>
							<img id='cardimg' src={props.awaylogo} />
							Away: {props.away}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className='text'>{props.date}</small>
					</Card.Footer>
				</Card>
				<Card bg='secondary' text='light'>
					<Card.Img variant='top' src={GameTwo} />
					<Card.Body>
						<Card.Text>{props.game}</Card.Text>
						<Card.Text>Home: {props.home}</Card.Text>
						<Card.Text>Away: {props.away}</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className='text'>{props.date}</small>
					</Card.Footer>
				</Card>
			</CardGroup>
		</div>
	);
};

export default Cardgroup;
