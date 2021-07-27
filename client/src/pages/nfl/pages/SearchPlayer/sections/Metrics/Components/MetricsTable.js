import classes from "../Metrics.module.css";
import React, { useState, useEffect } from "react";
const MetricsTable = (props) => {
  const [headData, setHeadData] = useState(props.head);
  const [data, setData] = useState(props.commonData);
  useEffect(() => {
    setHeadData(props.head);
    setData(props.commonData);
  }, [props]);

  return (
    <div className={classes.metricTableMain}>
      <div className={classes.tableHeadFlex}>
        <div className={classes.tableHeadLeft}>
          <div className={classes.blueBox}></div>
          <p>{props.text}</p>
        </div>
        <div className={classes.tableHeadRight}>
          <p>Analyze</p>
        </div>
      </div>
      <div className={classes.metricsTable}>
        <table className={classes.table}>
          <tr className={classes.trHead}>
            {headData !== undefined &&
              headData.map((th, i) => <th key={i}> {th} </th>)}
          </tr>
          {data.map((row, i) => (
            <tr className={classes.trData} key={i}>
              <td>{row.one} </td>
              <td>{row.two} </td>
              <td>{row.three} </td>
              <td>{row.four} </td>
              <td>{row.five} </td>
              <td>{row.six} </td>
              <td>{row.seven} </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
export default MetricsTable;
