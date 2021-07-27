import classes from "./DraftVideo.module.css";
import thumb from "../../assets/thumbnail.png";
import Headlines from "./Components/Headlines";
import HeadIcon from "./Components/HeadIcon";
import React from 'react'
const DraftVideo = () => {
  return (
    <div className={classes.main}>
      <h2>draft videos</h2>
      <div className={classes.icon}>
        <HeadIcon />
      </div>
      <div className={classes.thumbBox}>
        <div className={classes.flex}>
          <div className={classes.imageThumb}>
            <img src={thumb} width="120px" alt="thumbnail" />
          </div>
          <div className={classes.boxText}>
            <p>10/9/2020</p>
            <h2>Fantasy Football sleepers:</h2>
            <h2>Week 5</h2>
            <p>
              Fantasy Football Sleepers for Week 5 As the late-great Eddie Van
              Halen....
            </p>
          </div>
        </div>
      </div>
      <div className={classes.thumbBox}>
        <div className={classes.flex}>
          <div className={classes.imageThumb}>
            <img src={thumb} width="120px" alt="thumbnail" />
          </div>
          <div className={classes.boxText}>
            <p>10/9/2020</p>
            <h2>Fantasy Football sleepers:</h2>
            <h2>Week 5</h2>
            <p>
              Fantasy Football Sleepers for Week 5 As the late-great Eddie Van
              Halen....
            </p>
          </div>
        </div>
      </div>
      <div>
        <Headlines />
      </div>
    </div>
  );
};
export default DraftVideo;
