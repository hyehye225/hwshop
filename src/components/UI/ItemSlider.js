import { useEffect, useState } from "react";
import classes from "./ItemSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ArrowLeft = (props) => (
  <button {...props} className={"prev"}>
    prev
  </button>
);
const ArrowRight = (props) => (
  <button {...props} className={"next"}>
    next
  </button>
);

const ItemSlider = (props) => {
  const items = props.items;
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // prevArrow: <ArrowLeft />,
    // nextArrow: <ArrowRight />,
  };
  console.log(items);
  return (
    <div className={classes.itemSlider}>
      <h2>TOP 10</h2>
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
