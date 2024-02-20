import React, { useState, useContext, useEffect } from "react";
import { FirstContext } from "../components/utils/context";
import Link from "next/link";

function Scroll({ homeRef }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const intervalTime = 6000;
  let intervalId;

  const { articles } = useContext(FirstContext);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === articles.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? articles.length - 1 : prevSlide - 1
    );
  };

  const startAutoScroll = () => {
    intervalId = setInterval(() => {
      nextSlide();
    }, intervalTime);
  };

  const stopAutoScroll = () => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    startAutoScroll();
    setIsLoading(true); // Set loading to true initially

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      setIsLoading(false); // Set loading to false once data is loaded
    }
  }, [articles]);

  return (
    <div ref={homeRef}>
      <div className="flex justify-center items-center flex-col gap-3 relative ">
        {articles.length > 0 && (
          <Link href={{ pathname: "/SinglePage", query: { id: articles.id } }}>
            <img
              className="flex transition-transform ease-out duration-500 rounded-lg border-2 border-gray-200 shadow-xl w-[1300px] h-[700px]"
              src={articles[currentSlide]?.social_image}
              alt={articles[currentSlide]?.title}
              onMouseEnter={stopAutoScroll}
              onMouseLeave={startAutoScroll}
            />
          </Link>
        )}

        {isLoading && ( // Render loader spinner if isLoading is true
          <div className="flex gap-[10px] p-[20px]">
            {Array(1)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="border border-blue-300 shadow rounded-md w-[400px] h-[450px] gap-4"
                >
                  <div className="animate-pulse flex gap-3">
                    <div className="flex-1 space-y-2 py-1">
                      <div className="w-[400px] h-[270px] bg-slate-500 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
        {articles.length > 0 && (
          <div className="card w-[650px] h-[250px] rounded-lg border flex-col items-center bg-white absolute left-2 bottom-16 p-8">
            <div>
              <p className="w-[100px] h-[30px] border bg-blue-500 rounded-md text-white flex items-center justify-center">
                Technology
              </p>
              <p className="text-4xl font-bold py-5">
                {articles[currentSlide].title}
              </p>
              <p className="text-gray-500 font-medium"> August 20, 2022</p>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <button
            className="w-[40px] h-[40px] border flex justify-center items-center rounded-md hover:bg-gray-200 duration-300 shadow-xl hover:scale-95"
            onClick={prevSlide}
          >
            <img src="iso.svg" alt="" />
          </button>
          <button
            className="w-[40px] h-[40px] border flex justify-center items-center rounded-md hover:bg-gray-200 duration-300 shadow-xl hover:scale-95"
            onClick={nextSlide}
          >
            <img src="icon.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Scroll;
