import { useEffect, useState } from "react";
import { Router } from "next/router";

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("https://dev.to/api/articles?per_page=4&top=1");
      const data = await res.json();
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);
function SinglePage() {
  return <div></div>;
}
export default SinglePage;
