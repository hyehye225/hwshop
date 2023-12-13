import classes from "./CategoryTab.module.css";
const CategoryTab = (props) => {
  const category = props.category;
  return (
    <div className={classes.categoryWrapper}>
      {category &&
        category.map((category) => (
          <div className={classes.category}>{category.category}</div>
        ))}
    </div>
  );
};
export default CategoryTab;
