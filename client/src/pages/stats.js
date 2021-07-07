import React from "react";
import Table from "../components/statsComponents/Table/table";
import Filter from "../components/statsComponents/Filter/filter";


const Stats = () => {
  return (
      <div className="overLay">
        <div className="field">
      <Filter />
      <Table />
    </div>
    </div>
  );
};
export default Stats;
