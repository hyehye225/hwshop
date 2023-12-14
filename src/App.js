import "./App.css";
import Layout from "./components/Layout/Layout";
import CategoryBox from "./components/UI/Category/CategoryBox";
import CategoryTab from "./components/UI/Category/CategoryTab";
import { useState, useEffect } from "react";
import ItemSlider from "./components/UI/ItemSlider";
function App() {
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState("All");
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch(`https://cozshopping.codestates-seb.link/api/v3/categories`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.product);
        setCategory(response.product);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  useEffect(() => {
    setIsLoading(true);
    console.log("selected category is", selected);
    fetch(
      `https://cozshopping.codestates-seb.link/api/v3/products?page=1&limit=25`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.items);
        setItems(response.items);
        setIsLoading(false);
      });
  }, [selected]);
  return (
    <div className="container">
      <Layout category={category} setSelected={setSelected} selected={selected}>
        {isLoading && <div>Loading...</div>}
        {/* {!isLoading && (
          <CategoryTab
            category={category}
            setSelected={setSelected}
            selected={selected}
          />
        )} */}
        <div
          style={{
            fontSize: "x-large",
            fontWeight: "bold",
            margin: "0.5rem",
            border: "2px solid black",
            borderRadius: "5px",
            padding: "0.5rem",
          }}
        >
          {selected}
        </div>
        {items && !isLoading && (
          <CategoryBox selected={selected} setItems={setItems} items={items} />
        )}
      </Layout>
      {items && !isLoading && <ItemSlider items={items} />}
    </div>
  );
}

export default App;
