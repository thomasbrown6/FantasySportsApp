import classes from "./Scorecard.module.css";
import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core/";
import LeftCard from "./Components/LeftCard";
import MiddleCard from "./Components/MiddleCard";
import RightCard from "./Components/RightCard";

const Scorecard = (props) => {
  const [cardData, setCardData] = useState(props.scoreCard1);
  return (
    <div>
      <div>
        <div className={classes.dateContainer}>
          <Grid container>
            <Grid item xs={12} lg={4}>
              <div className={classes.dateHeader}>
                <p>{props.scoreCard1[0].date}</p>
              </div>
            </Grid>
          </Grid>
        </div>
        {cardData.map((card, index) => (
          <div className={classes.card} key={index}>
            <Grid container>
              <Grid item xs={12} lg={4}>
                <LeftCard leftCard={card.leftCard} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <MiddleCard middleCard={card.middleCard} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <div className={classes.section3}>
                  <Grid container>
                    <Grid item xs={8}>
                      <RightCard rightCard={card.rightCard} />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <div className={classes.section3Right}>
                        <div className={classes.commonContainer2}>
                          <Button
                            variant="outlined"
                            className={classes.gamecastButton}
                          >
                            gamecast
                          </Button>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Scorecard;
