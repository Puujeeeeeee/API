// function PostCard() {
//   return (
//     <div className="flex flex-col items-start ">
//       <img className="relative" src="Rectangle.png" alt="" />
//       <div className="flex w-[280px] h-[120px] flex-col items-start gap-4 absolute px-4 py-2 ">
//         <div className="flex w-[100px] h-[25px] py-1 px-[10px] justify-center items-center gap-1 rounded-md bg-[#4B6BFB]">
//           <p className="text-white"> Technology</p>
//         </div>

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
      const res = await fetch(" https://dev.to/api/videos?per_page=4");
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
      <div className="flex gap-3 flex-wrap">
        {articles.map((article) => {
          return (
            <div className="  m-1 h-[360px] w-[300px]`  ">
              <img
                className="relative w-full h-full bg-cover rounded-lg "
                src={article.cloudinary_video_url}
                alt=""
              />
              <div className=" absolute ">{article.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default PostCard;
