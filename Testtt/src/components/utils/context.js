import { createContext, useState, useEffect } from "react";

export const FirstContext = createContext([]);

export const FirstContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [topArticles, setTopArticles] = useState([]);
  const [sliderArticles, setSliderArticles] = useState([]);
  const [allBlogListing, setAllBlogListing] = useState([]);
  const [data, setData] = useState([]);
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
        const res = await fetch(`https://dev.to/api/articles?per_page`);
        const data = await res.json();
        setAllBlogListing(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Render loading animation if isLoading is true
  if (isLoading) {
    return (
      <div className="flex gap-[10px] p-[20px]">
        {Array(1)
          .fill()
          .map((_, index) => (
            <div key={index}>
              <div
// v
              ></div>
            </div>
          ))}
      </div>
    );
  }

  // If not loading, render children components
  return (
    <FirstContext.Provider
      value={{ articles, topArticles, sliderArticles, allBlogListing, data }}
    >
      {children}
    </FirstContext.Provider>
  );
};
