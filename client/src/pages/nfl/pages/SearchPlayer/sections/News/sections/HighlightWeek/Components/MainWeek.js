import classes from "../HighlightWeek.module.css";
import highlightWeek1 from "../../../../../assets/higlightWeek1.png";
const MainWeek = () => {
  return (
    <div>
      <div className={classes.mainWeekImage}>
        <img src={highlightWeek1} width="80%" alt="highlightWeek1" />
      </div>
      <div className={classes.mainWeekText}>
        <p>10/9/2020</p>
        <h2>
          Matchup Previews + Week 5 Injury Analysis With Dr. David Caho (2020
          FANTASY FOOTBALL)
        </h2>
      </div>
    </div>
  );
};
export default MainWeek;
