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

const Movie = () => {
  document.title = "AP | MOVIE"; // Set page title
  const navigate = useNavigate();

  const [category, setCategory] = useState("now_playing");
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);

  // Fetch movies based on category and page
  const getMovie = async () => {
    try {
      const { data } = await axios.get(
        `/movie/${category.toLowerCase()}?page=${page}`
      );
      setMovieData((prev) => [...prev, ...data.results]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Reset data when category changes
  useEffect(() => {
    setMovieData([]);
    getMovie();
  }, [category]);

  return movieData.length > 0 ? (
    <div className="p-[2vw] w-full bg-[#1f1e24]">
      {/* Header Section */}
      <div className="flex justify-between items-center sm:flex-col sm:items-start gap-[2vw]">
        <div className="flex items-center text-2xl text-zinc-500 gap-2 font-bold">
          <i
            onClick={() => navigate(-1)} // Navigate back
            className="cursor-pointer ri-arrow-left-line hover:text-[#6556cd]"
          ></i>
          <h2 className="uppercase">Movie</h2>
        </div>
        <Topnav />
        <Dropdown
          title="Category" // Dropdown for category selection
          option={["popular", "top_rated", "upcoming"]}
          handleCategory={setCategory}
        />
      </div>
      {/* Movie Cards */}
      <InfiniteScroll
        dataLength={movieData.length}
        next={getMovie} // Fetch next page on scroll
        hasMore={true}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={movieData} />
      </InfiniteScroll>
    </div>
  ) : (
    // Loading Screen
    <div className="w-full h-screen bg-[#1f1e24] flex">
      <Loading />
    </div>
  );
};

export default Movie;
