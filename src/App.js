import "./App.css";
import Layout from "./components/Layout/Layout";
import CategoryBox from "./components/UI/Category/CategoryBox";
import CategoryTab from "./components/UI/Category/CategoryTab";
import { useState, useEffect } from "react";
function App() {
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState("Whole");
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
  return (
    <Layout>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <CategoryTab
          category={category}
          setSelected={setSelected}
          selected={selected}
        />
      )}
      <CategoryBox selected={selected} />
    </Layout>
  );
}

export default App;
