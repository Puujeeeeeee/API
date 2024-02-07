import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { FirstContext } from "../components/utils/context";

function SinglePage() {
  const router = useRouter();
  const { data } = useContext(FirstContext);

  console.log(router.query);

  return (
    <div className="flex justify-center items-center flex-col">
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <img src={item.cover_image} alt="" />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SinglePage;
