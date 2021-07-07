import "../ScorecardBar.css";
import React, { useState } from "react";
const Game = (props) => {
  const [time, setTime] = useState(props.time);
  const [drive, setDrive] = useState(props.drive);
  const [yard, setYard] = useState(props.yard);
  const [channel, setChannel] = useState(props.channel);
  const [away, setAway] = useState({
    name: props.away.name,
    score: props.away.score,
    logo: props.away.logo,
  });
  const [home, setHome] = useState({
    name: props.home.name,
    score: props.home.score,
    logo: props.home.logo,
  });
  const [final, setFinal] = useState(
    props.final && props.home.score > props.away.score
      ? props.home.name
      : props.away.name
  );
  const [winner, setWinner] = useState(
    props.final && props.home.score > props.away.score
      ? props.home.name
      : props.away.name
  );

  return (
    <div
      className={props.type === "same" ? "game__container2" : "game__container"}
    >
      <div className="game__top-bar">
        <span className={`game__time ${time ? "in-progress" : ""}`}>
          {time ? time : "Final"}
        </span>
        {final ? null : <span className="game__channel">{channel}</span>}
      </div>
      <div className="info-split">
        <div className="team__container">
          <div className="team">
            <img
              className="team__logo"
              src={away.logo}
              alt={`${away.name} team logo`}
            />
            <p
              className={`team__name ${
                !final ? "" : winner === home.name ? "losing-team" : ""
              }`}
            >
              {away.name}
            </p>
            <p
              className={`team__score ${
                !final ? "" : winner === home.name ? "losing-team" : ""
              }`}
            >
              {away.score}
            </p>
          </div>
          <div className="team">
            <img
              className="team__logo"
              src={home.logo}
              alt={`${away.name} team logo`}
            />
            <p
              className={`team__name ${
                !final ? "" : winner === away.name ? "losing-team" : ""
              }`}
            >
              {home.name}
            </p>
            <p
              className={`team__score ${
                !final ? "" : winner === away.name ? "losing-team" : ""
              }`}
            >
              {home.score}
            </p>
          </div>
        </div>
        {final ? null : (
          <div className="game__in-progress">
            <span>
              {drive}
              <br />
              {yard}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default Game;
