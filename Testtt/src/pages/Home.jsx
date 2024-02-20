import React, { useRef } from "react";

import { useContext } from "react";

import Navbar from "../components/Navbar";
import Scroll from "./Scroll";
import Content4 from "../components/Content4";
import Content3 from "../components/Content3";

import Footer from "../components/Footer";
function Face() {
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
    <div className="flex flex-col gap-[100px] items-center justify-center px-[350px]">
      <Navbar
        homeHandleClick={homeHandleClick}
        blogHandleClick={blogHandleClick}
        contactHandleClick={contactHandleClick}
      />
      <Scroll homeRef={homeRef} />
      <Content3 />
      <Content4 blogRef={blogRef} />
      <Footer></Footer>
      {/* <BlogListing />
      <ContactUs />
      <ErrorPage /> */}
    </div>
  );
}
export default Face;
