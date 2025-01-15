import React, { useEffect, useState } from "react";
import Dropdown from "../partials/Dropdown";
import Topnav from "../partials/Topnav";
import Cards from "../partials/Cards";
import Loading from "../partials/Loading";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Sidenav from "../partials/Sidenav";

const Trending = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trendingData, setTrendingData] = useState([]);
  const [page, setPage] = useState(1);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category.toLowerCase()}/${duration.toLowerCase()}?page=${page}`
      );

      setTrendingData((prev) => [...prev, ...data.results]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };
  useEffect(() => {
    setTrendingData([]);
    getTrending();
  }, [category, duration]);

  return trendingData.length > 0 ? (
    <div className="p-[2vw] w-full bg-[#1f1e24]">
      <div className=" flex justify-between h-fit w-full items-center sm:flex-col sm:items-start sm:gap-[2vw] md:flex-col md:items-start md:gap-[2vw]">
        <div className="flex text-2xl items-center text-zinc-500 gap-2 font-bold">
          <i
            onClick={() => navigate(-1)}
            className="cursor-pointer ri-arrow-left-line hover:text-[#6556cd]"
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
      <InfiniteScroll
        dataLength={trendingData.length}
        next={getTrending}
        hasMore={true}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={trendingData}></Cards>
      </InfiniteScroll>
    </div>
  ) : (
    <div className="w-full h-screen bg-[#1f1e24] flex">
      <Loading></Loading>
    </div>
  );
};

export default Trending;
