import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
const Selector = () => {
  const [value, setValue] = React.useState(30);
  const PrettoSlider = withStyles({
    root: {
      color: "#59595B",
      height: 8,
    },
    thumb: {
      height: 15,
      width: 44,
      backgroundColor: "#3D98D1",
      border: "1px solid currentColor",
      marginTop: -4,
      marginLeft: -12,
      borderRadius: "10px",
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit",
      },
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)",
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Grid item xs={6}>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={20}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Selector;
