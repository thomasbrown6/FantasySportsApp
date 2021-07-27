import React from 'react';
import classes from '../Scorecard.module.css';
import scoreboardCardBack2 from '../../../assets/scoreboardCardBack2.png';
import cardMoney from '../../../assets/cardMoney.svg';
import AccuWeather from '../../../assets/AccuWeather.svg';
import cloud from '../../../assets/cloud.svg';
const MiddleCard = (props) => {
	return (
		<>
			<div className={classes.section2}>
				<div className={classes.section2Header}>
					<img
						src={scoreboardCardBack2}
						alt='scoreboardCardBack'
						width='100%'
						height='55px'
					/>
					<div className={classes.imageTextContainer}>
						<div className={classes.imageText}>
							<div className={classes.imageTextWrapper1}>
								<p>{props.middleCard.stadium}</p>
							</div>
							<div className={classes.imageTextWrapper2}>
								<img
									src={AccuWeather}
									width='100px'
									alt='acculogo'
								/>
								<div className={classes.weatherFlex}>
									<img src={cloud} alt='acculogo' />
									<p>{props.middleCard.temprature}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={classes.section2Header2}>
					<div className={classes.cardContainer1}>
						<img src={cardMoney} width='30px' alt='cardMoney' />
						<p>{props.middleCard.tickets}</p>
					</div>
				</div>
				<div className={classes.section2scoreArea}></div>
			</div>
		</>
	);
};
export default MiddleCard;
