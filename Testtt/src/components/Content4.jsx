import React, { useState } from "react";
import Link from "next/link";

function Content4({ article }) {
  const [limit, setLimit] = useState();
  const [items, setItems] = useState([]);
  const [filteredArray, setFilteredArray] = useState(items);
  const [isLoading, setIsLoading] = useState(true);

  async function getServerSideProps() {
    const res = await fetch(`https://dev.to/api/articles?per_page=${limit}`);
    const data = await res.json();
    setFilteredArray(data);
    setItems(data);
    setIsLoading(false);
    return {
      props: {
        article: data,
      },
    };
  }

  const loadMore = () => {
    setIsLoading(true);
    setLimit((prevLimit) => prevLimit + 3);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    console.log("Search Term:", searchTerm);
    const filteredArticles = items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    console.log("Filtered Articles:", filteredArticles);
    setFilteredArray(filteredArticles);
  };

  return (
    <div>
      <div className="flex flex-col text-3xl font-bold gap-8 p-6 px-[50px]">
        All Blog Post
        <div className="flex justify-between items-center">
          <div className="flex gap-6 text-xl font-normal cursor-pointer ">
            <p className="hover:text-blue-400 duration-300 hover:scale-95">
              All
            </p>
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
            <p className="hover:text-blue-400 duration-300 hover:scale-95 ">
              Branding
            </p>

            <Link
              className="hover:text-blue-400 duration-300 hover:scale-95 hover:underline"
              href={{ pathname: "/BlogListing", query: { id: 2222 } }}
            >
              View All
            </Link>
          </div>

          <div className="">
            <input
              type="text"
              placeholder="Search . . ."
              onChange={handleSearch}
              className="w-[166px] h-[40px] p-2 bg-gray-200 rounded-md flex text-lg input input-bordered input-accent max-w-xs"
            />
          </div>
        </div>
      </div>
      <div className="container flex">
        <div className="row m-0 flex  justify-center items-center flex-wrap w-[1361px]">
          {filteredArray.map((item) => (
            <Link
              key={item.id}
              href={{ pathname: "/SinglePage", query: { id: item.id } }}
            >
              <div className="col-3 p-3">
                <div className="bg-primary text-black-600 p-3 border flex w-[400px] h-[450px] flex-col gap-5 rounded-md cursor-pointer  hover:shadow-2xl duration-300  backdrop-blur-xl">
                  <img
                    className="w-[400px] h-[270px] border"
                    src={item.cover_image || "Image.png"}
                    alt={item.title}
                  />
                  <p className="w-[120px] h-[30px] border rounded-md bg-blue-100 flex justify-center items-center text-blue-500">
                    Technology
                  </p>
                  <p className="text-lg font-medium hover:text-blue-400 duration-300">
                    {item.title}
                  </p>
                  <p className="text-gray-400">
                    {item.readable_publish_date} 2022
                  </p>
                </div>
              </div>
            </Link>
          ))}
          <div className="col-12 p-3 flex flex-col justify-center items-center flex-wrap">
            {isLoading && (
              <div className="flex gap-[10px] p-[20px]">
                {Array(3)
                  .fill()
                  .map((_, index) => (
                    <div
                      key={index}
                      className="shadow rounded-md w-[400px] h-[450px] gap-8"
                    >
                      <div className="animate-pulse flex gap-3">
                        <div className="flex-1 space-y-2 py-1">
                          <div className="w-[400px] h-[270px] bg-slate-500 rounded"></div>
                          <div className="space-y-3">
                            <div className="w-[120px] h-[30px] bg-slate-500 rounded"></div>
                          </div>
                          <div className="w-[400px] h-[30px] bg-slate-500"></div>
                          <div className="flex gap-[10px] ">
                            <div className="w-[110px] h-[30px] bg-slate-500 rounded-md"></div>
                            <div className="w-[280px] h-[30px] bg-slate-500 rounded-md"></div>
                          </div>
                          <div className="w-[120px] h-[30px] bg-slate-500 rounded-md"></div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
            <div
              className=" w-[130px] h-[45px] flex justify-center items-center border rounded-lg text-gray-500 hover:bg-gray-100 duration-300 shadow-xl hover:scale-95 cursor-pointer "
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
