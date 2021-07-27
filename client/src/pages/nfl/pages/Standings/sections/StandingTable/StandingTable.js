import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Box from "./Components/Box";
import boxLogo from "../../../../assets/boxLogo.svg";
import Paper from "@material-ui/core/Paper";
import classes2 from "./StandingTable.module.css";
function createData(
  afc,
  w,
  l,
  t,
  pct,
  home,
  away,
  div,
  conf,
  pf,
  pa,
  diff,
  strk
) {
  return { afc, w, l, t, pct, home, away, div, conf, pf, pa, diff, strk };
}

function descendingComparator(a, b, orderBy) {
  console.log(a, b, orderBy);
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  console.log(order, orderBy);
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  console.log(array, comparator);
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  console.log(stabilizedThis);
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "pct",
    numeric: true,
    disablePadding: false,
    label: "PCT",
  },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort, teamName } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell align="left" className={classes2.borderRight}>
          {teamName}
        </TableCell>
        <TableCell align="right">W</TableCell>
        <TableCell align="right">L&nbsp;(g)</TableCell>
        <TableCell align="right">T</TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            className={classes2.borderRight}
            align="right"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={headCell.id === "pct" ? orderBy === headCell.id : null}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={
                headCell.id === "pct" ? createSortHandler(headCell.id) : null
              }
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}

        <TableCell align="right">HOME</TableCell>
        <TableCell align="right">AWAY</TableCell>
        <TableCell align="right">DIV</TableCell>
        <TableCell align="right" className={classes2.borderRight}>
          CONF
        </TableCell>
        <TableCell align="right">PF</TableCell>
        <TableCell align="right">PA</TableCell>
        <TableCell align="right" className={classes2.borderRight}>
          DIFF
        </TableCell>
        <TableCell align="right">STRK</TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    // marginTop: "20px",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <div className={classes.root}>
      <div className={classes2.dateContainer}>
        <Grid container>
          <Grid item xs={12} lg={4}>
            <div className={classes2.dateHeader}>
              <p>{props.conference}</p>
            </div>
          </Grid>
        </Grid>
      </div>
      <Paper className={classes.paper}>
        {props.tableData.map((rows, index) => (
          <TableContainer key={index}>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.match.length}
                teamName={rows.teamName}
              />
              <TableBody>
                {stableSort(rows.match, getComparator(order, orderBy)).map(
                  (row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        style={
                          index % 2
                            ? { background: "#F8F8F8" }
                            : { background: "white" }
                        }
                        tabIndex={-1}
                        key={row.pct}
                      >
                        <TableCell
                          className={`${classes2.borderRight} `}
                          component="th"
                          id={labelId}
                          scope="row"
                        >
                          {row.afc}
                        </TableCell>
                        <TableCell align="right" className={classes2.cellColor}>
                          {row.w}
                        </TableCell>
                        <TableCell align="right" className={classes2.cellColor}>
                          {" "}
                          {row.l}
                        </TableCell>
                        <TableCell align="right" className={classes2.cellColor}>
                          {row.t}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={
                            index % 2
                              ? { background: "#DCEDF6", color: "#49494b" }
                              : { background: "#e9f7ff", color: "#49494b" }
                          }
                          className={`${classes2.borderRight} `}
                        >
                          {row.pct}
                        </TableCell>
                        <TableCell align="right" className={classes2.cellColor}>
                          {row.home}
                        </TableCell>
                        <TableCell align="right" className={classes2.cellColor}>
                          {row.away}
                        </TableCell>
                        <TableCell align="right" className={classes2.cellColor}>
                          {row.div}
                        </TableCell>
                        <TableCell
                          align="right"
                          className={`${classes2.borderRight} ${classes2.cellColor}`}
                        >
                          {row.conf}
                        </TableCell>
                        <TableCell align="right" className={classes2.cellColor}>
                          {row.pf}
                        </TableCell>
                        <TableCell align="right" className={classes2.cellColor}>
                          {row.pa}
                        </TableCell>
                        <TableCell
                          align="right"
                          className={`${classes2.borderRight} ${
                            row.diff < 0
                              ? classes2.redColor
                              : classes2.greenColor
                          }`}
                        >
                          {row.diff}
                        </TableCell>
                        <TableCell align="right" className={classes2.cellColor}>
                          {row.strk}
                        </TableCell>
                      </TableRow>
                    );
                  }
                )}
              </TableBody>
            </Table>
          </TableContainer>
        ))}
      </Paper>
    </div>
  );
}
