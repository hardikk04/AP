import React, { useEffect, useState } from "react";
import Dropdown from "../partials/Dropdown";
import Topnav from "../partials/Topnav";
import Cards from "../partials/Cards";
import Loading from "../partials/Loading";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const Tvshows = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("on_the_air");
  const [tvshowsData, setTvshowsData] = useState([]);
  const [page, setPage] = useState(1);

  const getTvshows = async () => {
    try {
      const { data } = await axios.get(
        `/tv/${category.toLowerCase()}?page=${page}`
      );

      if (tvshowsData.length > 20) {
        return setTvshowsData(data.results);
      }
      setTvshowsData((prev) => [...prev, ...data.results]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };
  useEffect(() => {
    getTvshows();
  }, [category]);

  return tvshowsData.length > 0 ? (
    <div className="p-[2vw] w-full bg-[#1f1e24]">
      <div className=" flex justify-between h-fit  w-full items-center">
        <div className="flex text-2xl items-center text-zinc-500 gap-2 font-bold">
          <i
            onClick={() => navigate(-1)}
            className="cursor-pointer ri-arrow-left-line hover:text-[#6556cd]"
          ></i>
          <h2 className="uppercase text-2xl">Tvshows</h2>
        </div>
        <Topnav></Topnav>
        <div className="flex gap-4">
          <Dropdown
            title={"Category"}
            option={["on_the_air", "popular", "top_rated", "airing_today"]}
            handleCategory={setCategory}
          ></Dropdown>
        </div>
      </div>
      <InfiniteScroll
        dataLength={tvshowsData.length}
        next={getTvshows}
        hasMore={true}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={tvshowsData}></Cards>
      </InfiniteScroll>
    </div>
  ) : (
    <div className="w-full h-screen bg-[#1f1e24] flex">
      <Loading></Loading>
    </div>
  );
};

export default Tvshows;
