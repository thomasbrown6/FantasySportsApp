import classes from "./Pages.module.css";
import Button from "@material-ui/core/Button";
const Pages = () => {
  return (
    <div className={classes.pages}>
      <div className={classes.flex}>
        <a className={classes.item} href="!">
          10
        </a>
        <div className={classes.item}>/</div>
        <a className={classes.item} href="!">
          25
        </a>
        <div className={classes.item}>/</div>
        <a className={classes.item} href="!">
          50
        </a>
        <div className={classes.item}>/</div>
        <a className={classes.item} href="!">
          100
        </a>
        <div className={classes.item}>/</div>
        <a className={classes.item} href="!">
          ALL
        </a>
      </div>
      <div className={classes.buttonDiv}>
        <Button className={classes.button} variant="contained">
          Load More
        </Button>
      </div>
    </div>
  );
};
export default Pages;