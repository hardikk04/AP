// Libraries imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Components imports
import Topnav from "../partials/Topnav";
import Cards from "../partials/Cards";
import Loading from "../partials/Loading";

const Save = () => {
  document.title = "AP | SAVE";

  const navigate = useNavigate();

  const [category, setCategory] = useState("popular");
  const [saveData, setSaveData] = useState([]);

  const getSave = () => {
    const saved = JSON.parse(localStorage.getItem("saved"));
    setSaveData(saved);
  };
  useEffect(() => {
    getSave();
  }, []);

  return saveData.length > 0 ? (
    <div className="p-[2vw] w-full h-full min-h-[100vh] bg-[#1f1e24]">
      <div className=" flex justify-between h-fit w-full items-center sm:flex-col sm:items-start sm:gap-[2vw] md:flex-col md:items-start md:gap-[2vw]">
        <div className="flex text-2xl items-center text-zinc-500 gap-2 font-bold">
          <i
            onClick={() => navigate(-1)}
            className="cursor-pointer ri-arrow-left-line hover:text-[#6556cd]"
          ></i>
          <h2 className="uppercase text-2xl">Save</h2>
        </div>
        <Topnav></Topnav>
      </div>
      <Cards data={saveData}></Cards>
    </div>
  ) : (
    <div className="w-full h-screen bg-[#1f1e24] flex">
      <Loading></Loading>
    </div>
  );
};

export default Save;
