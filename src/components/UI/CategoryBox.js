import classes from "./CategoryBox.module.css";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
const CategoryBox = (props) => {
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://cozshopping.codestates-seb.link/api/v3/products?page=1&limit=10`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.items);
        setItems(response.items);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className={classes.box}>
      {items &&
        items.map((item) => {
          return <ItemCard key={item.id} item={item} />;
        })}
    </div>
  );
};
export default CategoryBox;
