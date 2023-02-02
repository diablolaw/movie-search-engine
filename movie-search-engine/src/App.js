import "./App.css";
import api from "./api/axiosConfig";
import axios, * as others from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import MovieInfoPage from "./components/movieInfoPage/MovieInfoPage";

function App() {
  const [movie, setMovie] = useState();

  const getMovieData = async (movieTitle) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/movie-search/${movieTitle}`
      );
      const singleMovie = response.data;
      setMovie(singleMovie);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/movie/:movieTitle"
            element={
              <MovieInfoPage getMovieData={getMovieData} movie={movie} />
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
