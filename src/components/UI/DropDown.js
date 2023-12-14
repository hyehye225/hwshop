import { useState } from "react";
import ItemSlider from "./ItemSlider";
import { FaCaretDown } from "react-icons/fa";
import classes from "./DropDown.module.css";
const DropDown = (props) => {
  const handleSelect = props.handleSelect;
  const [type, setType] = useState("Sort By");
  const handleButtonClick = (selectedType) => {
    setType(selectedType);
    handleSelect(selectedType === "좋아요 순" ? 1 : 2);
  };
  return (
    <div>
      <div className={classes.dropdown}>
        <button className={classes.dropbtn}>
          {type} <FaCaretDown />
        </button>
        <div className={classes["dropdown-content"]}>
          <button onClick={() => handleButtonClick("좋아요 순")}>
            좋아요 순
          </button>
          <button onClick={() => handleButtonClick("만족도 순")}>
            만족도 순
          </button>
          {/* <button onClick={() => handleSelect(3)}>가격 순</button> */}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
