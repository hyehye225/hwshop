import classes from "./CategoryTab.module.css";
import Tab from "./Tab";
import { useState, useEffect } from "react";
const CategoryTab = (props) => {
  const category = props.category;
  const selected = props.selected;
  const setSelected = props.setSelected;
  const clickHandler = (category) => {
    console.log(category);
    setSelected(category);
  };
  // 기본으로는 전체 상품을 보여준다.
  // selected된 tab이 있을 경우 해당 카테고리를 보여준다.
  // 새로고침하면 다시 전체 상품
  return (
    <div className={classes.categoryWrapper}>
      <Tab
        isSelected={"All" === selected}
        category="All"
        onClick={() => clickHandler("All")}
      />
      {category &&
        category.map((category) => (
          <Tab
            key={category.id}
            isSelected={category.id === selected}
            category={category.id}
            onClick={() => clickHandler(category.id)}
          />
        ))}
    </div>
  );
};
export default CategoryTab;
