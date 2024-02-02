import HomePage from "@/components/HomePage";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="">
      <HomePage></HomePage>
    </div>
  );
}
// export default function Home() {
//   const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//   );

//   console.log(fetchPromise);

//   fetchPromise.then((response) => {
//     console.log(`Received response: ${response.status}`);
//   });

//   console.log("Started request…");
// }

// import { useEffect, useState } from "react";
// export default function Promise() {
//   const [articles, setArticles] = useState([]);
//   const fetchData = async () => {
//     try {
//       const res = await fetch(" https://dev.to/api/articles");
//       const data = await res.json();
//       setArticles(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <div className="w-[100%] justify-center flex">
//       <div>
//         <input
//           type="text"
//           className="border-[2px] border-red-500 w-[200px] h-[50px] items-center"
//         />
//       </div>
//       <div className="flex gap-3 flex-wrap">
//         {articles.map((article) => {
//           return (
//             <div className="border-[2px] rounded-md m-3 h-[200px] w-[300px] p-[10px]">
//               <img src={article.cover_image} alt="" />
//               {article.title}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
