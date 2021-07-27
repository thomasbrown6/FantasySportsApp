import classes from "../Metrics.module.css";
import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
const DateToggle = () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div>
      {" "}
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton
          value="left"
          classes={{
            root: classes.toggleButton1,
            selected: classes.selected,
          }}
          aria-label="left aligned"
        >
          2020 (6 GMS)
        </ToggleButton>
        <ToggleButton
          value="center"
          classes={{
            root: classes.toggleButton2,
            selected: classes.selected,
          }}
          aria-label="centered"
        >
          2019 (9 GMS)
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};
export default DateToggle;
