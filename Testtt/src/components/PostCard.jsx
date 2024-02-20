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
import { useContext } from "react";
import { FirstContext } from "./utils/context";
import Link from "next/link";
function PostCard() {
  const { topArticles } = useContext(FirstContext);

  return (
    <div className="flex flex-wrap gap-4 ">
      {topArticles.map((article) => (
        <Link href={{ pathname: "/SinglePage", query: { id: article.id } }}>
          <div key={article.id} className="w-[310px]">
            <div className="relative h-[350px] rounded-lg overflow-hidden hover:scale-105 duration-200 shadow-xl">
              <img
                className="absolute  w-full h-full  object-cover"
                src={article.cover_image}
                alt={article.title}
              />
              <div className="relative w-[100px] h-[40px] top-[150px] bg-blue-500 left-2 text-white text-sm p-2 rounded-md hover:shadow-xl">
                Technology
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-[rgba(0,0,0,0.6)] text-white ">
                <p className="text-lg font-bold">{article.title}</p>
                <p className="text-sm">{article.description}</p>
              </div>
            </div>
            <div className="flex items-center mt-2"></div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PostCard;
