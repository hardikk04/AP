// Libraries imports
import { useEffect, useState } from "react";
import axios from "../utils/axios";

// Components imports
import Sidenav from "../partials/Sidenav";
import Topnav from "../partials/Topnav";
import Header from "./Header";
import HorizontalScroll from "../partials/HorizontalScroll";
import Loading from "../partials/Loading";

const Home = () => {
  // Set the page title
  document.title = "AP | HOME";
  const [headerWallpaper, setHeaderWallpaper] = useState("");

  // Fetch a random trending wallpaper for the header
  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      setHeaderWallpaper(data.results[Math.floor(Math.random() * 20)]);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };

  // Fetch wallpaper data on component mount
  useEffect(() => {
    getHeaderWallpaper();
  }, []);

  return headerWallpaper ? (
    // Main layout with content when data is available
    <div className="w-full h-screen bg-[#1f1e24] flex">
      <Sidenav />
      <div className="sm:w-full md:w-full w-[80%] h-full overflow-x-auto">
        <Topnav />
        <Header data={headerWallpaper} />
        <HorizontalScroll />
      </div>
    </div>
  ) : (
    // Loading screen while data is being fetched
    <div className="w-full h-screen bg-[#1f1e24] flex">
      <Loading />
    </div>
  );
};

export default Home;
