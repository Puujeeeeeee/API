import { createContext, useState, useEffect } from "react";

export const FirstContext = createContext([]);

export const FirstContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [topArticles, setTopArticles] = useState([]);
  const [sliderArticles, setSliderArticles] = useState([]);
  const [allBlogListing, setAllBlogListing] = useState([]);
  const [filteredArray, setFilteredArray] = useState();
  const [isLoading, setIsLoading] = useState(true); // Initially, set loading to true

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dev.to/api/articles");
        const data = await res.json();
        setArticles(data);
        setIsLoading(false); // Once data is fetched, set loading to false
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call fetchData on component mount
  }, []); // Empty dependency array to run the effect only once after component mount

  useEffect(() => {
    const fetchTopArticles = async () => {
      try {
        const res = await fetch(
          "https://dev.to/api/articles?per_page=4&state=rising"
        );
        const articles = await res.json();
        setTopArticles(articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTopArticles();
  }, []);

  useEffect(() => {
    const fetchAllBlogListing = async () => {
      try {
        const res = await fetch("https://dev.to/api/articles?per_page");
        const data = await res.json();
        setAllBlogListing(data);
        setFilteredArray(data)
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllBlogListing();
  }, []);

  return (
    <FirstContext.Provider
      value={{
        articles,
        topArticles,
        sliderArticles,
        allBlogListing,
        isLoading,
      }}
    >
      {children}
    </FirstContext.Provider>
  );
};
