import classes from "./Pages.module.css";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
const Pages = (props) => {
  const loadMore = () => {
    if (props.items === 10) {
      props.changeItem(1, 25);
    } else if (props.items === 25) {
      props.changeItem(1, 50);
    } else if (props.items === 50) {
      props.changeItem(1, 100);
    } else if (props.items === 100) {
      props.changeItem(1, "all");
    }
  };
  return (
    <div className={classes.pages}>
      <div className={classes.flex}>
        <Link
          href="#"
          onClick={(event) => props.changeItem(event, 10)}
          className={props.items === 10 ? classes.itemBold : classes.item}
        >
          10
        </Link>
        <div className={classes.item}>/</div>
        <Link
          href="#"
          onClick={(event) => props.changeItem(event, 25)}
          className={props.items === 25 ? classes.itemBold : classes.item}
        >
          25
        </Link>
        <div className={classes.item}>/</div>
        <Link
          href="#"
          onClick={(event) => props.changeItem(event, 50)}
          className={props.items === 50 ? classes.itemBold : classes.item}
        >
          50
        </Link>
        <div className={classes.item}>/</div>
        <Link
          href="#"
          onClick={(event) => props.changeItem(event, 100)}
          className={props.items === 100 ? classes.itemBold : classes.item}
        >
          100
        </Link>
        <div className={classes.item}>/</div>
        <Link
          href="#"
          onClick={(event) => props.changeItem(event, "all")}
          className={props.items === "all" ? classes.itemBold : classes.item}
        >
          All
        </Link>
      </div>
      <div className={classes.buttonDiv}>
        <Button
          onClick={loadMore}
          className={classes.button}
          variant="contained"
        >
          Load More
        </Button>
      </div>
    </div>
  );
};
export default Pages;
