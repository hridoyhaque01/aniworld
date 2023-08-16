import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import display from "../../assets/CrunchyRoll-Display-website.jpg";
import bg from "../../assets/bgTest.jpg";
import yourName from "../../assets/yourName.jpg";

function Home() {
  const [activeAnime, setActiveAnime] = useState({});
  const [isSet, setIsSet] = useState(false);
  const [animateText, setAnimateText] = useState(true);
  const [translationValue, setTranslationValue] = useState(0);
  const containerRef = useRef();
  const [animeData, setAnimeData] = useState([
    {
      id: 1,
      fileUrl: yourName,
      title: "Your Name",
    },
    {
      id: 2,
      fileUrl: bg,
      title: "Sword Art Online",
    },
    {
      id: 3,
      fileUrl: display,
      title: "Death Note",
    },
    {
      id: 4,
      fileUrl: bg,
      title: "One Piece",
    },
    {
      id: 5,
      fileUrl: display,
      title: "Naruto",
    },
    {
      id: 6,
      fileUrl: yourName,
      title: "Todomachi Game",
    },
  ]);

  const [data, setData] = useState([]);

  const nextAnime = () => {
    if (data?.length >= 2) {
      setActiveAnime(data[1]);
      const updatedAnimeData = [...data];
      const tempObj = data[0];
      updatedAnimeData.splice(0, 1);
      updatedAnimeData?.push(tempObj);
      setData(updatedAnimeData);
      setAnimateText(true);
      setTranslationValue((prevValue) => prevValue - 260);
    } else {
      return;
    }
  };

  const prevAnime = () => {
    if (data?.length >= 2) {
      setActiveAnime(data[data?.length - 1]);
      const updatedAnimeData = [...data];
      const tempObj = data[data?.length - 1];
      updatedAnimeData.splice(-1, 1);
      updatedAnimeData.unshift(tempObj);
      setData(updatedAnimeData);
      setAnimateText(true);
      setTranslationValue((prevValue) => prevValue + 260);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (animeData?.length > 0) {
      setActiveAnime(animeData[0]);
      setData([...animeData]);
    }
  }, [animeData]);

  useEffect(() => {
    if (animateText) {
      setTimeout(() => {
        setAnimateText(false);
        setStateChanged(false);
      }, 2500);
    }
  }, [animateText]);

  return (
    <section className="relative h-full w-full z-50 px-6">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
        <img
          //   src={activeAnime?.fileUrl}
          src={bg}
          alt=""
          className="w-full h-full object-cover bg-center duration-300"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-bgOverlay z-20"></div>
      </div>
      {/* main content  */}
      <div className="h-full w-full max-w-[1200px] mx-auto relative z-40 flex items-center">
        <div className="w-full max-w-[520px] shrink-0" ref={containerRef}>
          <h2
            className={`text-5xl font-bold duration-[800ms] title animate__animated ${
              animateText ? "animate__fadeInUp" : ""
            }`}
          >
            {activeAnime?.title}
          </h2>
          <p
            className={`text-fade mt-6 duration-[800ms] title animate__animated ${
              animateText ? "animate__fadeInUp" : ""
            }`}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            suscipit doloremque possimus nam laudantium similique illum culpa
            reiciendis voluptas velit ipsam corporis placeat labore ullam nulla
            ab, et laborum voluptate.
          </p>
          <div className="mt-10">
            <button
              type="button"
              className="px-10 py-4 rounded-full bg-error font-medium capitalize text-sm"
            >
              See Details
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 z-50 w-[820px] overflow-hidden">
        <div className="w-full flex items-center gap-6">
          {animeData?.map((item, i) => (
            <div
              className={`w-full max-w-[210px] relative rounded-md overflow-hidden shrink-0 cursor-pointer duration-300`}
              key={i}
            >
              <div>
                <img src={yourName} alt="" className="w-full" />
              </div>
              <h2 className="text-xl font-bold absolute left-0 bottom-0 w-full text-center bg-overlay py-3">
                {item?.title}
                {item?.id + " = " + activeAnime?.id}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 mt-10">
          <button
            className="w-10 h-10 bg-overlay rounded-full flex items-center justify-center cursor-pointer"
            type="button"
            onClick={prevAnime}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="arrow"
            >
              <path
                fill="#fff"
                d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"
              ></path>
            </svg>
          </button>
          <button
            className="w-10 h-10 bg-overlay rounded-full flex items-center justify-center cursor-pointer"
            type="button"
            onClick={nextAnime}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 64 64"
              viewBox="0 0 64 64"
              id="arrow"
            >
              <path
                fill="#fff"
                d="m-210.9-289-2-2 11.8-11.7-11.8-11.7 2-2 13.8 13.7-13.8 13.7"
                transform="translate(237 335)"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
