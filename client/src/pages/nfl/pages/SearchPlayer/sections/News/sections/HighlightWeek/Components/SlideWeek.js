import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import Link from "@material-ui/core/Link";
import classes2 from "../HighlightWeek.module.css";
import highlightWeek2 from "../../../../../assets/higlightWeek2.png";
import highlightWeek3 from "../../../../../assets/higlightWeek3.png";
import { AiOutlineArrowRight } from "react-icons/ai";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "transparent",
    // width: "80%",
  },
  imageList: {
    flexWrap: "nowrap",
    width: "100%",
    // height: "220px",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  itemImg: { borderRadius: "10px", width: "95%" },
}));

const itemData = [
  {
    img: highlightWeek3,
    title: "Image1",
    text: "author",
  },
  {
    img: highlightWeek2,
    title: "Image2",
    text: "author",
  },
  {
    img: highlightWeek3,
    title: "Image3",
    text: "author",
  },
];

const SlideWeek = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <ImageList className={classes.imageList} cols={2.5}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} className={classes2.slideImageItem}>
              <div>
                {" "}
                <img
                  src={item.img}
                  alt={item.title}
                  className={classes.itemImg}
                />
              </div>
              {item.title === "Image1" || item.title === "Image3" ? (
                <div className={classes2.overlayColor}></div>
              ) : (
                <div className={classes2.overlayColor2}></div>
              )}
              <div className={classes2.slideWeekOverlayText}>
                <p>
                  Matchup Previews + Week 5 Injury Analysis with Dr. David Chao
                  (2020 Fantasy Football)
                </p>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className={classes2.slideLinkDiv}>
        <Link component="button" variant="body2" className={classes2.slideLink}>
          view all HIGHLIGHTS WEEK <AiOutlineArrowRight />
        </Link>
      </div>
    </div>
  );
};
export default SlideWeek;
