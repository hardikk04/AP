import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import Save from "./components/Save";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trending" element={<Trending />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="/tvshows" element={<Tvshows />}></Route>
        <Route path="/people" element={<People />}></Route>
        <Route path="/save" element={<Save />}></Route>
      </Routes>
    </>
  );
};

export default App;
