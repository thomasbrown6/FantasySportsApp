import classes2 from "./Table.module.css";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import rowIcon from "../../assets/rowIcon1.svg";
import Card from "./Components/Card";
import { tableData } from "./tableData";
const useRowStyles = makeStyles({
  root: {
    marginBottom: "200px",
    "& > *": {
      borderBottom: "unset",
    },
  },
  table: {
    minWidth: 700,
  },
  tablePagination: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    height: "100px",
    "& .MuiPaginationItem-icon": {
      border: "1px solid black",
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  console.log(props);
  return (
    <React.Fragment>
      <TableRow
        className={classes.root}
        style={
          props.dKey % 2 ? { background: "white" } : { background: "#F8F8F8" }
        }
      >
        <TableCell align="center">{row.rk}</TableCell>
        <TableCell align="center">
          <img src={rowIcon} alt="rowIcon" width="20px" /> &nbsp; {row.player}
        </TableCell>
        <TableCell align="center">{row.school}</TableCell>
        <TableCell align="center">{row.pos}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className={classes2.box}>
              <Card />
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    rk: PropTypes.number.isRequired,
    player: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    pos: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default function CollapsibleTable() {
  const classes = useRowStyles();
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const paginationFunct = (event, page) => {
    console.log(event, page);
    setPage(page);
  };
  return (
    <div className={classes2.main}>
      <div className={classes2.tableHeaderPara}>
        <div className={classes2.paraContainer}>
          <h4>OVR</h4>
          <h4>QB</h4>
          <h4>RB</h4>
          <h4>WR</h4>
          <h4>TE</h4>
          <h4>FB</h4>
          <h4>OT</h4>
          <h4>OG</h4>
          <h4>C</h4>
          <h4>DE</h4>
          <h4>DT</h4>
          <h4>ILB</h4>
          <h4>OLB</h4>
          <h4>CB</h4>
          <h4>S</h4>
          <h4>LS</h4>
        </div>
      </div>
      <TableContainer component={Paper} className={classes2.tableWidth}>
        <Table className={classes.table} aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="center">RK </TableCell>
              <TableCell align="center">PLAYER</TableCell>
              <TableCell align="center">SCHOOL</TableCell>
              <TableCell align="center">POS</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData
              .slice(
                (page - 1) * rowsPerPage,
                (page - 1) * rowsPerPage + rowsPerPage
              )
              .map((row, index) => (
                <Row key={index} dKey={index} row={row} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className={classes.tablePagination}>
        <Pagination
          shape="rounded"
          className={classes2.tablePagination}
          count={Math.ceil(tableData.length / 25)}
          page={page}
          onChange={paginationFunct}
        />
      </div>
    </div>
  );
}
