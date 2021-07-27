import classes from "../PlayersNew.module.css";
import playerNew1 from "../../../../../assets/playerNew1.svg";
import { AiOutlineSend } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

const MainPlayer = () => {
  return (
    <div>
      <div className={classes.mainPlayerImageContainer}>
        <img src={playerNew1} alt="playerNew1" width="95%" />
        <div className={classes.mainImageTag}></div>
        <div className={classes.mainPlayerText}>
          <h2>Matchup Previews + Week 5</h2>
          <p>Injury Analysis with Dr. David Chao (2020 Fantasy Football)</p>
        </div>
        <div className={classes.mainIconDiv}>
          <div>
            <FiHeart />
          </div>
          <div>
            <AiOutlineSend />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPlayer;
