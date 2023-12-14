import classes from "./CustomArrows.module.css";
const CustomArrows = (props) => {
  const { onClick, direction } = props;

  return (
    <div
      className={`${classes.customArrow} ${classes[direction]}`}
      onClick={onClick}
    >
      {direction === "prev" ? "<" : ">"}
    </div>
  );
};
export default CustomArrows;
