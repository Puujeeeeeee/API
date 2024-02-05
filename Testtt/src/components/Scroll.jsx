import React, { useState, useEffect } from "react";

function Scroll({ homeRef }) {
  const [articles, setArticles] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalTime = 4000;
  let intervalId;

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
    return () => {
      stopAutoScroll();
    };
  }, [articles]);

  return (
    <div ref={homeRef}>
      <div className="flex justify-center items-center flex-col gap-3 ">
        {articles.length > 0 && (
          <img
            className="flex transition-transform ease-out duration-500 rounded-lg border"
            // style={{ transform: `translateX(-${currentSlide * 300}%)` }}
            src={articles[currentSlide].social_image}
            alt={articles[currentSlide].title}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
          />
        )}
        <div className="flex gap-3 ">
          <button
            className="w-[40px] h-[40px] border flex justify-center items-center rounded-md"
            onClick={prevSlide}
          >
            <img src="iso.svg" alt="" />
          </button>
          <button
            className="w-[40px] h-[40px] border flex justify-center items-center rounded-md"
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
