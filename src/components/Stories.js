import React from "react";
import Title from "./Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";

const Stories = ({ story }) => {
  const { title, news } = story;
  //console.log(title);

  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: 'loop',
    rewind: true,
    keyboard: 'global',
    gap: '1rem',
    pagination: false,
    padding: '2rem',
    breakpoints: {
        1200: { perPage: 3},
        991: { perPage: 2.3},
        768: { perPage: 2},
        500: { perPage: 1.3},
        425: { perPage: 1},
    },
  };

  return (
    <div className="nike-container">
      <Title title={title} />
        <Splide options={splideOptions}>
          {news?.map((story, i) => (
            <SplideSlide key={i}>
              <div className="flex flex-col gap-4 rounded-lg shadow shadow-slate-200 border border-slate-100 mt-7">
                <div className="flex items-center justify-center">
                  <img
                    src={story?.img}
                    alt={i}
                    className="h-full w-auto rounded-t-lg "
                  ></img>
                </div>
                <div className="flex items-center justify-between w-full px-4">
                  <div className="flex md:flex-col flex-row lg:flex-row items-center gap-0.5">
                    <HeartIcon className="icon-style text-red-500" />
                    <span className="text-xs font-bold">{story?.like}</span>
                  </div>
                  <div className="flex md:flex-col flex-row lg:flex-row items-center gap-0.5">
                    <ClockIcon className="icon-style text-black" />
                    <span className="text-xs font-bold">{story?.time}</span>
                  </div>
                  <div className="flex md:flex-col flex-row lg:flex-row items-center gap-0.5 text-blue-600">
                    <HashtagIcon className="icon-style text-blue-600" />
                    <span className="text-xs font-bold">{story?.by}</span>
                  </div>
                </div>
                <div className="flex flex-col px-4 w-full">
                  <h1 className="lg:text-base text-sm font-semibold">
                    {story?.title}
                  </h1>
                  <p className="lg:text-sm text-xs text-justify">
                    {story?.text.substring(0, 165)+'...'}
                  </p>
                  <a href={story?.url} target="_blank" rel='noreferrer'>
                    <button className=" bg-black text-center py-1.5 my-2 w-full text-slate-100 button-theme text-sm">
                      {story?.btn}
                    </button>
                  </a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
  );
};

export default Stories;
