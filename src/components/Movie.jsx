import React, { useEffect, useState } from "react";
import Dropdown from "../partials/Dropdown";
import Topnav from "../partials/Topnav";
import Cards from "../partials/Cards";
import Loading from "../partials/Loading";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const Movie = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("now_playing");
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);

  const getMovie = async () => {
    try {
      const { data } = await axios.get(
        `/movie/${category.toLowerCase()}?page=${page}`
      );

      if (movieData.length > 20) {
        return setMovieData(data.results);
      }
      setMovieData((prev) => [...prev, ...data.results]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };
  useEffect(() => {
    getMovie();
  }, [category]);

  return movieData.length > 0 ? (
    <div className="p-[2vw] w-full bg-[#1f1e24]">
      <div className=" flex justify-between h-fit  w-full items-center">
        <div className="flex text-2xl items-center text-zinc-500 gap-2 font-bold">
          <i
            onClick={() => navigate(-1)}
            className="cursor-pointer ri-arrow-left-line hover:text-[#6556cd]"
          ></i>
          <h2 className="uppercase text-2xl">Movie</h2>
        </div>
        <Topnav></Topnav>
        <div className="flex gap-4">
          <Dropdown
            title={"Category"}
            option={["popular", "top_rated", "upcoming"]}
            handleCategory={setCategory}
          ></Dropdown>
        </div>
      </div>
      <InfiniteScroll
        dataLength={movieData.length}
        next={getMovie}
        hasMore={true}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={movieData}></Cards>
      </InfiniteScroll>
    </div>
  ) : (
    <div className="w-full h-screen bg-[#1f1e24] flex">
      <Loading></Loading>
    </div>
  );
};

export default Movie;
