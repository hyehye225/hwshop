import { useState, useEffect } from "react";

const useFetch = (url, dataLoc, dependency) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      setIsLoading(true);
      setError(null); // 에러 초기화
      console.log(dependency);
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((responseData) => {
          setData(responseData[dataLoc]);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    dependency ? [url, dataLoc, dependency] : [url, dataLoc]
  );

  return [data, setData, error, isLoading];
};

export default useFetch;
