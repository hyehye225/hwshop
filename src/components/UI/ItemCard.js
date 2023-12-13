import { useEffect, useState } from "react";
import classes from "./ItemCard.module.css";
const DUMMY_DATA = {
  id: 2,
  type: "Clothing",
  title: "Polraroid 320 티셔츠",
  subTitle: null,
  brandName: null,
  price: 9900,
  discountPercentage: 5,
  discountPrice: 9405,
  imageUrl:
    "https://images.unsplash.com/photo-1527181467037-80564ba4ac51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  brandImageUrl: null,
  category: {
    id: 1,
    category: "Clothing",
  },
};

const ItemCard = (props) => {
  const item = props.item;
  return (
    <div className={classes.card}>
      <img
        className={classes.img}
        src={item.imageUrl}
        alt="이미지"
        height={150}
        width={150}
      />
      <div className={classes.info}>
        <div className={classes.title}>{item.title}</div>
        <div className={classes.price}>{item.price}원</div>
      </div>
    </div>
  );
};
export default ItemCard;
