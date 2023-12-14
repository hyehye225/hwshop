import "./App.css";
import Layout from "./components/Layout/Layout";
import CategoryBox from "./components/UI/Category/CategoryBox";
import CategoryTab from "./components/UI/Category/CategoryTab";
import { useState, useEffect } from "react";
import ItemSlider from "./components/UI/ItemSlider";
function App() {
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState({ id: 0, category: "All" });
  const [error, setError] = useState(null);
  const [items, setItems] = useState(null);
  const [ranked, setRanked] = useState(null);
  const [recommended, setRecommended] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
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
      `https://cozshopping.codestates-seb.link/api/v3/products?page=1&limit=50`
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
    url = selected.id !== 0 ? `${url}?category=${selected.id}` : url;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setRanked(response.items);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [selected]);
  // useEffect(() => {
  //   let url = "https://cozshopping.codestates-seb.link/api/v3/recommendation";
  //   url = selected.id !== 0 ? `${url}?category=${selected.id}` : url;
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setRecommended(response.items);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // }, [selected]);
  useEffect(() => {
    console.log(selected.id, selectedOption);
    if (selectedOption) {
      let url = "https://cozshopping.codestates-seb.link/api/v3/recommendation";
      url = `${url}?category=${selected.id}&type=${selectedOption}`;

      console.log(selectedOption);
      console.log(url);
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          console.log(selectedOption);
          console.log(response.items);
          setRecommended(response.items);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      let url = "https://cozshopping.codestates-seb.link/api/v3/recommendation";
      url = selected.id ? `${url}?category=${selected.id}` : url;
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          setRecommended(response.items);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [selected, selectedOption]);
  return (
    <div className="container">
      <Layout category={category} setSelected={setSelected} selected={selected}>
        {ranked && !isLoading && (
          <ItemSlider items={ranked} selected={selected} topic="ranked" />
        )}
        {recommended && !isLoading && (
          <ItemSlider
            items={recommended}
            selected={selected}
            topic="recommended"
            selectedOption={selectedOption}
            handleSelect={handleSelect}
          />
        )}

        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {items && !isLoading && (
          <CategoryBox selected={selected} setItems={setItems} items={items} />
        )}
      </Layout>
    </div>
  );
}

export default App;
