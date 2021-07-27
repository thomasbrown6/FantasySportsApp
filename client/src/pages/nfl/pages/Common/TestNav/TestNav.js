import React from 'react'
import classes from "../PrimaryNavbar/PrimaryNavbar.module.scss";
import { NavLink, BrowserRouter } from "react-router-dom";
const TestNav = () => {
  return (
    <ul className={classes.nav__submenu}>
      <li className={classes.nav__submenuItem}>
        <NavLink to="/home" exact activeClassName={classes.activeNav}>
          Home
        </NavLink>
      </li>
      <li className={classes.nav__submenuItem}>
        <NavLink to="/search-player" exact activeClassName={classes.activeNav}>
          Player Profile
        </NavLink>
      </li>
      <li className={classes.nav__submenuItem}>
        <NavLink to="/draft" exact activeClassName={classes.activeNav}>
          NFL Draft
        </NavLink>
      </li>
      <li className={classes.nav__submenuItem}>
        <NavLink to="/scoreboard" exact activeClassName={classes.activeNav}>
          Scores
        </NavLink>
      </li>
      <li className={classes.nav__submenuItem}>
        <NavLink to="/schedule" exact activeClassName={classes.activeNav}>
          Schedule
        </NavLink>
      </li>
      <li className={classes.nav__submenuItem}>
        <NavLink to="/standings" exact activeClassName={classes.activeNav}>
          Standings
        </NavLink>
      </li>
      <li className={classes.nav__submenuItem}>
        <NavLink to="/stats" exact activeClassName={classes.activeNav}>
          Stats
        </NavLink>
      </li>
      <li className={classes.nav__submenuItem}>
        <NavLink to="/teams" exact activeClassName={classes.activeNav}>
          Teams
        </NavLink>
      </li>
      <li className={classes.nav__submenuItem}>
        <NavLink to="/injuries" exact activeClassName={classes.activeNav}>
          Injuries
        </NavLink>
      </li>
    </ul>
  );
};
export default TestNav;
