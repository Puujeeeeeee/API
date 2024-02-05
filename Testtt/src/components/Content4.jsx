import { useState, useEffect } from "react";

function Content4({ blogRef }) {
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(9);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dev.to/api/articles?per_page=${limit}`
        );

        const data = await response.json();
        setItems(data);
      } catch (error) {}
    };
    fetchData();
  }, [limit]);

  const loadMore = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  return (
    <div ref={blogRef}>
      <div className="flex flex-col text-3xl font-bold gap-8  p-6 ">
        All Blog Post
        <div className="flex gap-6 text-xl font-normal cursor-pointer">
          <p className=" hover:text-yellow-400 duration-150">All</p>
          <p className="hover:text-yellow-400 duration-150">Design</p>
          <p className="hover:text-yellow-400 duration-150">Travel</p>
          <p className="hover:text-yellow-400 duration-150">Fashion</p>
          <p className="hover:text-yellow-400 duration-150">Technology</p>
          <p className="hover:text-yellow-400 duration-150">Branding</p>
          <div className=" hover:text-yellow-400 duration-150">View All</div>
        </div>
      </div>
      <div className="container flex ">
        <div className="row m-0 flex justify-center items-center flex-wrap  ">
          {items.map((item) => (
            <div key={item.id} className="col-3 p-3 ">
              <div className="bg-primary text-black-600 p-3 border flex w-[400px] h-[450px] flex-col gap-5 rounded-md ">
                <img
                  className="w-[400px] h-[270px] border "
                  src={item.cover_image || Image.png}
                  alt={item.title}
                />
                <p className="w-[120px] h-[30px] border rounded-md bg-blue-100 flex justify-center items-center text-blue-500">
                  Technology
                </p>
                <p className="text-lg font-medium">{item.title}</p>
                <p className="text-gray-400">
                  {" "}
                  {item.readable_publish_date} 2022
                </p>
              </div>
            </div>
          ))}
          <div className="col-12 p-3 flex  justify-center items-center ">
            <div
              className="btn btn-primary w-[130px] h-[45px] flex justify-center items-center border rounded-lg text-gray-500 hover:bg-gray-300 duration-300 cursor-pointer "
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
