import classes from "../PlayerDetails.module.css";
import classnames from "classnames";

const data = [
  {
    name: "height",
    value: `5' 11"`,
  },
  {
    name: "draft pick",
    value: "1.08",
  },
  {
    name: "weight",
    value: "202lbs",
  },
  {
    name: "college",
    value: "Stanford",
  },
  {
    name: "bmi",
    value: "28.2 (12nd)",
  },
  {
    name: "age",
    value: "24.4",
  },
];
const DetailBar = () => {
  return (
    <div>
      <div className={classes.detailBoxFlex}>
        {data.map((data, index) => (
          <div className={classnames(classes.detailBox)} key={index}>
            <p>{data.value}</p>
            <p>{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DetailBar;
