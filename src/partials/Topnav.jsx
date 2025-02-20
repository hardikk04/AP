import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searchedData, setSearchedData] = useState(null);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);

      setSearchedData(data.results);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);
  return (
    <div className="w-full flex justify-center items-center text-zinc-200 pt-[1vw] relative pb-[1vw]">
      <i
        onClick={() => {
          gsap.to(".sidenav", {
            left: "0",
            duration: 0.5,
          });
        }}
        className="lg:hidden xl:hidden xxl:hidden ri-menu-2-line text-2xl absolute left-2"
      ></i>
      <i className="ri-search-line text-2xl"></i>
      <input
        className="w-1/2 bg-transparent ml-[1vw] text-zinc-200 text-xl outline-none"
        placeholder="Search..."
        value={query}
        onChange={(e) => setquery(e.target.value)}
        type="text"
      />
      {query && (
        <i
          onClick={() => setquery("")}
          className="cursor-pointer ri-close-large-fill text-2xl"
        ></i>
      )}

      <div className="w-1/2 md:w-full sm:w-full max-h-[50vh] sm:max-h-[80vh] md:max-h-[80vh] absolute top-[110%] bg-zinc-300 rounded-md overflow-auto z-10">
        {searchedData &&
          searchedData.map((recommend, index) => (
            <Link
              key={index}
              className="p-10 py-6 w-full bg-gray-400 border-b-2 border-zinc-200 hover:text-black hover:bg-gray-500 duration-300 rounded-md flex items-center gap-[2vw]"
            >
              <img
                className="h-[5vw] w-[8vw] md:w-[12vw] md:h-[12vw] object-cover"
                src={
                  recommend.backdrop_path || recommend.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        recommend.backdrop_path || recommend.profile_path
                      }`
                    : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                }
                alt="IMG"
              />
              <span className="text-xl">
                {recommend.title ||
                  recommend.name ||
                  recommend.original_name ||
                  recommend.original_title}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Topnav;
