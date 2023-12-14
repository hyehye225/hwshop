import "./App.css";
import Layout from "./components/Layout/Layout";
import CategoryBox from "./components/UI/Category/CategoryBox";
import CategoryTab from "./components/UI/Category/CategoryTab";
import { useState, useEffect } from "react";
import ItemSlider from "./components/UI/ItemSlider";
function App() {
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState({ id: 100, category: "All" });
  const [error, setError] = useState(null);
  const [items, setItems] = useState(null);
  const [ranked, setRanked] = useState(null);
  useEffect(() => {
    fetch(`https://cozshopping.codestates-seb.link/api/v3/categories`)
      .then((response) => response.json())
      .then((response) => {
        setError(null);
        console.log(response.product);
        setCategory(response.product);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
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
        setError(null);
        console.log(response.items);
        setItems(response.items);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [selected]);
  useEffect(() => {
    let url = "https://cozshopping.codestates-seb.link/api/v3/ranking";
    url = selected ? `${url}?${selected.id}` : "";
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setRanked(response.items);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [selected]);

  return (
    <div className="container">
      <Layout category={category} setSelected={setSelected} selected={selected}>
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
            // border: "2px solid black",
            borderRadius: "5px",
            padding: "0.5rem",
          }}
        >
          {selected.category}
        </div>
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {items && !isLoading && (
          <CategoryBox selected={selected} setItems={setItems} items={items} />
        )}
      </Layout>
      {ranked && !isLoading && <ItemSlider items={ranked} />}
    </div>
  );
}

export default App;
