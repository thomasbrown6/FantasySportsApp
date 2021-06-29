import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classes2 from "./SecondaryNavbar.module.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#242424 !important",
    height: "35px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  bar: {
    textAlign: "center",
    margin: "auto",
    width: "95%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  },
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    marginBottom: "25px",
    justifyContent: "flex-end",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function SecondaryNavbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const links = (
    <ul className={classes2.menu}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Scores</a>
      </li>
      <li>
        <a href="#">Schedule</a>
      </li>
      <li>
        <a href="#">Standings</a>
      </li>
      <li>
        <a href="#">Stats</a>
      </li>
      <li>
        <a href="#">Teams</a>
      </li>
      <li>
        <a href="#">Injuries</a>
      </li>
    </ul>
  );
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        {" "}
        <a href="#">Homes</a>
      </MenuItem>
      <MenuItem>
        {" "}
        <a href="#">Scores</a>
      </MenuItem>
      <MenuItem>
        {" "}
        <a href="#">Schedule</a>
      </MenuItem>
      <MenuItem>
        {" "}
        <a href="#">Standings</a>
      </MenuItem>
      <MenuItem>
        {" "}
        <a href="#">Stats</a>
      </MenuItem>
      <MenuItem>
        {" "}
        <a href="#">Terms</a>
      </MenuItem>
      <MenuItem>
        {" "}
        <a href="#">Injuries</a>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.bar}>
          <div className={classes.sectionDesktop}>
            {links}
            <div className={classes.grow} />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
