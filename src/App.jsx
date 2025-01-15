import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trending" element={<Trending />}></Route>
      </Routes>
    </>
  );
};

export default App;
