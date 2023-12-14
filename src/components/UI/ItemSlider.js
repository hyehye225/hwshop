import { useEffect, useState } from "react";
import classes from "./ItemSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DropDown from "./DropDown";
import CustomArrows from "./CustomArrows";
import ItemCard from "./ItemCard";

const ItemSlider = (props) => {
  const items = props.items;
  const selected = props.selected;
  const topic = props.topic;
  const selectedOption = props.selectedOption;
  const handleSelect = props.handleSelect;
  const settings = {
    // dots: true,
    speed: 500,
    slidesToShow: 4,
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
      {topic === "ranked" && (
        <div className={classes.textCon}>
          <h3>TOP 10</h3>
        </div>
      )}
      {topic === "recommended" && (
        <div className={classes.textCon}>
          <h3>Recommended for you</h3>
          <DropDown handleSelect={handleSelect} />
        </div>
      )}
      {/* {topic === "recommended" && (
        <div>
          <button>좋아요 순</button>
          <button>만족도 순</button>
        </div>
      )} */}
      {/* {topic === "recommended" && <DropDown handleSelect={handleSelect} />} */}

      <Slider {...settings}>
        {items.map((item) => (
          <div className={classes.container} key={item.id}>
            <ItemCard key={item.id} item={item} />
          </div>
        ))}
        {/* <img className={classes.img} src={item.imageUrl} alt={item.title} /> */}
      </Slider>
    </div>
  );
};
export default ItemSlider;
