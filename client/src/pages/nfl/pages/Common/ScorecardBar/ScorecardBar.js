import React from 'react'
import "./ScorecardBar.css";
import Grid from "@material-ui/core/Grid";
import Game from "./Components/Game";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";

import scorelogo from "../../../assets/scorelogo.png";
const ScorecardBar = () => {
  return (
    <div className="scoreboard__container">
      <div className="game__container4">
        <h2 className="game__container__title__main">
          NFL/NCAAF <br /> Scores
        </h2>
      </div>
      <div className="game__container3">
        <h3 className="game__container__title">FAVORITE</h3>
      </div>
      <Game
        time="2:32 - 2nd"
        drive="2nd & 10"
        yard="MIN 25"
        channel="NBC"
        away={{ name: "MIN", score: 14, logo: scorelogo }}
        home={{ name: "DAL", score: 7, logo: scorelogo }}
        final={false}
      />
      <div className="game__container3">
        <h3 className="game__container__title">NFL</h3>
      </div>
      <Game
        type="same"
        away={{ name: "DET", score: 13, logo: scorelogo }}
        home={{ name: "CHI", score: 20, logo: scorelogo }}
        final={true}
      />
      <Game
        type="same"
        away={{ name: "BAL", score: 49, logo: scorelogo }}
        home={{ name: "CIN", score: 13, logo: scorelogo }}
        final={true}
      />
      <Game
        type="same"
        away={{ name: "BUF", score: 16, logo: scorelogo }}
        home={{ name: "CLE", score: 19, logo: scorelogo }}
        final={true}
      />
      <Game
        away={{ name: "ATL", score: 26, logo: scorelogo }}
        home={{ name: "NO", score: 9, logo: scorelogo }}
        final={true}
      />
      <div className="game__container3">
        <h3 className="game__container__title">NCAA</h3>
      </div>
      <Game
        type="same"
        away={{ name: "NYG", score: 27, logo: scorelogo }}
        home={{ name: "NYJ", score: 34, logo: scorelogo }}
        final={true}
      />
      <Game
        type="same"
        away={{ name: "ARI", score: 27, logo: scorelogo }}
        home={{ name: "TB", score: 30, logo: scorelogo }}
        final={true}
      />
      <Game
        away={{ name: "KC", score: 32, logo: scorelogo }}
        home={{ name: "TEN", score: 35, logo: scorelogo }}
        final={true}
      />

      <IconButton className="iconButton" aria-label="add an alarm">
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
};
export default ScorecardBar;
