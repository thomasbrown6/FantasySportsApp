import classes from "./DraftContent.module.css";
import MainCard from "./Components/MainCard";
import SecondaryCard from "./Components/SecondaryCard";
import HeadIcon from "../DraftVideo/Components/HeadIcon";
import React from 'react'
const DraftContent = () => {
  return (
    <div>
      <div className={classes.mainHeading}>
        <h2>2020 draft content</h2>
        <div className={classes.icon}>
          <HeadIcon />
        </div>
      </div>

      <MainCard />
      <div>
        <SecondaryCard />
      </div>
      <div className={classes.secondaryCard}>
        <SecondaryCard />
      </div>
    </div>
  );
};
export default DraftContent;
