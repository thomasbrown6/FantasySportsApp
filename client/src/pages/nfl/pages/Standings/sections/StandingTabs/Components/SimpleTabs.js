import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import classes from "../StandingTabs.module.css";
export default function DisabledTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.simpleTab}>
      <Tabs
        value={value}
        onChange={handleChange}
        classes={{ root: classes.tabs, indicator: classes.indicator }}
        aria-label="disabled tabs example"
      >
        <Tab label="LEAGUE" />
        <Tab label="CONFERENCE" />
        <Tab label="DIVISION" />
      </Tabs>
    </div>
  );
}
