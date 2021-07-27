import classes from "./GameLog.module.css";
import GameTable from "./Components/GameTable";
import Filter from "./Components/Filter";
const GameLog = () => {
  return (
    <div className={classes.main}>
      <div className={classes.mainFilterDiv}>
        <Filter />
      </div>
      <div className={classes.gameHeader}>
        <p>game log</p>
      </div>
      <GameTable />
    </div>
  );
};
export default GameLog;
