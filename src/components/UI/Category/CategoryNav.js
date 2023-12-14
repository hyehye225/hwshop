import { useState } from "react";
import classes from "./CategoryNav.module.css";
import { FaBars } from "react-icons/fa";
import Tab from "./Tab";
const CategoryNav = (props) => {
  const category = props.category;
  const selected = props.selected;
  const setSelected = props.setSelected;
  const [activeCategory, setActiveCategory] = useState(false);
  // const categoryList = ["Category 1", "Category 2", "Category 3"];

  const iconClickHandler = () => {
    setActiveCategory(!activeCategory);
  };
  const clickHandler = (category) => {
    setSelected(category);
    console.log(category);
  };
  return (
    <div className={classes.container}>
      <FaBars onClick={iconClickHandler} className={classes.icon} />
      {category && (
        <div className={classes.categories}>
          <ul>
            <Tab
              isSelected={"All" === selected}
              category="All"
              onClick={() => clickHandler("All")}
            />
            {category.map((category) => (
              <Tab
                key={category.id}
                isSelected={category.category === selected}
                category={category.category}
                onClick={() => clickHandler(category.category)}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryNav;
