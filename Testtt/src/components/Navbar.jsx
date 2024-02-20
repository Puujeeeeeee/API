import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Router } from "next/router";

const Navbar = ({}) => {
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
    <div className="flex w-full px-[350px] py-[32px] flex-col justify-between gap-[230px]">
      <div className="flex justify-evenly gap-[278px] ">
        <img src="Logo.svg" alt="" />
        <div className="flex items-center gap-[21px]">
          <div className="bg-white w-[667px] flex items-center justify-center gap-10">
            <Link
              className="text-xl font-medium hover:text-gray-400 duration-300 hover:scale-95 cursor-pointer "
              href={{ pathname: "Home", query: { id: 33333 } }}
            >
              Home
            </Link>
            <Link
              className="text-xl font-medium hover:text-gray-400 duration-300 hover:scale-95  "
              href={{ pathname: "BlogListing", query: { id: 33333 } }}
            >
              Blog
            </Link>
            <Link
              className="text-xl font-medium hover:text-gray-400 duration-300 hover:scale-95 "
              href={{ pathname: "ContactUs", query: { id: 33333 } }}
            >
              ContactUs
            </Link>

            {/* <Link href={{ pathname: "/contactus", query: { id: el.id } }}>
              contact
            </Link> */}
          </div>
          <div className="flex items-center gap-10 shadow-xl ">
            <input
              type="text"
              placeholder="Search"
              onChange={handleSearch}
              className="w-[166px] h-[40px] p-2 bg-gray-200 rounded-md"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
