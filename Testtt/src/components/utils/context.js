import { createContext } from "react";
import { useState, useEffect } from "react";
export const FirstContext = createContext([]);
export const FirstContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [topArticles, setTopArticles] = useState([]);
  const [sliderArticles, setSliderArticles] = useState([]);
  const [allBlogListing, setAllBlogListing] = useState([]);
  const [data, setData]=useState([]);


  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const res=await fetch("https://dev.to/api/articles")
        const data=await res.json();
        setData(data);

      }catch(error){
        console.log(error)
      }
    }
    fetchData()
  },[]);
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
        const res = await fetch(`https://dev.to/api/articles?per_page`);
        const data = await res.json();
        setAllBlogListing(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <FirstContext.Provider
      value={{ articles, topArticles, sliderArticles, allBlogListing, data }}
    >
      {children}
    </FirstContext.Provider>
  );
};
