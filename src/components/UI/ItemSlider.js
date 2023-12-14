import { useEffect, useState } from "react";
import classes from "./ItemSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DropDown from "./DropDown";
import CustomArrows from "./CustomArrows";

const ItemSlider = (props) => {
  const items = props.items;
  const selected = props.selected;
  const topic = props.topic;
  const selectedOption = props.selectedOption;
  const handleSelect = props.handleSelect;
  const settings = {
    // dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: <CustomArrows direction="next" />,
    prevArrow: <CustomArrows direction="prev" />,
  };
  console.log(items);
  return (
    <div className={classes.itemSlider}>
      {topic === "ranked" && <h1>TOP 10 in {selected.category}</h1>}
      {topic === "recommended" && (
        <h1>Recommended for you in {selected.category}</h1>
      )}
      {/* {topic === "recommended" && (
        <div>
          <button>좋아요 순</button>
          <button>만족도 순</button>
        </div>
      )} */}
      {topic === "recommended" && <DropDown handleSelect={handleSelect} />}

      <Slider {...settings}>
        {items.map((item) => (
          <div className={classes.container} key={item.id}>
            <img className={classes.img} src={item.imageUrl} alt={item.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ItemSlider;
