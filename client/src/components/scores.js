import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import Cardgroup from './cardgroup';
import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import moment from 'moment';
import Cardgroup from './cardgroup';
import Game from './game';

//Actions
import { getNCAALiveScores } from '../actions/ncaa';
import Spinner from './layout/Spinner';
import { set } from 'mongoose';

// fix the class extends into a Function component This will be where Thomas's API will target.

const Scores = ({
	auth: { user },
	ncaa: {
		divisions: { fcs_live_scores },
		loaded
	},
	getNCAALiveScores
}) => {
	//get live updates on page load
	useEffect(() => {
		getNCAALiveScores('fcs-live');
	}, []);

	//get live updates every 30 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			getNCAALiveScores('fcs-live');
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		handleCardGroupCount();
	}, [fcs_live_scores]);

	//set index for carousel
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	const Logo = 'http://loodibee.com/wp-content/uploads/nfl-';
	const Teams = {
		ARI: `${Logo}arizona-cardinals-team-logo-2-768x768.png`,
		ATL: `${Logo}atlanta-falcons-team-logo-2-768x768.png`,
		BAL: `${Logo}baltimore-ravens-team-logo-2-768x768.png`,
		BUF: `${Logo}buffalo-bills-team-logo-2-768x768.png`,
		CAR: `${Logo}carolina-panthers-team-logo-2-768x768.png`,
		CHI: `${Logo}chicago-bears-team-logo-2-768x768.png`,
		CIN: `${Logo}cincinnati-bengals-team-logo-768x768.png`,
		CLE: `${Logo}cleveland-browns-team-logo-2-768x768.png`,
		DAL: `${Logo}dallas-cowboys-team-logo-2-768x768.png`,
		DET: `${Logo}detroit-lions-team-logo-2-768x768.png`,
		GB: `${Logo}green-bay-packers-team-logo-2-768x768.png`,
		IND: `${Logo}indianapolis-colts-team-logo-2-768x768.png`,
		KC: `${Logo}kansas-city-chiefs-team-logo-2-768x768.png`,
		LAR: `${Logo}los-angeles-rams-team-logo-2-768x768.png`,
		MIA: `${Logo}miami-dolphins-team-logo-2-768x768.png`,
		MIN: `${Logo}minnesota-vikings-team-logo-2-768x768.png`,
		NO: `${Logo}new-orleans-saints-team-logo-2-768x768.png`,
		NYG: `${Logo}new-york-giants-team-logo-2-768x768.png`,
		NYJ: `${Logo}new-york-jets-team-logo-768x768.png`,
		PIT: `${Logo}pittsburgh-steelers-team-logo-2-768x768.png`,
		TB: `${Logo}tampa-bay-buccaneers-team-logo-2-768x768.png`,
		TEN: `${Logo}tennessee-titans-team-logo-2-768x768.png`
	};

	const [cardGroupCount, setCardGroupCount] = useState(0);

	const handleCardGroupCount = () => {
		if (Array.isArray(fcs_live_scores)) {
			setCardGroupCount(Math.ceil(fcs_live_scores.length / 4));
		}
		console.log(
			`game count: ${Math.ceil(
				fcs_live_scores.length
			)} and game rounded: ${Math.ceil(fcs_live_scores.length / 4)}`
		);
	};

	const Cards = () => {
		for (var j = 0; j < fcs_live_scores.length; j++) {}
	};

	const CardComponent = () => {
		let j = 0;

		// for (var i = 0; i < cardGroupCount; i++) {
		// 	<CardGroup>
		// 		<Card bg='secondary' text='light'>
		// 			{/* <Card.Img variant='top' src={GameTwo} /> */}
		// 			<Card.Body>
		// 				<Card.Text>
		// 					{`${match.hometeam.name} ${match.hometeam.totalscore}`}
		// 				</Card.Text>
		// 				<Card.Text>vs</Card.Text>
		// 				<Card.Text>
		// 					{`${match.awayteam.name} ${match.awayteam.totalscore}`}
		// 				</Card.Text>
		// 			</Card.Body>
		// 			<Card.Footer>
		// 				<small className='text'>
		// 					{match.status === 'Delayed' ||
		// 					match.status === 'Final'
		// 						? match.status
		// 						: ` ${match.timeLeft} - ${match.status}`}
		// 				</small>
		// 			</Card.Footer>
		// 		</Card>
		// 		;
		// 	</CardGroup>;
		//}
	};

	return (
		<div id='scores'>
			<h1 id='scorestext'>NCAA Scores</h1>
			<br></br>
			{/* {Array.isArray(fcs_live_scores) ? ( */}
			<Carousel activeIndex={index} onSelect={handleSelect}>
				<Carousel.Item>
					{/* {fcs_live_scores.map((match, index) => ( */}
					<Game
						time='2:32 - 2nd'
						drive='2nd & 10'
						yard='MIN 25'
						channel='NBC'
						away={{ name: 'MIN', score: 24, logo: Teams.MIN }}
						home={{ name: 'DAL', score: 7, logo: Teams.DAL }}
						final={false}
					/>

					<Carousel.Caption>
						{/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Game
						away={{ name: 'DET', score: 13, logo: Teams.DET }}
						home={{ name: 'CHI', score: 20, logo: Teams.CHI }}
						final={true}
					/>

					<Carousel.Caption>
						{/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item id='testcarousel'>
					<Game
						away={{ name: 'BAL', score: 49, logo: Teams.BAL }}
						home={{ name: 'CIN', score: 13, logo: Teams.CIN }}
						final={true}
					/>
					<Game
						away={{ name: 'BAL', score: 49, logo: Teams.BAL }}
						home={{ name: 'CIN', score: 13, logo: Teams.CIN }}
						final={true}
					/>
					<Game
						away={{ name: 'BAL', score: 49, logo: Teams.BAL }}
						home={{ name: 'CIN', score: 13, logo: Teams.CIN }}
						final={true}
					/>
					<Game
						away={{ name: 'BAL', score: 49, logo: Teams.BAL }}
						home={{ name: 'CIN', score: 13, logo: Teams.CIN }}
						final={true}
					/>
					<Game
						away={{ name: 'BAL', score: 49, logo: Teams.BAL }}
						home={{ name: 'CIN', score: 13, logo: Teams.CIN }}
						final={true}
					/>
					<Game
						away={{ name: 'BAL', score: 49, logo: Teams.BAL }}
						home={{ name: 'CIN', score: 13, logo: Teams.CIN }}
						final={true}
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			{/* ) : (
				<Spinner />
			)} */}
		</div>
	);
};

// render(<Scores />);

Scores.propTypes = {
	auth: PropTypes.object.isRequired,
	ncaa: PropTypes.object.isRequired,
	getNCAALiveScores: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	ncaa: state.ncaa
});

export default connect(mapStateToProps, { getNCAALiveScores })(Scores);
