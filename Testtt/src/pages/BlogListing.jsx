import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import ContactUs from "./ContactUs";
import { FirstContext } from "../components/utils/context";
import Link from "next/link";
import Navbar from "../components/Navbar";

function BlogListing() {
  const router = useRouter();
  const { allBlogListing } = useContext(FirstContext);
  const [filteredArray, setFilteredArray] = useState(allBlogListing); // Initialize with allBlogListing data

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredArticles = allBlogListing.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    setFilteredArray(filteredArticles);
  };

  return (
    <div className="flex flex-col w-full h-[2815px] items-center  ">
      <Navbar />
      <div className="flex flex-col items-center gap-2.5  ">
        <div className="flex w-[1370px] h-[390px] flex-col items-center">
          <div className="flex flex-col items-start gap-[30px]">
            <div className="flex items-center  w-[1370px] justify-between">
              <Link
                className="border rounded-md w-[70px] h-[30px]  text-center shadow-lg hover:bg-gray-200 duration-300 hover:scale-95"
                href={{ pathname: "/Home" }}
              >
                Back
              </Link>
              <h3 className="text-lg font-bold">All Blog Test</h3>
              <input
                type="text"
                placeholder="Search . . ."
                onChange={handleSearch}
                className="w-[166px] h-[40px] p-2 bg-gray-200 rounded-md flex text-lg input input-bordered input-accent max-w-xs"
              />
              <div className="flex justify-between gap-[100px]"></div>
            </div>
            <div className="border-r-4"></div>

            <div className="w-full flex justify-center items-center gap-[50px]">
              <div className="flex flex-wrap gap-3 h-[1530px]">
                {filteredArray.map((blogItem) => (
                  <Link
                    key={blogItem.id}
                    href={{
                      pathname: "/SinglePage",
                      query: { id: blogItem.id },
                    }}
                  >
                    <div className="border-2 rounded-md m-3 h-[476px] w-[368px]  hover:shadow-2xl duration-300">
                      <img
                        src={blogItem.cover_image}
                        className="h-[240px] w-[360px] p-3 object-cover rounded-md mb-2"
                      />

                      <div className="w-[360px] h-[220px] p-3">
                        <div className="flex w-[120px] h-[30px] px-2.5 py-1  justify-center items-center gap-1 rounded-md bg-gray-200 text-[#4B6BFB]">
                          Technology
                        </div>
                        <h2 className="text-lg font-semibold p-3">
                          {blogItem.title}
                        </h2>

                        <p className="flex items-center p-3 text-gray-400">
                          {blogItem.readable_publish_date}, 2022
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogListing;
