import Sidebar from "react-sidebar";
import { useState } from "react";
import classes from "./CategoryNav.module.css";
import { FaBars } from "react-icons/fa";
import Tab from "./Tab";
const CategoryNav = (props) => {
  const category = props.category;
  const selected = props.selected;
  const setSelected = props.setSelected;
  // const [activeCategory, setActiveCategory] = useState(false);
  // const categoryList = ["Category 1", "Category 2", "Category 3"];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const iconClickHandler = () => {
    // setActiveCategory(!activeCategory);
    console.log("setActiveCategory");
    setSidebarOpen(!sidebarOpen);
  };
  const clickHandler = (category, id) => {
    setSelected({ category, id });
    console.log(category);
  };
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <FaBars onClick={iconClickHandler} className={classes.icon} />
        <h4>Shop by Category</h4>
      </div>
      {category && (
        <div className={classes.categories}>
          <ul>
            <Tab
              isSelected={100 === selected.id}
              category="All"
              onClick={() => clickHandler("All", 0)}
            />
            {category.map((category) => (
              <Tab
                key={category.id}
                isSelected={category.id === selected.id}
                category={category.category}
                onClick={() => clickHandler(category.category, category.id)}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryNav;
