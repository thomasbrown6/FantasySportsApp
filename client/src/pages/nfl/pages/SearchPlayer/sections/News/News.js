import classes from "./News.module.css";
import HighlightWeek from "./sections/HighlightWeek/HighlightWeek";
import PlayersNew from "./sections/PlayersNew/PlayersNew";
import Grid from "@material-ui/core/Grid";
import HeadIcon from "../../../Draft/sections/DraftVideo/Components/HeadIcon";
const News = () => {
  return (
    <div className={classes.newsContainer}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={7}>
          <div className={classes.newsHead}>
            <h2>HIGHLIGHTS WEEK</h2>
            <HeadIcon />
          </div>
          <HighlightWeek />
        </Grid>
        <Grid item xs={12} lg={5}>
          <div className={classes.newsHead}>
            <h2>Players new</h2>
            <HeadIcon />
          </div>
          <PlayersNew />
        </Grid>
      </Grid>
    </div>
  );
};
export default News;
