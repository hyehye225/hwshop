import { useEffect, useState } from "react";
import classes from "./ItemSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ItemSlider = (props) => {
  const items = props.items;
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  console.log(items);
  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div className={classes.container} key={item.id}>
          <img className={classes.img} src={item.imageUrl} alt={item.title} />
        </div>
      ))}
    </Slider>
  );
};
export default ItemSlider;
