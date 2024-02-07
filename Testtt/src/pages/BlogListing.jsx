import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import ContactUs from "./ContactUs";
function BlogListing() {
  const [articles, setArticles] = useState([]);
  const router = useRouter();
  console.log(router.query.id);
  const fetchData = async () => {
    try {
      const res = await fetch("https://dev.to/api/articles?per_page=12");
      const data = await res.json();
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
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
                  {articles.map((article) => (
                    <div
                      key={article.id}
                      className="border-2 rounded-md m-3 h-[476px] w-[368px]  "
                    >
                      <img
                        src={article.cover_image}
                        className="h-[240px] w-[360px] p-3 object-cover rounded-md mb-2"
                      />

                      <div className="w-[360px] h-[220px] p-3">
                        <div className="flex w-[120px] h-[30px] px-2.5 py-1  justify-center items-center gap-1 rounded-md bg-gray-200 text-[#4B6BFB]">
                          Technology
                        </div>
                        <h2 className="text-lg font-semibold p-3">
                          {article.title}
                        </h2>

                        <p className="flex items-center p-3 text-gray-400">
                          {article.readable_publish_date}, 2022
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
      <div className="flex flex-col  items-center ">
        <div className=" w-[1200px] h-[500px] bg-gray-100">
          <div className="flex  justify-between py-10 px-2">
            <div className="flex flex-col w-[350px] h-[300px] gap-4">
              <h1 className="text-2xl">About</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate, ipsum impedit. Tempore eligendi animi voluptatum,
                excepturi rem reiciendis, odio iusto ipsa, autem voluptatibus
                quasi id! Temporibus, consectetur! Eius, nostrum nisi.
              </p>
              <p className="font-medium text-gray-500">
                Email:prevsambuub@gmail.com
              </p>
              <p className="font-medium text-gray-500">Phone:+976 95129336</p>
            </div>
            <div className="flex flex-col gap-2 text-gray-500">
              <p>Home</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
            <div className="flex"></div>
          </div>
          <div
            className="flex  justify-between
        "
          >
            <img src="Logo.svg" alt="" />
            <div className="flex justify-center gap-7 px-2 text-gray-500">
              <p> Terms of use</p>
              <p>Privacy Policy</p>
              <p> Cookie Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogListing;
