import React from 'react';
import classes from '../Scorecard.module.css';
import redBox from '../../../assets/redBox.svg';
import blueBox from '../../../assets/blueBox.svg';
import boxLogo from '../../../assets/boxLogo.svg';

const LeftCard = (props) => {
	return (
		<>
			<div className={classes.section1}>
				<div className={classes.sectionHeader}>
					<div className={classes.commonContainer}>
						<p>{props.leftCard.time}</p>
					</div>
				</div>
				<div className={classes.section1scoreArea}>
					{props.leftCard.teams.map((team, index) => (
						<div className={classes.rowFlex} key={index}>
							<div className={classes.boxContainer}>
								{index === 0 ? (
									<img
										src={redBox}
										width='80px'
										height='60px'
										alt='scorelogo'
									/>
								) : (
									<img
										src={blueBox}
										width='80px'
										height='60px'
										alt='scorelogo'
									/>
								)}

								<div className={classes.boxLogo}>
									<img
										src={boxLogo}
										width='40px'
										alt='scorelogo'
									/>
								</div>
							</div>
							<div className={classes.colFlex}>
								<h3>{team.name}</h3>
								<p>{team.score}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
export default LeftCard;
