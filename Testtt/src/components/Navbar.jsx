import React, { useState, useEffect } from "react";

const Navbar = ({ homeHandleClick, blogHandleClick, contactHandleClick }) => {
  const [filteredArray, setFilteredArray] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articlesRes = await fetch(
          "https://dev.to/api/articles?per_page=10"
        );
        const articlesData = await articlesRes.json();
        setArticles(articlesData);
        setFilteredArray(articlesData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredArray(filteredArticles);
  };

  return (
    <div className="flex w-full px-[350px] py-[32px] flex-col justify-between gap-[200px]">
      <div className="flex justify-evenly gap-[118px]">
        <img src="Logo.svg" alt="" />
        <div className="flex items-center gap-[21px]">
          <div className="bg-white w-[667px] flex items-center justify-center gap-10">
            <button onClick={homeHandleClick}>Home</button>
            <button onClick={blogHandleClick}>Blog</button>
            <button onClick={contactHandleClick}>Contact</button>
          </div>
          <div className="flex items-center gap-10">
            {filteredArray.map((articles) => {
              <input
                type="text"
                placeholder="Search"
                onChange={handleSearch}
                className="w-[166px] p-2 bg-gray-200 rounded-md"
              />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
