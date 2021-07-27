import React, { useState, useEffect } from "react";
import classes from "./Table.module.css";
import Pages from "./Components/Pages";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import svgg from "../../../../assets/secondHeader2.svg";
import { tableData } from "./data";
const Table = () => {
  const data = tableData;
  const [items, setItem] = useState(10);
  const changeItem = (event, value) => {
    if (typeof event === "object") {
      event.preventDefault();
    }
    if (value !== "all") {
      setItem(value);
    } else {
      setItem("all");
    }
  };
  return (
    <div className={classes.align}>
      <div className={classes.secondHeaderBackground}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1706.133 50">
          <defs>
            <linearGradient
              id="linear-gradient"
              x2="0.852"
              y2="0.838"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#2e9cd5" />
              <stop offset="1" stopColor="#0b3c75" />
            </linearGradient>
          </defs>
          <path
            id="Path_76"
            data-name="Path 76"
            d="M44.8-.735l1661.328.21L1660.154,72.52H0Z"
            transform="translate(0 0.735)"
            fill="url(#linear-gradient)"
          />
        </svg>
      </div>
      <div className={classes.firstHeaderBackground}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 783.632 50">
          <defs>
            <linearGradient
              id="linear-gradient"
              x2="0.852"
              y2="0.838"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#2e9cd5" />
              <stop offset="1" stopColor="#0b3c75" />
            </linearGradient>
          </defs>
          <path
            id="Path_8300"
            data-name="Path 8300"
            d="M20.579-.735l763.053.169L762.513,58.265H0Z"
            transform="translate(0 0.735)"
            opacity="0.94"
            fill="url(#linear-gradient)"
          />
        </svg>
      </div>
      <div className={classes.table}>
        <table className={classes.tableTag}>
          <thead>
            <tr className={classes.firstHeader}>
              <th></th>
              <th colSpan="1">
                {" "}
                <div className={classes.nameButton}>
                  <Button size="small">NFL</Button>
                  <Button size="small">NCAAF</Button>
                </div>
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th colSpan="3">Passing</th>
              <th colSpan="2">Rushing</th>
              <th colSpan="3">Recieving</th>
              <th colSpan="7">Defense</th>
            </tr>

            <tr className={classes.secondHeader}>
              <th>RK</th>
              <th>NAME</th>
              <th>TEAM</th>
              <th>POS</th>
              <th>WK</th>
              <th>OPP</th>
              <th>FPTS/G</th>
              <th>FPTS</th>
              <th>YDS</th>
              <th>TD</th>
              <th>INT</th>
              <th>YDS</th>
              <th>TD</th>
              <th>REC</th>
              <th>YDS</th>
              <th>TD</th>
              <th>TT</th>
              <th>AST</th>
              <th>TD</th>
              <th>SCK</th>
              <th>INT</th>
              <th>FF</th>
              <th>FR</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data
              .slice(0, items !== "all" ? items : data.length)
              .map((data, index) => (
                <tr key={index}>
                  <td className={classes.tableTd}>{data.rk}</td>
                  <td style={{ padding: "0px" }} className={classes.tableTd}>
                    <div className={classes.nameCol}>
                      <Grid container spacing={3}>
                        <Grid
                          item
                          xs={3}
                          lg={3}
                          className={classes.avatarContainer}
                        >
                          {data.person.avatar}
                        </Grid>
                        <Grid item xs={9} lg={9}>
                          <p className={classes.name}>{data.person.name}</p>
                          <p className={classes.details}>
                            {data.person.details}
                          </p>
                        </Grid>
                      </Grid>
                    </div>
                  </td>
                  <td className={classes.tableTd}>{data.team}</td>
                  <td className={classes.tableTd}>{data.pos}</td>
                  <td className={classes.tableTd}>{data.wk}</td>
                  <td className={classes.tableTd}>{data.opp}</td>
                  <td className={classes.tableTd}>{data.fptsg}</td>
                  <td className={classes.tableTd}>{data.fpts}</td>
                  <td className={classes.tableTd}>{data.yds}</td>
                  <td className={classes.tableTd}>{data.td}</td>
                  <td className={classes.tableTd}>{data.int}</td>
                  <td className={classes.tableTd}>{data.yds2}</td>
                  <td className={classes.tableTd}>{data.td2}</td>
                  <td className={classes.tableTd}>{data.rec}</td>
                  <td className={classes.tableTd}>{data.yds3}</td>
                  <td className={classes.tableTd}>{data.td3}</td>
                  <td className={classes.tableTd}>{data.tt}</td>
                  <td className={classes.tableTd}>{data.ast}</td>
                  <td className={classes.tableTd}>{data.td4}</td>
                  <td className={classes.tableTd}>{data.sck}</td>
                  <td className={classes.tableTd}>{data.int2}</td>
                  <td className={classes.tableTd}>{data.ff}</td>
                  <td className={classes.tableTd}>{data.rr}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pages
        changeItem={(event, value) => changeItem(event, value)}
        items={items}
      />
    </div>
  );
};
export default Table;
