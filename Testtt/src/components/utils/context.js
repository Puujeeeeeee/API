import { createContext } from "react";
import { useState, useEffect } from "react";
export const FirstContext = createContext([]);
export const FirstContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [topArticles, setTopArticles] = useState([]);
  const [sliderArticles, setSliderArticles] = useState([]);
  const [limit, setLimit] = useState([9]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dev.to/api/articles?per_page=4&top=1");
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://dev.to/api/articles?per_page=4&state-rising"
        );
        const data = await res.json();
        setTopArticles(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dev.to/api/articles?per_page=${limit}`
        );
        const data = await res.json();
        setSliderArticles(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [limit]);
  // const loadMore = () => {
  //   setLimit((prevLimit) => prevLimit + 3);
  // };

  return (
    <FirstContext.Provider value={{ articles, topArticles, sliderArticles }}>
      {children}
    </FirstContext.Provider>
  );
};
