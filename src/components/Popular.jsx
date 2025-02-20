// Libraries imports
import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

// Components imports
import Dropdown from "../partials/Dropdown";
import Topnav from "../partials/Topnav";
import Cards from "../partials/Cards";
import Loading from "../partials/Loading";

const Popular = () => {
  document.title = "AP | POPULAR";

  const navigate = useNavigate();

  const [category, setCategory] = useState("movie");
  const [popularData, setPopularData] = useState([]);
  const [page, setPage] = useState(1);

  const getPopular = async () => {
    try {
      const { data } = await axios.get(
        `${category.toLowerCase()}/popular?page=${page}`
      );

      setPopularData((prev) => [...prev, ...data.results]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };
  useEffect(() => {
    setPopularData([]);
    getPopular();
  }, [category]);

  return popularData.length > 0 ? (
    <div className="p-[2vw] w-full bg-[#1f1e24]">
      <div className=" flex justify-between h-fit  w-full items-center sm:flex-col sm:items-start sm:gap-[2vw] md:flex-col md:items-start md:gap-[2vw]">
        <div className="flex text-2xl items-center text-zinc-500 gap-2 font-bold">
          <i
            onClick={() => navigate(-1)}
            className="cursor-pointer ri-arrow-left-line hover:text-[#6556cd]"
          ></i>
          <h2 className="uppercase text-2xl">Popular</h2>
        </div>
        <Topnav></Topnav>
        <div className="flex gap-4">
          <Dropdown
            title={"Category"}
            option={["tv", "movie", "person"]}
            handleCategory={setCategory}
          ></Dropdown>
        </div>
      </div>
      <InfiniteScroll
        dataLength={popularData.length}
        next={getPopular}
        hasMore={true}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={popularData}></Cards>
      </InfiniteScroll>
    </div>
  ) : (
    <div className="w-full h-screen bg-[#1f1e24] flex">
      <Loading></Loading>
    </div>
  );
};

export default Popular;
