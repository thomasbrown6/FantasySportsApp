import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import Cardgroup from './cardgroup';
import Card from "react-bootstrap/Card";
//import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from "react-bootstrap/Carousel";
import moment from "moment";
import Cardgroup from "./cardgroup";
import Game from "./game";
import ScoreCard from "./scorecard/ScoreCard";

//Actions
import { getNCAALiveScores } from "../actions/ncaa";
import Spinner from "./layout/Spinner";
import { set } from "mongoose";

// fix the class extends into a Function component This will be where Thomas's API will target.

const Scores = ({
  auth: { user },
  ncaa: {
    divisions: { fcs_live_scores },
    loaded,
  },
  getNCAALiveScores,
}) => {
  //get live updates on page load
  useEffect(() => {
    getNCAALiveScores("fcs-live");
  }, [fcs_live_scores]);

  //get live updates every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      getNCAALiveScores("fcs-live");
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="scores">
      <h1 id="scorestext">NCAA Scores</h1>
      <br></br>

      <ScoreCard games={fcs_live_scores} />
    </div>
  );
};

Scores.propTypes = {
  auth: PropTypes.object.isRequired,
  ncaa: PropTypes.object.isRequired,
  getNCAALiveScores: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  ncaa: state.ncaa,
});

export default connect(mapStateToProps, { getNCAALiveScores })(Scores);
