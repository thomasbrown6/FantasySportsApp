import classes from "../PlayersNew.module.css";
import Link from "@material-ui/core/Link";
import playerNew2 from "../../../../../assets/playerNew2.svg";
import playerNew3 from "../../../../../assets/playerNew3.svg";
import { AiOutlineSend } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
const cardData = [
  {
    heading: "Matchup Previews + Week 6",
    text: "Injury Analysis with Dr. David Chao",
    span: "(2020 Fantasy Football)",
    image: playerNew2,
  },
  {
    heading: "Matchup Previews + Week 6",
    text: "Injury Analysis with Dr. David Chao",
    span: "(2020 Fantasy Football)",
    image: playerNew3,
  },
];
const SecondaryCard = () => {
  return (
    <div className={classes.secondaryCardMain}>
      {cardData.map((data, i) => (
        <div className={classes.cardContainer} key={i}>
          <img src={data.image} alt="playernew" width="95%" />
          <div className={classes.cardOverlay}></div>
          <div className={classes.cardText}>
            <h2>{data.heading}</h2>
            <p>{data.text}</p>
            <p>{data.span}</p>
          </div>
          <div className={classes.cardIconDiv}>
            <div>
              <FiHeart />
            </div>
            <div>
              <AiOutlineSend />
            </div>
          </div>
        </div>
      ))}
      <div className={classes.cardLinkDiv}>
        <Link component="button" variant="body2" className={classes.cardLink}>
          View all articles <AiOutlineArrowRight />
        </Link>
      </div>
    </div>
  );
};
export default SecondaryCard;
