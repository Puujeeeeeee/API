// function PostCard() {
//   return (
//     <div className="flex flex-col items-start ">
//       <img className="relative" src="Rectangle.png" alt="" />
//       <div className="flex w-[280px] h-[120px] flex-col items-start gap-4 absolute px-4 py-2 ">
// <div className="flex w-[100px] h-[25px] py-1 px-[10px] justify-center items-center gap-1 rounded-md bg-[#4B6BFB]">
//   <p className="text-white"> Technology</p>
// </div>

//         <p className="text-white text-lg">
//           The Impact of Technology on the Workplace: How Technology is Changing
//         </p>
//       </div>
//     </div>
//   );
// }
// export default PostCard;

import { useEffect, useState } from "react";
function PostCard() {
  const [articles, setArticles] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch("https://dev.to/api/articles?per_page=4");
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
    <div>
      <div className="flex gap-3 ">
        {articles.map((article) => {
          return (
            <div className="  m-1 h-[320px] w-[293px] flex flex-col gap-8  ">
              <img
                className="relative w-full h-full bg-cover rounded-lg "
                src={article.cover_image}
                alt=""
              />

              <div className="flex w-[100px] h-[25px] p-3   px-[10px] justify-center items-center absolute gap-1 rounded-md bg-[#4B6BFB]">
                <p className="text-white"> Technology</p>
              </div>
              <div className=" absolute text-white p-3 flex flex-wrap">
                {article.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default PostCard;
