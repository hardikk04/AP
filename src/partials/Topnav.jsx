import { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setquery] = useState("");
  return (
    <div className="w-full flex justify-center items-center text-zinc-200 pt-[1vw] relative">
      <i class="ri-search-line text-2xl"></i>
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
          class="cursor-pointer ri-close-large-fill text-2xl"
        ></i>
      )}

      <div className="w-1/2 max-h-[50vh] absolute top-[110%] bg-zinc-300 rounded-md overflow-auto">
        {/* <Link className="p-10 inline-block w-full bg-gray-400 border-b-2 border-zinc-200 hover:text-black hover:bg-gray-500 duration-300 rounded-md">
          <img src="" alt="" />
          <span className="text-xl">Name</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Topnav;
