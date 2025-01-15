import React, { useEffect, useState } from "react";
import Dropdown from "../partials/Dropdown";
import Topnav from "../partials/Topnav";
import Cards from "../partials/Cards";
import Loading from "../partials/Loading";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trendingData, setTrendingData] = useState(null);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category.toLowerCase()}/${duration.toLowerCase()}`
      );

      setTrendingData(data.results);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };
  useEffect(() => {
    getTrending();
  }, [category, duration]);

  return trendingData ? (
    <div className="p-[2vw] w-full bg-[#1f1e24]">
      <div className=" flex justify-between h-fit  w-full items-center">
        <div className="flex text-2xl items-center text-zinc-500 gap-2 font-bold">
          <i
            onClick={() => navigate(-1)}
            class="cursor-pointer ri-arrow-left-line hover:text-[#6556cd]"
          ></i>
          <h2 className="uppercase text-2xl">Trending</h2>
        </div>
        <Topnav></Topnav>
        <div className="flex gap-4">
          <Dropdown
            title={"Category"}
            option={["all", "tv", "movie", "person"]}
            handleCategory={setCategory}
          ></Dropdown>
          <Dropdown
            title={"Duration"}
            option={["day", "week"]}
            handleCategory={setDuration}
          ></Dropdown>
        </div>
      </div>
      <Cards data={trendingData}></Cards>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
