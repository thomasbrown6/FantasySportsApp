import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import GameOne from '../assets/images/gameone.jpeg';
import GameTwo from '../assets/images/gametwo.jpeg';
import GameThree from '../assets/images/gamethree.jpeg';

const ScoreCardGroup = (props) => {
	return (
		<div>
			<CardGroup>
				{props.games.map((game, index) => (
					<Fragment>
						<Card bg='secondary' text='light'>
							{/* <Card.Img variant='top' src={GameTwo} /> */}
							<Card.Body>
								<Card.Text>
									{`${game.hometeam.name} ${game.hometeam.totalscore}`}
								</Card.Text>
								<Card.Text>vs</Card.Text>
								<Card.Text>
									{`${game.awayteam.name} ${game.awayteam.totalscore}`}
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className='text'>
									{game.status === 'Delayed' ||
									game.status === 'Final'
										? game.status
										: ` ${game.timeLeft} - ${game.status}`}
								</small>
							</Card.Footer>
						</Card>
						<Card bg='secondary' text='light'>
							{/* <Card.Img variant='top' src={GameTwo} /> */}
							<Card.Body>
								<Card.Text>
									{`${game.hometeam.name} ${game.hometeam.totalscore}`}
								</Card.Text>
								<Card.Text>vs</Card.Text>
								<Card.Text>
									{`${game.awayteam.name} ${game.awayteam.totalscore}`}
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className='text'>
									{game.status === 'Delayed' ||
									game.status === 'Final'
										? game.status
										: ` ${game.timeLeft} - ${game.status}`}
								</small>
							</Card.Footer>
						</Card>
						<Card bg='secondary' text='light'>
							{/* <Card.Img variant='top' src={GameTwo} /> */}
							<Card.Body>
								<Card.Text>
									{`${game.hometeam.name} ${game.hometeam.totalscore}`}
								</Card.Text>
								<Card.Text>vs</Card.Text>
								<Card.Text>
									{`${game.awayteam.name} ${game.awayteam.totalscore}`}
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className='text'>
									{game.status === 'Delayed' ||
									game.status === 'Final'
										? game.status
										: ` ${game.timeLeft} - ${game.status}`}
								</small>
							</Card.Footer>
						</Card>
						<Card bg='secondary' text='light'>
							{/* <Card.Img variant='top' src={GameTwo} /> */}
							<Card.Body>
								<Card.Text>
									{`${game.hometeam.name} ${game.hometeam.totalscore}`}
								</Card.Text>
								<Card.Text>vs</Card.Text>
								<Card.Text>
									{`${game.awayteam.name} ${game.awayteam.totalscore}`}
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className='text'>
									{game.status === 'Delayed' ||
									game.status === 'Final'
										? game.status
										: ` ${game.timeLeft} - ${game.status}`}
								</small>
							</Card.Footer>
						</Card>
					</Fragment>
				))}
			</CardGroup>
		</div>
	);
};

export default ScoreCardGroup;
