import Sidenav from "../partials/Sidenav";
import Topnav from "../partials/Topnav";

const Home = () => {
  document.title = "AP | HOME";
  return (
    <div className="w-full h-screen bg-[#1f1e24] flex">
      <Sidenav></Sidenav>
      <div className="w-[80%] h-full">
        <Topnav></Topnav>
      </div>
    </div>
  );
};

export default Home;
