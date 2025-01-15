// Libraries imports
import { Link } from "react-router-dom";

// Header component to display a background with movie/show details
const Header = ({ data }) => {
  return (
    <div
      // Dynamic background image with a linear gradient overlay
      style={{
        backgroundImage: `linear-gradient(rgba(1.0,0.0,0.0,.3),rgba(1.0,0.0,0.0,.5),rgba(1.0,0.0,0.0,.6)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-[60vh] p-[5%] flex flex-col justify-end items-start bg-center bg-cover sm:mt-[4vw]"
    >
      <div className="text-white w-[70%] sm:w-full">
        {/* Title of the movie/show */}
        <h1 className="text-5xl sm:text-3xl font-bold text-zinc-100">
          {data.name || data.title || data.original_name || data.original_title}
        </h1>
        {/* Overview with a "more" link */}
        <p className="mt-3 text-zinc-300 text-xl sm:text-lg">
          {data.overview.slice(0, 200)}
          <Link className="text-blue-500 text-sm">more...</Link>
        </p>
        <div className="flex gap-4 mt-3 text-zinc-300">
          {/* Release date */}
          <p className="flex gap-2">
            <i className="ri-megaphone-fill text-yellow-500"></i>
            {data.release_date || "Soon..."}
          </p>
          {/* Media type */}
          <p className="flex gap-2">
            <i className="ri-album-fill text-yellow-500"></i>
            {data.media_type.toUpperCase()}
          </p>
        </div>
        {/* Link to watch the trailer */}
        <Link className="inline-block mt-5 px-5 py-3 rounded-md bg-[#6556CD]">
          Watch Trailer
        </Link>
      </div>
    </div>
  );
};

export default Header;
