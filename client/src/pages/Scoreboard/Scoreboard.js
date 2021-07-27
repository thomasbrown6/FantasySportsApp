import React, { useState } from 'react';
import Scorecard from './sections/Scorecard/Scorecard';
import classes from './Scoreboard.module.css';
import nflLogo from '../../assets/images/nflLogo.svg';
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 220
	},

	select: {
		background: 'white',
		'&:hover': {
			background: 'white'
		},
		'&:focus': {
			backgroundColor: 'white'
		},
		'&:before': {
			borderColor: 'white !important'
		},
		'&:after': {
			borderColor: 'white !important'
		}
	},
	icon: {
		// fill: "white",
	}
}));
const Scoreboard = () => {
	const classes2 = useStyles();
	const [leftCard, setLeftCard] = useState({
		time: '5:50 AM',
		teams: [
			{
				name: 'Falcons',
				score: '(1-6, 1-2 Away)'
			},
			{
				name: 'Falcons',
				score: '(1-6, 1-2 Away)'
			}
		]
	});
	const [middleCard, setMiddleCard] = useState({
		stadium: 'Bank of America Stadium Charlotte, NC',
		temprature: '24 C',
		tickets: 'Tickets as low as $150'
	});
	const [rightCard, setRightCard] = useState({
		players: [
			{
				status: 'PASS',
				name: 'Matt Ryan',
				span: 'ATL',
				detail: '190-286, 2181 YDS, 12 TD'
			},
			{
				status: 'PASS',
				name: 'Matt Ryan',
				span: 'ATL',
				detail: '190-286, 2181 YDS, 12 TD'
			},
			{
				status: 'PASS',
				name: 'Matt Ryan',
				span: 'ATL',
				detail: '190-286, 2181 YDS, 12 TD'
			}
		]
	});
	const [scoreCard1, setScoreCard1] = useState([
		{
			date: 'Friday, 30th October',
			leftCard,
			middleCard,
			rightCard
		}
	]);

	const [scoreCard2, setScoreCard2] = useState([
		{
			date: 'Sunday, 1st November',
			leftCard,
			middleCard,
			rightCard
		},
		{
			leftCard,
			middleCard,
			rightCard
		},
		{
			leftCard,
			middleCard,
			rightCard
		},
		{
			leftCard,
			middleCard,
			rightCard
		},
		{
			leftCard,
			middleCard,
			rightCard
		}
	]);
	const [scoreCard3, setScoreCard3] = useState([
		{
			date: 'Monday, 2nd November',
			leftCard,
			middleCard,
			rightCard
		},
		{
			leftCard,
			middleCard,
			rightCard
		}
	]);
	return (
		<div>
			<div className={classes.nflContainer}>
				<img src={nflLogo} alt='nflLogo' width='100px' />
				<h2>SCOREBOARD</h2>
			</div>
			<div className={classes.container}>
				<div className={classes.selectFlex}>
					<div>
						<FormControl
							variant='filled'
							className={classes2.formControl}>
							<InputLabel id='demo-simple-select-outlined-label'>
								Year
							</InputLabel>
							<Select
								labelId='demo-simple-select-outlined-label'
								// value={age}
								// onChange={handleChange}
								classes={{ root: classes2.select }}
								inputProps={{
									classes: {
										icon: classes2.icon
									}
								}}
								label='Age'>
								<MenuItem value=''>
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>2020</MenuItem>
								<MenuItem value={20}>2021</MenuItem>
								<MenuItem value={30}>2022</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div>
						<FormControl
							variant='filled'
							className={classes2.formControl}>
							<InputLabel id='demo-simple-select-outlined-label'>
								Week
							</InputLabel>
							<Select
								labelId='demo-simple-select-outlined-label'
								// value={age}
								// onChange={handleChange}
								classes={{ root: classes2.select }}
								inputProps={{
									classes: {
										icon: classes2.icon
									}
								}}
								label='Age'>
								<MenuItem value=''>
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Week 1</MenuItem>
								<MenuItem value={20}>Week 2</MenuItem>
								<MenuItem value={30}>Week 3</MenuItem>
								<MenuItem value={10}>Week 4</MenuItem>
								<MenuItem value={20}>Week 5</MenuItem>
								<MenuItem value={30}>Week 6</MenuItem>
								<MenuItem value={30}>Week 7</MenuItem>
							</Select>
						</FormControl>
					</div>
				</div>
			</div>
			<Scorecard scoreCard1={scoreCard1} />
			<Scorecard scoreCard1={scoreCard2} />
			<Scorecard scoreCard1={scoreCard3} />
		</div>
	);
};
export default Scoreboard;
