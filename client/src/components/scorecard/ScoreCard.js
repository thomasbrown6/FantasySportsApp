import React, { Fragment, useEffect, useState } from 'react';
import Game from '../game';
import Carousel from 'react-bootstrap/Carousel';

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

const ScoreCard = (props) => {
	//set index for carousel
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	const [carouselItemCount, setCarouselItemCount] = useState(0);

	const handleCarouselItemCount = () => {
		if (Array.isArray(props.games)) {
			setCarouselItemCount(Math.ceil(props.games.length / 6));
		}
		console.log(
			`game count: ${Math.ceil(
				props.games.length
			)} and game rounded: ${Math.ceil(props.games.length / 6)}`
		);
	};

	if (props.games === null) {
		return <Fragment>no games available</Fragment>;
	}

	let carouselItems = [];

	for (var i = 0; i < props.games.length; i++) {
		let game1 = props.games[i];
		let game2 = props.games[i + 1];
		let game3 = props.games[i + 2];
		let game4 = props.games[i + 3];
		let game5 = props.games[i + 4];
		let game6 = props.games[i + 5];

		carouselItems.push(
			<Carousel.Item>
				{game1 && (
					<Game
						away={{
							name: game1.awayteam.name,
							score: game1.awayteam.totalscore,
							logo: Teams.BAL
						}}
						home={{
							name: game1.hometeam.name,
							score: game1.hometeam.totalscore,
							logo: Teams.CIN
						}}
						final={true}
					/>
				)}
				{game2 && (
					<Game
						away={{
							name: game2.awayteam.name,
							score: game2.awayteam.totalscore,
							logo: Teams.BAL
						}}
						home={{
							name: game2.hometeam.name,
							score: game2.hometeam.totalscore,
							logo: Teams.CIN
						}}
						final={true}
					/>
				)}
				{game3 && (
					<Game
						away={{
							name: game3.awayteam.name,
							score: game3.awayteam.totalscore,
							logo: Teams.BAL
						}}
						home={{
							name: game3.hometeam.name,
							score: game3.hometeam.totalscore,
							logo: Teams.CIN
						}}
						final={true}
					/>
				)}
				{game4 && (
					<Game
						away={{
							name: game4.awayteam.name,
							score: game4.awayteam.totalscore,
							logo: Teams.BAL
						}}
						home={{
							name: game4.hometeam.name,
							score: game4.hometeam.totalscore,
							logo: Teams.CIN
						}}
						final={true}
					/>
				)}
				{game5 && (
					<Game
						away={{
							name: game5.awayteam.name,
							score: game5.awayteam.totalscore,
							logo: Teams.BAL
						}}
						home={{
							name: game5.hometeam.name,
							score: game5.hometeam.totalscore,
							logo: Teams.CIN
						}}
						final={true}
					/>
				)}
				{game6 && (
					<Game
						away={{
							name: game6.awayteam.name,
							score: game6.awayteam.totalscore,
							logo: Teams.BAL
						}}
						home={{
							name: game6.hometeam.name,
							score: game6.hometeam.totalscore,
							logo: Teams.CIN
						}}
						final={true}
					/>
				)}

				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
		);

		i = i + 5;
	}

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			{carouselItems}
		</Carousel>
	);
};

export default ScoreCard;
