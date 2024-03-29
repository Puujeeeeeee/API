// import React, { useRef } from "react";

// import { useContext } from "react";

// import Navbar from "../components/Navbar";
// import Scroll from "../components/Scroll";
// import Content4 from "../components/Content4";
// import Content3 from "../components/Content3";

// import Footer from "../components/Footer";
// function Face() {
//   const homeRef = useRef(null);
//   const blogRef = useRef(null);
//   const contactRef = useRef(null);

//   const homeHandleClick = () => {
//     homeRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const blogHandleClick = () => {
//     blogRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const contactHandleClick = () => {
//     contactRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="flex flex-col gap-[100px] items-center justify-center px-[350px]">
//       <Navbar
//         homeHandleClick={homeHandleClick}
//         blogHandleClick={blogHandleClick}
//         contactHandleClick={contactHandleClick}
//       />
//       <Scroll homeRef={homeRef} />
//       <Content3 />
//       <Content4 blogRef={blogRef} />
//       <Footer></Footer>
//       {/* <BlogListing />
//       <ContactUs />
//       <ErrorPage /> */}
//     </div>
//   );
// }
// export default Face;
// import { useContext } from "react";
// import { FirstContext } from "../components/utils/context";

// export default function Home() {
//   const value = useContext(FirstContext);
//   console.log(value);
//   return (
//     <div>
//       <p>Hello</p>
//     </div>
//   );
// }

// export default function Home() {
//   const aboutRef = useRef(null);
//   const experienceRef = useRef(null);
//   const workRef = useRef(null);
//   const contactRef = useRef(null);
//   const skilssRef = useRef(null);
//   const aboutHandleClick = () => {
//     aboutRef.current?.scrollIntoView({ behavior: "smooth" });
//   };
//   const skilssHandleClick = () => {
//     skilssRef.current?.scrollIntoView({ behavior: "smooth" });
//   };
//   const experienceHandleClick = () => {
//     experienceRef.current?.scrollIntoView({ behavior: "smooth" });
//   };
//   const contactHandleClick = () => {
//     contactRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="flex flex-col items-center max-sm:items-center ">
//       <div className="max-w-[1440px] max-sm-w-[375px] ">
//         <Head
//           aboutHandleClick={aboutHandleClick}
//           skilssHandleClick={skilssHandleClick}
//           experienceHandleClick={experienceHandleClick}
//           contactHandleClick={contactHandleClick}
//         ></Head>

//         <Hero />
//         <About aboutRef={aboutRef} />

//         <Skilss skilssRef={skilssRef} />
//         <Experience experienceRef={experienceRef} />
//         <Work workRef={workRef} />
//         <Top></Top>
//         <Contact contactRef={contactRef} />
//       </div>
//       <Footer />
//     </div>
//   );
// }

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
import Face from "./Home";
export default function Home() {
  return (
    <div>
      <Face></Face>
    </div>
  );
}
// import Link from "next/link";
// export default function Home({ articles }) {
//   return (
//     <div className="flex gap-[10px]">
//       {articles.map((article) => {
//         return (
//           <Link href={`/${article.slug}`}>
//             <div className="border-[1px] border-solid border-black rounded-md w-[200px]">
//               <img className=" w-[200px]" src={article.social_image} alt="" />
//               <h1>{article.title}</h1>
//             </div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// }
// export async function getServerSideProps() {
//   const res = await fetch("https://dev.to/api/articles?username=gereltuyamz");
//   const articles = await res.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// }
