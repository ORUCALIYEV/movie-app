import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";

const API_KEY = "19b091ab0f8d834f7751028eb54bca88";
const URL = "https://api.themoviedb.org/3";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    const data = await axios.get(`${URL}/discover/movie`, {
      params: { api_key: API_KEY },
    });
    setMovies(data.data.results);
    console.log(data.data.results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //https://api.themoviedb.org/3/search/movie?api_key=19b091ab0f8d834f7751028eb54bca88&query=Batman

  const searchMovies = async (title) => {
    const {
      data: { results },
    } = await axios.get(`${URL}/search/movie`, {
      params: { api_key: API_KEY, query: title },
    });
    console.log(results);
    setMovies(results)
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="Search for movie" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(search)} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id}/>
          ))}
        </div>
      ) : (
        <div className="empty">No movies found</div>
      )}
    </div>
  );
};

export default App;
