import classes2 from "./ScheduleTable.module.css";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core/";
import Box from "./Components/Box";
// import redBox from "../../../../Assets/redBox.svg";
// import blueBox from "../../../../Assets/blueBox.svg";
import boxLogo from "../../../../assets/boxLogo.svg";
import { classes } from "istanbul-lib-coverage";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    marginBottom: "200px",
    "& > *": {
      borderBottom: "unset",
    },
  },
  tableHead: {
    fontSize: "12px !important",
    fontWeight: "500 !important",
  },
});

function createData(matchup, time, nat, tickets, location) {
  return { matchup, time, nat, tickets, location };
}
const matchUp = (logo1, name1, logo2, name2) => (
  <div className={classes2.matchupFlex}>
    <div className={classes2.box1}>
      <Box type="red" />
      <img
        src={logo1}
        className={classes2.boxLogo}
        width="35px"
        alt="boxLogo"
      />
    </div>

    <p className={classes2.teamName}>{name1}</p>
    <p className={classes2.spanText}>AT</p>
    <div className={classes2.box}>
      <Box type="blue" />
      <img
        src={logo2}
        className={classes2.boxLogo}
        width="35px"
        alt="boxLogo"
      />
    </div>
    <p>{name2}</p>
  </div>
);
// const rows = [
//   createData(
//     matchUp(boxLogo, "Falcon"),
//     "5:50 AM",
//     "",
//     "Tickets as low as $150",
//     "Bills Stadium, Orchard Park"
//   ),
//   createData(
//     matchUp(boxLogo, "Falcon"),
//     "5:50 AM",
//     "",
//     "Tickets as low as $150",
//     "Bills Stadium, Orchard Park"
//   ),
// ];
const ScheduleTable = (props) => {
  const classes = useStyles();
  console.log(props.tableData);
  return (
    <div>
      <div className={classes2.dateContainer}>
        <Grid container>
          <Grid item xs={12} lg={4}>
            <div className={classes2.dateHeader}>
              <p>{props.date}</p>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes2.dateContainer}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHead}>MATCHUP</TableCell>
                <TableCell align="right" className={classes.tableHead}>
                  TIME
                </TableCell>
                <TableCell align="right" className={classes.tableHead}>
                  NAT TV
                </TableCell>
                <TableCell align="right" className={classes.tableHead}>
                  TICKETS(g)
                </TableCell>
                <TableCell align="right" className={classes.tableHead}>
                  LOCATION
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.tableData.map((row, index) => (
                <TableRow
                  className={classes.root}
                  style={
                    index % 2
                      ? { background: "#F8F8F8" }
                      : { background: "white" }
                  }
                  key={index}
                >
                  <TableCell component="th" scope="row">
                    {matchUp(
                      row.matchup.team1Logo,
                      row.matchup.team1Name,
                      row.matchup.team2Logo,
                      row.matchup.team2Name
                    )}
                  </TableCell>
                  <TableCell align="right" className={classes2.cellColor}>
                    {row.time}
                  </TableCell>
                  <TableCell align="right">{row.nat}</TableCell>
                  <TableCell align="right" className={classes2.cellColor}>
                    {row.tickets}
                  </TableCell>
                  <TableCell align="right" className={classes2.cellColor2}>
                    {row.location}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default ScheduleTable;
