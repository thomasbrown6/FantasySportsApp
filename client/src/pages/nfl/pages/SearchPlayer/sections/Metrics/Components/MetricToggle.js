import classes from "../Metrics.module.css";
import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
const MetricToggle = () => {
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
            root: classes.metricToggle,
            selected: classes.metricSelected,
          }}
          aria-label="left aligned"
        >
          <p>Metrics</p>
        </ToggleButton>
        <ToggleButton
          value="center"
          classes={{
            root: classes.metricToggle,
            selected: classes.metricSelected,
          }}
          aria-label="centered"
        >
          <p>Game Log</p>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};
export default MetricToggle;
