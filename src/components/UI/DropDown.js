import { useState } from "react";
import ItemSlider from "./ItemSlider";
import classes from "./DropDown.module.css";
const DropDown = (props) => {
  const handleSelect = props.handleSelect;
  return (
    <div>
      <div className={classes.dropdown}>
        <button className={classes.dropbtn}>Sort By</button>
        <div className={classes["dropdown-content"]}>
          <button onClick={() => handleSelect(1)}>좋아요 순</button>
          <button onClick={() => handleSelect(2)}>만족도 순</button>
          {/* <button onClick={() => handleSelect(3)}>가격 순</button> */}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
