import classes from "./Footer.module.css";
import Grid from "@material-ui/core/Grid";
import logo from "../../../assets/logo.svg";
import React from 'react'
export const Fotter = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.overlay}>
        <Grid container direction="row" justify="center">
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <div className={classes.leftBox}>
              <div className={classes.logo}>
                <img src={logo} alt="logo" width="100px" />
              </div>
              <div className={classes.contact}>
                <p>1145 Forrest St.</p>
                <p>Suite 200 Conshohocken, PA 19428</p>
                <span>+01 12345 67890</span>
                <p>cerberusfootballfantasy@example.com</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <ul className={classes.list}>
              <h1>API SOLUTIONS</h1>
              <li>
                <a href="!">Sports Data</a>{" "}
              </li>
              <li>
                <a href="!">NFL API</a>{" "}
              </li>
              <li>
                <a href="!">MLB API</a>{" "}
              </li>
              <li>
                <a href="!">NBA API</a>{" "}
              </li>
              <li>
                <a href="!">NHL API</a>{" "}
              </li>
              <li>
                <a href="!">NCAA FOOTBALL API</a>{" "}
              </li>
              <li>
                <a href="!">NCAA BASKETBALL API</a>{" "}
              </li>
              <li>
                <a href="!">PGA GOLD API</a>{" "}
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <ul className={classes.list}>
              <h1>QUICK LINKS</h1>
              <li>
                <a href="!">Privacy</a>{" "}
              </li>
              <li>
                <a href="!">Do Not Sell</a>{" "}
              </li>
              <li>
                <a href="!">Terms</a>{" "}
              </li>
              <li>
                <a href="!">Blog</a>{" "}
              </li>
              <li>
                <a href="!">Contact</a>{" "}
              </li>
              <li>
                <a href="!">Help</a>{" "}
              </li>
              <li>
                <a href="!">Register</a>{" "}
              </li>
              <li>
                <a href="!">Log in</a>{" "}
              </li>
            </ul>
            {/* <div className={classes.copyrightText}>
              <p>© Copyright 2020 Cerberus Football Fantasy</p>
            </div> */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Fotter;
