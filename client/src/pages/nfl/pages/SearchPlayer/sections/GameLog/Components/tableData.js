import classes from "../GameLog.module.css";
import op1 from "../../../../../Assets/op1.svg";
import op2 from "../../../../../Assets/op2.svg";
const opp = (image, span) => (
  <div className={classes.oppFlex}>
    <div className={classes.oppSpan}>{span === "@" ? "@" : "vs"}</div>
    <div className={classes.oppImg}>
      <img src={image} alt="op1" />
    </div>
    <div className={classes.oppText}>
      <p>ari</p>
    </div>
  </div>
);
const result = (text, spanText, resultClass) => (
  <div>
    <p className={classes.resultText}>
      <span className={resultClass}>{spanText}</span> {text}
    </p>
  </div>
);
export const tableData1 = [
  {
    date: "Mon 11/16",
    opp: opp(op1, "@"),
    result: result("32-30", "L", classes.redResult),
    cmp: "32",
    att: "49",
    yds: "284",
    cmp2: "65",
    avg: "5.8",
    td: "2",
    int: "2",
    lng: "31",
    sack: "0",
    rtg: "77",
    qbr: "70",
    att2: "7",
    yds2: "38",
    avg2: "5.4",
    td2: "0",
    lng2: "15",
  },
  {
    date: "Mon 11/16",
    opp: opp(op2, "vs"),
    result: result("44-34", "W", classes.greenResult),
    cmp: "32",
    att: "49",
    yds: "284",
    cmp2: "65",
    avg: "5.8",
    td: "2",
    int: "2",
    lng: "31",
    sack: "0",
    rtg: "77",
    qbr: "70",
    att2: "7",
    yds2: "38",
    avg2: "5.4",
    td2: "0",
    lng2: "15",
  },
  {
    date: "Mon 11/16",
    opp: opp(op1, "@"),
    result: result("32-30", "L", classes.redResult),
    cmp: "32",
    att: "49",
    yds: "284",
    cmp2: "65",
    avg: "5.8",
    td: "2",
    int: "2",
    lng: "31",
    sack: "0",
    rtg: "77",
    qbr: "70",
    att2: "7",
    yds2: "38",
    avg2: "5.4",
    td2: "0",
    lng2: "15",
  },
  {
    date: "Mon 11/16",
    opp: opp(op2, "vs"),
    result: result("44-34", "W", classes.greenResult),
    cmp: "32",
    att: "49",
    yds: "284",
    cmp2: "65",
    avg: "5.8",
    td: "2",
    int: "2",
    lng: "31",
    sack: "0",
    rtg: "77",
    qbr: "70",
    att2: "7",
    yds2: "38",
    avg2: "5.4",
    td2: "0",
    lng2: "15",
  },
  {
    date: "Mon 11/16",
    opp: opp(op1, "@"),
    result: result("32-30", "L", classes.redResult),
    cmp: "32",
    att: "49",
    yds: "284",
    cmp2: "65",
    avg: "5.8",
    td: "2",
    int: "2",
    lng: "31",
    sack: "0",
    rtg: "77",
    qbr: "70",
    att2: "7",
    yds2: "38",
    avg2: "5.4",
    td2: "0",
    lng2: "15",
  },
  {
    date: "Mon 11/16",
    opp: opp(op2, "vs"),
    result: result("44-34", "W", classes.greenResult),
    cmp: "32",
    att: "49",
    yds: "284",
    cmp2: "65",
    avg: "5.8",
    td: "2",
    int: "2",
    lng: "31",
    sack: "0",
    rtg: "77",
    qbr: "70",
    att2: "7",
    yds2: "38",
    avg2: "5.4",
    td2: "0",
    lng2: "15",
  },
];
