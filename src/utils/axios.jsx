import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzQ3MmM0ZTIyZmY2NzUwZWJkMWQwMzA2M2I3MjMxMiIsIm5iZiI6MTcyMzA3MTg1Ni40OTIsInN1YiI6IjY2YjNmZDcwZjRiNzM2MmQzNDYyMjhiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BesbBlEKNVpiPvixAG7ShxcNsm6Use6-XgshT4NllRI",
  },
});

export default instance;
