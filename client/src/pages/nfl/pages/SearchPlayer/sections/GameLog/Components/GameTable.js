import classes2 from "../GameLog.module.css";
import classnames from "classnames";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { tableData1 } from "./tableData";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

export default function GameTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={3}>
              2020 REGULAR SEASON
            </TableCell>
            <TableCell align="center" colSpan={11}>
              PASSING
            </TableCell>
            <TableCell align="center" colSpan={5} className={classes2.lastCol}>
              RUSHING
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>DATE</TableCell>
            <TableCell align="center">OPP</TableCell>
            <TableCell align="right">RESULT</TableCell>
            <TableCell align="right">CMP</TableCell>
            <TableCell align="right">ATT</TableCell>
            <TableCell align="right">YDS</TableCell>
            <TableCell align="right">CMP%</TableCell>
            <TableCell align="right">AVG</TableCell>
            <TableCell align="right">TD</TableCell>
            <TableCell align="right">INT</TableCell>
            <TableCell align="right">LNG</TableCell>
            <TableCell align="right">SACK</TableCell>
            <TableCell align="right">RTG</TableCell>
            <TableCell align="right">QBR</TableCell>
            <TableCell align="right" className={classes2.lastCol}>
              ATT
            </TableCell>
            <TableCell align="right">YDS</TableCell>
            <TableCell align="right">AVG</TableCell>
            <TableCell align="right">TD</TableCell>
            <TableCell align="right">LNG</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData1.map((row, i) => (
            <TableRow key={i}>
              <TableCell className={classes2.tableRowData}>
                {row.date}
              </TableCell>
              <TableCell align="right">{row.opp}</TableCell>
              <TableCell align="right">{row.result}</TableCell>
              <TableCell align="right" className={classes2.tableRowData}>
                {row.cmp}
              </TableCell>
              <TableCell align="right" className={classes2.tableRowData}>
                {row.att}
              </TableCell>
              <TableCell align="right" className={classes2.tableRowData}>
                {row.yds}
              </TableCell>
              <TableCell align="right" className={classes2.tableRowData}>
                {row.cmp2}
              </TableCell>
              <TableCell align="right" className={classes2.tableRowData}>
                {row.avg}
              </TableCell>
              <TableCell align="right" className={classes2.tableRowData}>
                {row.td}
              </TableCell>
              <TableCell align="right" className={classes2.tableRowData}>
                {row.int}
              </TableCell>
              <TableCell align="right" className={classes2.tableRowData}>
                {row.lng}
              </TableCell>
              <TableCell align="right" className={classes2.tableRowData}>
                {row.sack}
              </TableCell>
              <TableCell align="right" className={classes2.tableRowData}>
                {row.rtg}
              </TableCell>
              <TableCell align="right" className={classes2.tableRowData}>
                {row.qbr}
              </TableCell>
              <TableCell
                align="right"
                className={classnames(classes2.lastCol, classes2.tableRowData)}
              >
                {row.att2}
              </TableCell>
              <TableCell align="right" className={classes2.tableRowData}>
                {row.yds2}
              </TableCell>
              <TableCell align="right" className={classes2.tableRowData}>
                {row.avg2}
              </TableCell>
              <TableCell align="right" className={classes2.tableRowData}>
                {row.td2}
              </TableCell>
              <TableCell align="right" className={classes2.tableRowData}>
                {row.lng2}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
