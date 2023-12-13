import classes from "./CategoryBox.module.css";
import ItemCard from "../ItemCard";
const CategoryBox = (props) => {
  const selected = props.selected;
  const items = props.items;

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
      {filteredItems.length === 0 && (
        <div>
          <p>No items available!</p>
        </div>
      )}
    </div>
  );
};
export default CategoryBox;
