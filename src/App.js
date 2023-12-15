import "./App.css";
import Layout from "./components/Layout/Layout";
import CategoryBox from "./components/UI/Category/CategoryBox";
import { useState, useEffect } from "react";
import ItemSlider from "./components/UI/ItemSlider";
import { API_URL } from "./constants/constants";
import useFetch from "./hooks/useFetch";
function App() {
  // const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState({ id: 0, category: "All" });
  const [error, setError] = useState(null);
  // const [items, setItems] = useState(null);
  // const [ranked, setRanked] = useState(null);
  const [recommended, setRecommended] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  // useEffect(() => {
  //   fetch(`${API_URL}/categories`)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setError(null);
  //       console.log(response.product);
  //       setCategory(response.product);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // }, []);
  const [category, setCategory, categoryError, isCategoryLoading] = useFetch(
    `${API_URL}/categories`,
    "product"
  );
  // useEffect(() => {
  //   setIsLoading(true);
  //   console.log("selected category is", selected);
  //   fetch(`${API_URL}/products?page=1&limit=50`)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setError(null);
  //       console.log(response.items);
  //       setItems(response.items);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // }, [selected]);
  const [items, setItems, itemsError, isItemsLoading] = useFetch(
    `${API_URL}/products?page=1&limit=50`,
    "items",
    selected
  );
  // useEffect(() => {
  //   let url = `${API_URL}/ranking`;
  //   url = selected.id !== 0 ? `${url}?category=${selected.id}` : url;
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setRanked(response.items);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // }, [selected]);
  const [ranked, setRanked, rankedError, isRankedLoading] = useFetch(
    `${API_URL}/ranking${selected.id !== 0 ? `?category=${selected.id}` : ""}`,
    "items",
    selected
  );
  useEffect(() => {
    console.log(selected.id, selectedOption);
    if (selectedOption) {
      let url = `${API_URL}/recommendation`;
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
      let url = `${API_URL}/recommendation`;
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
  // const urlBuilder = (selected, selectedOption) => {
  //   let url = `${API_URL}/recommendation`;
  //   if (selected.id && selectedOption) {
  //     url = `${url}?category=${selected.id}&type=${selectedOption}`;
  //   } else if (selected.id) {
  //     url = `${url}?category=${selected.id}`;
  //   }
  //   return url;
  // };

  // const [recommended, setRecommended, recommendedError, isRecommendedLoading] =
  //   useFetch(
  //     urlBuilder(selected, selectedOption),
  //     "items",
  //     selected,
  //     selectedOption
  //     // selectedOption,
  //   );

  return (
    <div className="container">
      <Layout category={category} setSelected={setSelected} selected={selected}>
        <div className="textCon">
          <h1>{selected.category}</h1>
        </div>
        {ranked && (
          <ItemSlider items={ranked} selected={selected} topic="ranked" />
        )}
        {recommended && (
          <ItemSlider
            items={recommended}
            selected={selected}
            topic="recommended"
            selectedOption={selectedOption}
            handleSelect={handleSelect}
          />
        )}

        {isItemsLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {items && !isItemsLoading && (
          <CategoryBox selected={selected} setItems={setItems} items={items} />
        )}
      </Layout>
    </div>
  );
}

export default App;
