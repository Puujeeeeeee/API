import Link from "next/link";
export default function Article({ article }) {
  return (
    <div className="">
    

      {/* <h1 className=" text-4xl">{article.title}</h1>
      <img src={article.cover_image} alt="" />
      <div dangerouslySetInnerHTML={{ __html: article.body_html }}></div> */}
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { slug } = query;
  const res = await fetch(
    `https://dev.to/api/articles?per_page=4&state=rising/${slug}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
}
