import classes2 from "../DraftContent.module.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import content1 from "../../../assets/content1.png";
const useStyles = makeStyles({
  root: {
    maxWidth: 220,
    background: "black",
    color: "white !important",
  },
  cardContent: {
    color: "white !important",
  },
});

export default function MainCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes2.imgCard}
          alt="Contemplative Reptile"
          height="100%"
          image={content1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom className={classes2.date}>
            10/9/2020
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes2.title}
          >
            Fantasy Football Streaming Picks Week 5
          </Typography>
          <Typography variant="body2" className={classes2.text} component="p">
            Week 5 provides a much better slate of streaming quarterbacks, tight
            ends, and defenses. Teddy Bridgewater headlines the streaming
            quarterback....
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes2.exploreButton}>
          Explore More
        </Button>
      </CardActions>
    </Card>
  );
}
