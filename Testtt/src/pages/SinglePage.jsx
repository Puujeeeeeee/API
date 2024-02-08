import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function SinglePage() {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { id } = router.query;
        const res = await fetch(`https://dev.to/api/articles/${id}`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (router.query.id) {
      fetchData();
    }
  }, [router.query.id]);

  if (!data) {
    return <div></div>;
  }
  return (
    <div className="flex justify-center items-center flex-col gap-[100px] px-[600px]">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="gap-[50px] flex flex-col" key={data.id}>
        <p className="text-3xl font-semibold">{data.title}</p>
        {data.readable_publish_date}
        <p> {data.users}</p>
        <img src={data.cover_image} alt="" />
        <p className="leading-9 text-gray-700 flex gap-[30px] flex-col">
          {data.description}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          laboriosam voluptates numquam unde, dolorem quod repellat, soluta,
          dignissimos culpa ipsam in officiis eaque cum dolorum! Distinctio a
          omnis excepturi? Architecto. span minus nihil, distinctio laboriosam
          labore dolore<span></span> lorem Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Blanditiis quo at saepe aliquam. Quae
          quis minus nihil, distinctio laboriosam labore dolores adipisci.
          Officiis, voluptatem qui doloremque nisi aut consequuntur eveniet?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nulla
          <p className="text-black font-medium text-2xl">
            {" "}
            Research Your Destination
          </p>
          non harum beatae doloremque sit earum repudiandae nisi iure autem quas
          hic natus alias, quisquam unde modi, quia temporibus veniam. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Similique
          laboriosam voluptates numquam unde, dolorem quod repellat, soluta,
          dignissimos culpa ipsam in officiis eaque cum dolorum! Distinctio a
          omnis excepturi? Architecto.lorem Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Blanditiis quo at saepe aliquam. Quae
          quis minus nihil, distinctio laboriosam labore dolores adipisci.
          Officiis, voluptatem qui doloremque nisi aut consequuntur eveniet?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nulla
          non harum beatae doloremque sit earum repudiandae nisi iure autem quas
          <p className="text-black font-medium text-2xl"> Plan Your Lebron</p>
          hic natus alias, quisquam unde modi, quia temporibus veniam. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Similique
          laboriosam voluptates numquam unde, dolorem quod repellat, soluta,
          dignissimos culpa ipsam in officiis eaque cum dolorum! Distinctio a
          omnis excepturi? Architecto.lorem Lorem, ipsum dolor sit amet
          consectetur adipisicing elit <span></span>. Blanditiis quo at saepe
          aliquam. Quae dolores adipisci. Officiis, voluptatem qui doloremque
          nisi aut consequuntur eveniet? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Rem, nulla non harum beatae doloremque sit earum
          repudiandae nisi iure autem quas hic natus
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default SinglePage;
