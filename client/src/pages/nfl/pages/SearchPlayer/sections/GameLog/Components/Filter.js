import classes from "../GameLog.module.css";
import { Select, FormControl, InputLabel, MenuItem } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },

  select: {
    borderRadius: "5px",

    background: "white",
    "&:hover": {
      background: "white",
    },
    "&:focus": {
      backgroundColor: "white",
    },
    "&:before": {
      borderColor: "white !important",
    },
    "&:after": {
      borderColor: "white !important",
    },
  },
  icon: {
    // fill: "white",
  },
}));
const Filter = () => {
  const classes2 = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.selectFlex}>
        <div>
          <FormControl variant="filled" className={classes2.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Season
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              // value={age}
              // onChange={handleChange}
              classes={{ root: classes2.select }}
              inputProps={{
                classes: {
                  icon: classes2.icon,
                },
              }}
              label="Season"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Season 1</MenuItem>
              <MenuItem value={20}>Season 2</MenuItem>
              <MenuItem value={30}>Season 3</MenuItem>
              <MenuItem value={10}>Season 4</MenuItem>
              <MenuItem value={20}>Season 5</MenuItem>
              <MenuItem value={30}>Season 6</MenuItem>
              <MenuItem value={30}>Season 7</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl variant="filled" className={classes2.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              // value={age}
              // onChange={handleChange}
              classes={{ root: classes2.select }}
              inputProps={{
                classes: {
                  icon: classes2.icon,
                },
              }}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>2020</MenuItem>
              <MenuItem value={20}>2021</MenuItem>
              <MenuItem value={30}>2022</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
export default Filter;
