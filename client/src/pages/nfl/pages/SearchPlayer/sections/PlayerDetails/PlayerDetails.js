import classes from "./PlayerDetails.module.css";
import playerImg from "../../../../Assets/playerImg.svg";
import DetailBar from "./Components/DetailBar";
const PlayerDetails = () => {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.imageText}>
          <div className={classes.playerName}>
            <p>Christian McCaffrey</p>
            <p>#22</p>
          </div>
          <div className={classes.playerImg}>
            <img src={playerImg} alt="playerImg" width="500px" />
          </div>
        </div>
      </div>
      <div>
        <DetailBar />
      </div>
    </>
  );
};
export default PlayerDetails;
