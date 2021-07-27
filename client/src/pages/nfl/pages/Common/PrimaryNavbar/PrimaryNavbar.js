import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";
import classes2 from "./PrimaryNavbar.module.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import TestNav from "../TestNav/TestNav";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import logo from "../../../assets/logo.svg";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "black !important",
    height: "40px",
  },
  bar: {
    textAlign: "center",
    margin: "auto",
    width: "85%",
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
    marginBottom: "15px",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  sectionDesktop: {
    display: "none",
    marginBottom: "20px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    marginBottom: "20px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  paper: {
    backgroundColor: "black",
    color: "white",
  },
  button: {
    backgroundColor: "white",
    marginTop: "10px",
  },
  mobileLogo: {
    textAlign: "center",
  },
  accordation: {
    color: "white",
    backgroundColor: "black",
  },
  accordationDetails: {
    marginBottom: "-25px",
    marginTop: "-20px",
    color: "black",
    backgroundColor: "white",
  },
}));

export default function PrimaryNavbar() {
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

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Login</MenuItem>
      <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const secondaryBarLinks = (
    <Accordion className={classes.accordation}>
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Typography className={classes.heading}>NFL</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordationDetails}>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
      </AccordionDetails>
      <AccordionDetails className={classes.accordationDetails}>
        <ListItem button>
          <ListItemText primary="Scores" />
        </ListItem>
      </AccordionDetails>
      <AccordionDetails className={classes.accordationDetails}>
        <ListItem button>
          <ListItemText primary="Schedule" />
        </ListItem>
      </AccordionDetails>
      <AccordionDetails className={classes.accordationDetails}>
        <ListItem button>
          <ListItemText primary="Standings" />
        </ListItem>
      </AccordionDetails>
      <AccordionDetails className={classes.accordationDetails}>
        <ListItem button>
          <ListItemText primary="Stats" />
        </ListItem>
      </AccordionDetails>
      <AccordionDetails className={classes.accordationDetails}>
        <ListItem button>
          <ListItemText primary="Teams" />
        </ListItem>
      </AccordionDetails>
      <AccordionDetails className={classes.accordationDetails}>
        <ListItem button>
          <ListItemText primary="Injuries" />
        </ListItem>
      </AccordionDetails>
    </Accordion>
  );
  const links = (
    <ul className={classes2.menu}>
      <li className={classes2.nav__menuItem}>
        <a href="!">NFL</a>
        <TestNav />
      </li>
      <li>
        <a href="#">NCAAF</a>
      </li>
      <li>
        <a href="#">STATS</a>
      </li>
      <li>
        <a href="#">FANTASY</a>
      </li>
      <li>
        <a href="#">ARTICLES</a>
      </li>
      <li>
        <a href="#">NEWS</a>
      </li>
      <li>
        <a href="#">HELP</a>
      </li>
      <li>
        <a href="#">ABOUT</a>
      </li>
    </ul>
  );
  const list = (
    <div className={classes.list}>
      <div className={classes.mobileLogo}>
        <img src={logo} alt="logo" />
      </div>
      <Grid container justify="center" alignItems="center" spacing={0}>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <Button variant="outlined" className={classes.button}>
            Login
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Button variant="outlined" className={classes.button}>
            Sign Up
          </Button>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <List>
        {secondaryBarLinks}

        <ListItem button>
          <ListItemText primary="NCAAF" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="STATS" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="FANTASY" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="ARTICLES" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="NEWS" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="HELP" />
        </ListItem>
      </List>
    </div>
  );
  const renderMobileMenu = (
    <React.Fragment>
      <Drawer
        classes={{ paper: classes.paper }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        {list}
      </Drawer>
    </React.Fragment>
  );

  return (
    <div className={classes.grow}>
      <div className={classes2.box}></div>

      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.bar}>
          <Typography className={classes.title} variant="h6" noWrap>
            <img width="70px" src={logo} alt="logo" />
          </Typography>

          <div className={classes.sectionDesktop}>
            {links}

            <div className={classes.grow} />
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              //   className={classes2.account}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <SearchIcon />
              <label className={classes2.label}>LOGIN</label>
            </IconButton>
          </div>
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
      {renderMenu}
    </div>
  );
}
