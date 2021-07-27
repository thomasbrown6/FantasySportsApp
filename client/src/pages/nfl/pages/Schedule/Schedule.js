import React, { useState } from "react";
import classes from "./Schedule.module.css";
import Table from "./sections/Table/Table";
import nflLogo from "../../assets/nflLogo.svg";
import { tableData1, tableData2 } from "./sections/Table/tableData";
import Filter from "./sections/Filter/Filter";
const Schedule = () => {
  return (
    <div>
      <div className={classes.nflContainer}>
        <img src={nflLogo} alt="nflLogo" width="100px" />
        <h2>Schedule - 2020</h2>
      </div>
      <Filter />
      <Table date="Thursday, 29 October" tableData={tableData1} />
      <Table date="Sunday, 1 November" tableData={tableData2} />
      <Table date="Monday, 2 November" tableData={tableData1} />
    </div>
  );
};
export default Schedule;
