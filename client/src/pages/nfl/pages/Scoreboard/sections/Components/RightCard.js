import classes from "../Scorecard.module.css";
import React from 'react'

const RightCard = (props) => {
  return (
    <>
      <div className={classes.section3Left}>
        <div className={classes.section3Header}>
          <div className={classes.commonContainer}>
            <p>PLAYERS TO WATCH</p>
          </div>
        </div>
        {props.rightCard.players.map((player, index) => (
          <div className={classes.section3scoreArea} key={index}>
            <div className={classes.section3scoreAreaFlexRow}>
              <p className={classes.pass}>{player.status}</p>
              <div className={classes.line}></div>
              <div className={classes.section3scoreAreaFlexCol}>
                <p>
                  {player.name} <span>{player.span}</span>
                </p>
                <p>{player.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default RightCard;
