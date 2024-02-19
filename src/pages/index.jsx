import React, { useRef } from "react";

import Content3 from "@/components/Content3";
import Navbar from "@/components/Navbar"; // Import Navbar from the correct location
import Scroll from "@/components/Scroll";
import Content4 from "@/components/Content4";
import BlogListing from "@/components/BlogListing";
import ContactUs from "@/components/ContactUs";
import ErrorPage from "@/components/404Page";
export default function Home() {
  const homeRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const homeHandleClick = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const blogHandleClick = () => {
    blogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const contactHandleClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-[100px]">
      {/* <Navbar
        homeHandleClick={homeHandleClick}
        blogHandleClick={blogHandleClick}
        contactHandleClick={contactHandleClick}
      />
      <Scroll homeRef={homeRef} />
      <Content3></Content3> */}
      {/* <Content4 blogRef={blogRef} /> */}
      {/* <BlogListing></BlogListing> */}
      {/* <ContactUs></ContactUs> */}
      <ErrorPage></ErrorPage>
    </div>
  );
}

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
