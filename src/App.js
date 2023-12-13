import "./App.css";
import Layout from "./components/Layout/Layout";
import CategoryBox from "./components/UI/CategoryBox";
import CategoryTab from "./components/UI/CategoryTab";
import { useState, useEffect } from "react";
function App() {
  const [category, setCategory] = useState(null);
  useEffect(() => {
    fetch(`https://cozshopping.codestates-seb.link/api/v3/categories`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.product);
        setCategory(response.product);
      });
  }, []);
  return (
    <Layout>
      <CategoryTab category={category} />
      <CategoryBox />
    </Layout>
  );
}

export default App;
