import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_HEADERS_KEY,
  },
});

export default instance;
