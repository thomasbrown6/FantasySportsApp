import Table from "./sections/CollapsibleTable/CollapsibleTable";
import DraftVideo from "./sections/DraftVideo/DraftVideo";
import DraftContent from "./sections/DraftContent/DraftContent";
import Grid from "@material-ui/core/Grid";
import classes from "../Schedule/Schedule.module.css";
import nflLogo from "../../assets/nflLogo.svg";
import React from 'react'
const Draft = () => {
  return (
    <div>
      <div className={classes.nflContainer}>
        <img src={nflLogo} alt="nflLogo" width="100px" />
        <h2>DRAFT</h2>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <DraftVideo />
        </Grid>
        <Grid item xs={7}>
          <Table />
        </Grid>
        <Grid item xs={2}>
          <DraftContent />
        </Grid>
      </Grid>
    </div>
  );
};
export default Draft;
