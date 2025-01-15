import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

import axios from "../utils/axios";

const HorizontalScroll = () => {
  const [trendingData, setTrendingData] = useState(null);
  const [category, setCategory] = useState("all");

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category.toLowerCase()}/day`
      );

      setTrendingData(data.results);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };
  useEffect(() => {
    getTrending();
  }, [category]);
  return (
    trendingData && (
      <div className="w-full text-white">
        <div className="p-5 flex justify-between items-center">
          <h2 className="uppercase text-2xl font-bold">Trending</h2>
          <Dropdown
            title={"Filter"}
            option={["all", "tv", "movie", "person"]}
            handleCategory={setCategory}
          ></Dropdown>
        </div>
        <div className="w-full h-[50vh] flex gap-[1vw] pl-5 overflow-x-auto pb-[1vw]">
          {trendingData.map((trending, index) => {
            return (
              <div
                key={index}
                className="card w-[20%] h-full shrink-0 rounded-md overflow-hidden bg-zinc-800"
              >
                <Link>
                  <img
                    className="h-[60%] w-full object-cover rounded-md"
                    src={
                      trending.backdrop_path || trending.profile_path
                        ? `https://image.tmdb.org/t/p/original/${
                            trending.backdrop_path ||
                            trending.poster_path ||
                            trending.profile_path
                          }`
                        : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                    }
                    alt=""
                  />
                </Link>
                <div className="h-[40%] p-3">
                  <h3 className="text-xl font-bold text-zinc-100">
                    {trending.name ||
                      trending.title ||
                      trending.original_name ||
                      trending.original_title}
                  </h3>

                  <p className="mt-3 text-zinc-300 text-xl">
                    {trending.known_for_department
                      ? trending.known_for_department
                      : trending.overview.slice(0, 60)}
                    <Link className="text-blue-500 text-sm">more...</Link>
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="flex gap-2 mt-2">
                      <i className="ri-megaphone-fill text-yellow-500"></i>
                      {trending.release_date || "Soon..."}
                    </p>
                    <i class="ri-bookmark-line text-2xl text-white"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default HorizontalScroll;
