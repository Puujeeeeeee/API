import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import ContactUs from "./ContactUs";
import { FirstContext } from "../components/utils/context";
import Link from "next/link";
function BlogListing() {
  const { allBlogListing } = useContext(FirstContext);
  const router = useRouter();
  console.log(router.query.id);
  return (
    <Link
      href={{ pathname: "/SinglePage", query: { id: allBlogListing.id } }}
      key={allBlogListing.id}
    >
      <div className="flex flex-col w-full h-[2815px] items-center">
        <div className=" flex w-full px-[350px] py-[32px] flex-col  justify-between gap-[200px]">
          <div className="flex justify-evenly gap-[118px]">
            <img src="Logo.svg" alt="" />
            <div className="flex items-center gap-[21px]">
              <div className=" bg-white w-[667px] flex items-center justify-center gap-10">
                <button>Home</button>
                <button>Blog</button>
                <button>Contact</button>
              </div>
              <div className="flex items-center gap-10">
                <div className="flex w-[166px] p-2 items-center gap-3 bg-gray-200 rounded-md">
                  <p className="text-gray-400">search</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex  flex-col items-center gap-2.5 ">
            <div className="flex w-[1200px] h-[390px] flex-col items-center">
              <div className="flex flex-col items-start gap-[30px]">
                <div className="flex items-start gap-8 ">
                  <h3 className="text-lg font-bold">All Blog Test</h3>
                  <div className="flex  justify-between gap-[100px]"></div>
                </div>
                <div className="w-full flex justify-center items-center gap-[50px]">
                  <div className="flex flex-wrap gap-3 h-[1530px] ">
                    {allBlogListing.map((allBlogListing) => (
                      <div
                        key={allBlogListing.id}
                        className="border-2 rounded-md m-3 h-[476px] w-[368px]  "
                      >
                        <img
                          src={allBlogListing.cover_image}
                          className="h-[240px] w-[360px] p-3 object-cover rounded-md mb-2"
                        />

                        <div className="w-[360px] h-[220px] p-3">
                          <div className="flex w-[120px] h-[30px] px-2.5 py-1  justify-center items-center gap-1 rounded-md bg-gray-200               text-[#4B6BFB]">
                            Technology
                          </div>
                          <h2 className="text-lg font-semibold p-3">
                            {allBlogListing.title}
                          </h2>

                          <p className="flex items-center p-3 text-gray-400">
                            {allBlogListing.readable_publish_date}, 2022
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default BlogListing;
