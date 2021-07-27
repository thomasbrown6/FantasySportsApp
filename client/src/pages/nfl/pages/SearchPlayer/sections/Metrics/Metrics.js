import React from "react";
import classes from "./Metrics.module.css";
import MetricsTable from "./Components/MetricsTable";
import DateToggle from "./Components/DateToggle";
import MetricToggle from "./Components/MetricToggle";
import {
  opportunityHead,
  productivityHead,
  advanceHead,
  efficencyHead,
  efficency2Head,
  formationHead,
  commonData,
  commonData2,
} from "./metricTableData";
const Metrics = () => {
  return (
    <div className={classes.metricsMain}>
      <div className={classes.metricToggleDiv}>
        <MetricToggle />
      </div>
      <div className={classes.metricsBox}>
        <div className={classes.metricsBar}>
          <div className={classes.toggelDateButton}>
            <DateToggle />
          </div>
          <div className={classes.breadCrumb}>
            <p className={classes.nextText}>
              next game <span className={classes.nextIcon}> » </span>{" "}
              <span className={classes.nextGroup}>nyg</span>
            </p>
            <div className={classes.breadRoundedBox}>
              <p>+3.43 (#8) vs. RB</p>
            </div>
          </div>
        </div>
        <div>
          <MetricsTable
            head={opportunityHead}
            commonData={commonData}
            text="OPPORTUNITY"
          />
          <MetricsTable
            head={productivityHead}
            commonData={commonData}
            text="PRODUCTIVITY"
          />
          <MetricsTable
            head={advanceHead}
            commonData={commonData}
            text="ADVANCED RECEIVING"
          />
          <MetricsTable
            head={efficencyHead}
            commonData={commonData2}
            text="EFFICIENCY"
          />
          <MetricsTable
            head={efficency2Head}
            commonData={commonData2}
            text="EFFICIENCY"
          />
          <MetricsTable
            head={formationHead}
            commonData={commonData2}
            text="FORMATION-SPECIFIC"
          />
        </div>
      </div>
    </div>
  );
};
export default Metrics;
