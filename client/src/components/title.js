import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import player1 from "../assets/images/p1.png";
import player2 from "../assets/images/p2.png";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(3),
    minWidth: 220,
    backgroundColor: "white",
  },
  select: {
    backgroundColor: "white",
  },
  label: { color: "white" },
  selectEmpty: {
    marginTop: theme.spacing(2),
    backgroundColor: "white",
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    position: "realtive",
    color: "white",
    [theme.breakpoints.down("md")]: {
      marginBottom: "200px",
      marginRight: "auto",
      marginLeft: "auto",
      width: "50%",
    },
  },
  titleSpan: {
    color: "#2581B7",
  },
  container: {
    position: "relative",
  },
  formTop: {
    zIndex: "9",
    marginTop: "-170px",
    textAlign: "center",
    width: "100%",
  },
  player2: {
    marginLeft: "-20px",
    marginTop: "-50px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  player1: {
    marginTop: "-50px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
const Title = () => {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <Grid container>
        <Grid item xs={12} lg={3}>
          <div className={classes.player2}>
            <img src={player2} alt="p2" />
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <h1>
            fantasy football stats and{" "}
            <span className={classes.titleSpan}>season leaders</span>
          </h1>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className={classes.player1}>
            <img src={player1} alt="p1" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Title;
