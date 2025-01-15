import React, { useEffect, useState } from "react";

const Cards = ({ data }) => {
  const [savedItems, setSavedItems] = useState([]);

  const isItemSaved = (id) => {
    return savedItems.some((item) => item.id === id);
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("saved")) || [];
    setSavedItems(saved);
  }, []);

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
              <i
                onClick={() => {
                  // Retrieve the current "saved" items from localStorage
                  const saved = JSON.parse(localStorage.getItem("saved")) || [];

                  // Check if the item already exists in "saved"
                  const itemIndex = saved.findIndex(
                    (item) => item.id === trending.id
                  ); // Assuming 'trending' has an 'id' field for uniqueness

                  if (itemIndex === -1) {
                    // If the item doesn't exist, add it to "saved"
                    saved.push(trending);
                  } else {
                    // If the item already exists, remove it from "saved"
                    saved.splice(itemIndex, 1);
                  }

                  setSavedItems(saved);

                  // Update the "saved" items in localStorage
                  localStorage.setItem("saved", JSON.stringify(saved));
                }}
                className={`${
                  isItemSaved(trending.id)
                    ? "ri-bookmark-fill"
                    : "ri-bookmark-line"
                } text-2xl text-white cursor-pointer`}
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
