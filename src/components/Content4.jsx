import { useEffect, useState } from "react";
import Footer from "./Footer";
function Content4({ blogRef }) {
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dev.to/api/articles?per_page=9");
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
    <div ref={blogRef}>
      <div className="flex  flex-col items-center gap-2.5 ">
        <div className="flex w-[1200px] h-[390px] flex-col items-center">
          <div className="flex flex-col items-start gap-[30px]">
            <div className="flex items-start gap-8 flex-col">
              <h3 className="text-lg font-bold">All Blog Test</h3>
              <div className="flex  justify-between gap-[100px]">
                <div className="flex gap-4 text-base  ">
                  <p>All</p>
                  <p>Design</p>
                  <p>Travel</p>
                  <p>Fashion</p>
                  <p>Technology</p>
                  <p>Branding</p>
                  <div className=" flex justify-end gap-[100px]">
                    <p>View All</p>
                  </div>
                </div>
              </div>
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
            <div className="flex border w-[120px] rounded-md text-gray-400 h-[50px] justify-center items-center border-gray-500 ">
              <p>Load More</p>
            </div>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content4;
