import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; // bc CARD is not a built-in HTML element, we cannot apply classes traditionally
  return <div className={classes}>{props.children}</div>;
}

export default Card;
