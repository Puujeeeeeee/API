import Footer from "../components/Footer";
import Link from "next/link";
export async function getStaticProps() {
  try {
    const res = await fetch("https://dev.to/api/articles?username=gereltuyamz");
    const articles = await res.json();
    return {
      props: {
        topArticles: articles,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        topArticles: [],
      },
    };
  }
}

function Content3({ topArticles }) {
  return (
    <div>
      <div className="flex flex-col items-center gap-2.5">
        <div className="flex w-[1290px] h-[390px] flex-col items-center">
          <div className="flex flex-col items-start gap-[30px]">
            <div className="flex items-start gap-8">
              <h3 className="text-xl font-bold">Trending</h3>
            </div>
            <div className="flex items-start gap-[20px]">
              <div className="flex flex-wrap gap-4">
                {topArticles?.map(
                  (article) => (
                 
                    (
                      <Link href={`/${article.slug}`}>
                        <div className="w-[310px] cursor-pointer">
                          <div className="relative h-[350px] rounded-lg overflow-hidden hover:scale-105 duration-200 shadow-xl">
                            <img
                              className="absolute w-full h-full object-cover"
                              src={article?.social_image}
                              alt={article?.title}
                            />
                            <div className="relative w-[100px] h-[40px] top-[150px] bg-blue-400 left-2 text-white text-sm p-2 rounded-md hover:shadow-xl">
                              Technology
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-[rgba(0,0,0,0.6)] text-white">
                              <p className="text-lg font-bold">
                                {article.title}
                              </p>
                              <p className="text-sm hover:text-blue-400 duration-300">
                                {article?.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center mt-2"></div>
                        </div>
                      </Link>
                    )
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content3;
