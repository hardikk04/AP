import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-[1px] border-gray-600 p-5 pl-[1.5vw]">
      <h2 className="text-2xl text-white font-bold">
        <i className="ri-tv-2-fill text-[#6556cd]"></i> AP TV
      </h2>
      <nav>
        <h3 className="text-white font-semibold mt-[2vw] mb-[1vw] text-xl">
          New Feeds
        </h3>
        <ul>
          <li>
            <Link
              to="/trending"
              className="font-medium block text-lg p-5 hover:bg-[#6556cd] hover:text-white text-gray-500"
            >
              <i className="ri-fire-fill "></i> Trending
            </Link>
          </li>
          <li>
            <Link className="font-medium block text-lg p-5 hover:bg-[#6556cd] hover:text-white text-gray-500">
              <i className="ri-sparkling-2-fill "></i> Popular
            </Link>
          </li>
          <li>
            <Link className="font-medium block text-lg p-5 hover:bg-[#6556cd] hover:text-white text-gray-500">
              <i className="ri-movie-2-ai-fill"></i> Movies
            </Link>
          </li>
          <li>
            <Link className="font-medium block text-lg p-5 hover:bg-[#6556cd] hover:text-white text-gray-500">
              <i className="ri-tv-2-fill "></i> Tv Shows
            </Link>
          </li>
          <li>
            <Link className="font-medium block text-lg p-5 hover:bg-[#6556cd] hover:text-white text-gray-500">
              <i className="ri-team-fill "></i> People
            </Link>
          </li>
        </ul>
      </nav>
      <hr className="opacity-30" />
      <nav>
        <h3 className="text-white font-semibold mt-[2vw] mb-[1vw] text-xl">
          Website Information
        </h3>
        <ul>
          <li>
            <Link className="font-medium block text-lg p-5 hover:bg-[#6556cd] hover:text-white text-gray-500">
              <i className="ri-information-fill "></i> About AP
            </Link>
          </li>
          <li>
            <Link className="font-medium block text-lg p-5 hover:bg-[#6556cd] hover:text-white text-gray-500">
              <i className="ri-phone-fill "></i> Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidenav;
