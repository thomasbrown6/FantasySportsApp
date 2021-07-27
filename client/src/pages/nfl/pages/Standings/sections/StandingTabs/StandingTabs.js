import React from "react";
import classes from "./StandingTabs.module.css";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import SimpleTabs from "./Components/SimpleTabs";
const StandingTabs = () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <div className={classes.container}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            value="left"
            classes={{ root: classes.toggleButton, selected: classes.selected }}
          >
            <p>Standings</p>
          </ToggleButton>
          <ToggleButton
            value="center"
            classes={{ root: classes.toggleButton, selected: classes.selected }}
          >
            <p>Playoff</p>
          </ToggleButton>
          <ToggleButton
            value="right"
            classes={{ root: classes.toggleButton, selected: classes.selected }}
          >
            <p>Expanded</p>
          </ToggleButton>
          <ToggleButton
            value="justify"
            classes={{ root: classes.toggleButton, selected: classes.selected }}
          >
            <p> Vs. Division</p>
          </ToggleButton>
        </ToggleButtonGroup>
        <div>
          <SimpleTabs />
        </div>
      </div>
    </div>
  );
};
export default StandingTabs;
