import React, { useState, useEffect } from "react";
// import axios from axios.js
import axios from "../axios";
import "../css/Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  // this is react hooks
  //initializing the state
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // pull info when Row loads
    async function fetchData() {
      // you get the url from axios and completed with fetchUrl who is a props that you defined in App.js
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log("Request", request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
