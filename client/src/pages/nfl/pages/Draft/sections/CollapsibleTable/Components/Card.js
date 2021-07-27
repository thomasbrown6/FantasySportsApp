import React from 'react'
import classes from "../Table.module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import avatar from "../../../../../assets/avatar.png";

const Card = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <div>
                <img src={avatar} width="70px" alt="avatar" />
              </div>
            </Grid>
            <Grid item xs={7}>
              <div className={classes.cardFlex}>
                <div className={classes.circularBorder}>OT</div>

                <div className={classes.nameText}>Pennel Sowell</div>
              </div>
              <div className={classes.cardFlex}>
                <p>1.98m</p>
                <p>|</p>
                <p>149kg</p>
                <p>|</p>
                <p>Oregon</p>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.secondCardFlex}>
            <div>
              {" "}
              <Button
                variant="outlined"
                className={classes.followButton}
                color="primary"
              >
                Follow
              </Button>
            </div>

            <div className={classes.verticalLine}></div>
            <div className={classes.secondCardFlex2}>
              <p>1</p>
              <p>POS RK</p>
            </div>
            <div className={classes.secondCardFlex2}>
              <p>2</p>
              <p>OVR RK</p>
            </div>
            <div className={classes.secondCardFlex2}>
              <p>93</p>
              <p>GRADE</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Card;
