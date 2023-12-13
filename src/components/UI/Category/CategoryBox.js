import classes from "./CategoryBox.module.css";
import { useEffect, useState } from "react";
import ItemCard from "../ItemCard";
const CategoryBox = (props) => {
  const selected = props.selected;
  const items = props.items;
  const setItems = props.setItems;
  // const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setIsLoading(true);
  //   console.log("selected category is", selected);
  //   fetch(
  //     `https://cozshopping.codestates-seb.link/api/v3/products?page=1&limit=30`
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response.items);
  //       setItems(response.items);
  //       setIsLoading(false);
  //     });
  // }, [selected]);
  let filteredItems;
  if (items && selected) {
    console.log(selected);
    let target = selected;
    if (selected === "Pet") {
      target = "Animals";
    }
    filteredItems = items.filter((item) => item.type === target);
    console.log(filteredItems);
  }
  if (selected === "All") {
    filteredItems = items;
  }
  return (
    <div className={classes.box}>
      {items &&
        filteredItems &&
        filteredItems.map((item) => {
          return <ItemCard key={item.id} item={item} />;
        })}
    </div>
  );
};
export default CategoryBox;
