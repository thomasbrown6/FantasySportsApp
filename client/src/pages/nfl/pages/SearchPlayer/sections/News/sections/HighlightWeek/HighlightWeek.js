import classes from "./HighlightWeek.module.css";
import MainWeek from "./Components/MainWeek";
import SlideWeek from "./Components/SlideWeek";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
const HighlightWeek = () => {
  return (
    <div>
      <MainWeek />
      <div className={classes.hwDiv}>
        <SlideWeek />
        <div className={classes.arrow}>
          <div>
            <AiOutlineArrowLeft />
          </div>
          <div>
            {" "}
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HighlightWeek;
