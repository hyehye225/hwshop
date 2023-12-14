import classes from "./Tab.module.css";
const Tab = ({ category, onClick, isSelected }) => {
  const tabClass = isSelected
    ? `${classes.category} ${classes.selected}`
    : classes.category;

  return (
    <div className={tabClass} onClick={onClick}>
      {category}
    </div>
  );
};
export default Tab;
