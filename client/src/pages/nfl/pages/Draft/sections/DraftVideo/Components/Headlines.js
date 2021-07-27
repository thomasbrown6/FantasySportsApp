import React from 'react'

import classes from "../DraftVideo.module.css";
import HeadIcon from "./HeadIcon";
const headline = [
  { id: 1, text: "QB Lawrence to stay at Clemson? 'Who knows?'" },
  { id: 2, text: "QB Lawrence to stay at Clemson? 'Who knows?'" },
  { id: 3, text: "QB Lawrence to stay at Clemson? 'Who knows?'" },
  { id: 4, text: "QB Lawrence to stay at Clemson? 'Who knows?'" },
  { id: 5, text: "QB Lawrence to stay at Clemson? 'Who knows?'" },
];
const Headlines = () => {
  return (
    <div className={classes.headMain}>
      <h2>Top Headlines</h2>
      <div className={classes.icon}>
        <HeadIcon />
      </div>
      {headline.map((data, index) => (
        <div key={data.id} className={classes.paraBox}>
          <div className={classes.paraText}>
            <p>{data.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Headlines;
