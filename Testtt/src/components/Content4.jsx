import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
function Content4({ blogRef }) {
  const [limit, setLimit] = useState(9);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dev.to/api/articles?per_page=${limit}`
        );

        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, [limit]);

  const loadMore = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  return (
    <div ref={blogRef}>
      <div className="flex flex-col text-3xl font-bold gap-8 p-6 ">
        All Blog Post
        <div className="flex gap-6 text-xl font-normal cursor-pointer">
          <p className="hover:text-blue-400 duration-300 hover:scale-95">All</p>
          <p className="hover:text-blue-400 duration-300 hover:scale-95">
            Design
          </p>
          <p className="hover:text-blue-400 duration-300 hover:scale-95">
            Travel
          </p>
          <p className="hover:text-blue-400 duration-300 hover:scale-95">
            Fashion
          </p>
          <p className="hover:text-blue-400 duration-300 hover:scale-95">
            Technology
          </p>
          <p className="hover:text-blue-400 duration-300 hover:scale-95 hover:underline">
            Branding
          </p>

          <Link
            className="hover:text-blue-400 duration-300 hover:scale-95"
            href={{ pathname: "/BlogListing", query: { id: 2222 } }}
          >
            View All
          </Link>
        </div>
      </div>
      <div className="container flex  ">
        <div className="row m-0 flex justify-center items-center flex-wrap ">
          {items.map((item) => (
            <Link href={{ pathname: "/SinglePage", query: { id: item.id } }}>
              <div key={item.id} className="col-3 p-3 ">
                <div className="bg-primary text-black-600 p-3 border flex w-[400px] h-[450px] flex-col gap-5 rounded-md cursor-pointer shadow-xl hover:scale-105 duration-300 backdrop-blur-xl">
                  <img
                    className="w-[400px] h-[270px] border "
                    src={item.cover_image || "Image.png"}
                    alt={item.title}
                  />
                  <p className="w-[120px] h-[30px] border rounded-md bg-blue-100 flex justify-center items-center text-blue-500">
                    Technology
                  </p>
                  <p className="text-lg font-medium hover:text-blue-400 duration-300">
                    {item.description}
                  </p>
                  <p className="text-gray-400">
                    {item.readable_publish_date} 2022
                  </p>
                </div>
              </div>
            </Link>
          ))}
          <div className="col-12 p-3 flex justify-center items-center">
            <div
              className="btn btn-primary w-[130px] h-[45px] flex justify-center items-center border rounded-lg text-gray-500 hover:bg-gray-100 duration-300 shadow-xl hover:scale-95
              cursor-pointer animate-bounce"
              onClick={loadMore}
            >
              Load More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content4;
