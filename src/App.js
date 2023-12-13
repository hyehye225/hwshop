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
      `https://cozshopping.codestates-seb.link/api/v3/products?page=1&limit=15`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.items);
        setItems(response.items);
        setIsLoading(false);
      });
  }, [selected]);
  return (
    <>
      <Layout>
        {isLoading && <div>Loading...</div>}
        {!isLoading && (
          <CategoryTab
            category={category}
            setSelected={setSelected}
            selected={selected}
          />
        )}
        {items && !isLoading && (
          <CategoryBox selected={selected} setItems={setItems} items={items} />
        )}
      </Layout>
      {items && !isLoading && <ItemSlider items={items} />}
    </>
  );
}

export default App;
