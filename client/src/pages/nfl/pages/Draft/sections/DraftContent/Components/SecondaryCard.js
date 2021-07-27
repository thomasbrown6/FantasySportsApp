import classes2 from "../DraftContent.module.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CardMedia from "@material-ui/core/CardMedia";

import content2 from "../../../assets/content2.png";
const useStyles = makeStyles({
  root: {
    maxWidth: 225,
    position: "relative",
    zIndex: "1",
  },
});
const SecondaryCard = () => {
  const classes = useStyles();
  return (
    <div>
      {/* <div>
        <div className={classes2.imgCard2}>
          <img src={content2} alt="content2" />
        </div>
        <div className={classes2.overlay}>
          <p className={classes2.date2}>10/9/2020</p>
          <p className={classes2.title2}>
            Fantasy Football Streaming Picks Week 5
          </p>
          <p className={classes2.text2}>
            Week 5 provides a much better slate of streaming quarterbacks, tight
            ends, and defenses. Teddy Bridgewater headlines the streaming
            quarterback....
          </p>
        </div>
      </div> */}
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="190px"
            className={classes2.imgCard2}
            image={content2}
            title="Contemplative Reptile"
          />

          <div className={classes2.imageColor}></div>
          <div className={classes2.overlay}>
            <p className={classes2.date2}>10/9/2020</p>
            <p className={classes2.title2}>Fantasy Football Sleepers:</p>
            <p className={classes2.title2}>Week 5</p>
            <p className={classes2.text2}>
              Fantasy Football Sleepers for Week 5 As the late-great Eddie Van
              Halen....
            </p>
            <p>
              <div className={classes2.arrowIcon}>
                <ArrowForwardIcon
                  style={{ color: "white", fontSize: "18px" }}
                />
              </div>
            </p>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default SecondaryCard;
