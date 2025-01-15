import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="py-[2vw] flex flex-wrap gap-[1vw]">
      {data.map((trending, index) => {
        return (
          <div
            key={index}
            className="card w-[18%] h-full shrink-0 rounded-md overflow-hidden bg-zinc-800"
          >
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
            <div className="h-[40%] p-3 flex justify-between items-center">
              <h3 className="text-xl font-bold text-zinc-100">
                {trending.name ||
                  trending.title ||
                  trending.original_name ||
                  trending.original_title}
              </h3>
              <i className="ri-bookmark-line text-2xl text-white"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
