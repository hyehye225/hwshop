import { useState } from "react";
import classes from "./CategoryNav.module.css";
import { FaBars } from "react-icons/fa";
const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState(false);
  const categoryList = ["Category 1", "Category 2", "Category 3"];

  const handleCategoryClick = () => {
    setActiveCategory(!activeCategory);
  };

  return (
    <div className={classes.container}>
      <FaBars onClick={handleCategoryClick} className={classes.icon} />
      {activeCategory && (
        <div className={classes.categories}>
          <ul>
            {categoryList.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryNav;
