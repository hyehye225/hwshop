import { useEffect, useState } from "react";
// import classes from "./ItemSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ItemSlider = (props) => {
  const items = props.items;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  console.log(items);
  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.imageUrl} alt={item.title} width={100} height={100} />
        </div>
      ))}
    </Slider>
  );
};
export default ItemSlider;
