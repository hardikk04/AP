import { useEffect, useState } from "react";
import Sidenav from "../partials/Sidenav";
import Topnav from "../partials/Topnav";
import Header from "./Header";
import HorizontalScroll from "../partials/HorizontalScroll";
import Loading from "../partials/Loading";

import axios from "../utils/axios";

const Home = () => {
  document.title = "AP | HOME";
  const [headerWallpaper, setHeaderWallpaper] = useState("");

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);

      setHeaderWallpaper(data.results[Math.floor(Math.random() * 20)]);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };

  useEffect(() => {
    getHeaderWallpaper();
  }, []);

  return headerWallpaper ? (
    <div className="w-full h-screen bg-[#1f1e24] flex">
      <Sidenav />
      <div className="w-[80%] h-full overflow-x-auto">
        <Topnav />
        <Header data={headerWallpaper} />
        <HorizontalScroll />
      </div>
    </div>
  ) : (
    <div className="w-full h-screen bg-[#1f1e24] flex">
      <Loading></Loading>
    </div>
  );
};

export default Home;
