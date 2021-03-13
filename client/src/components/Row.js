import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../css/Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  // this is react hooks
  //initializing the state
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // pull info when Row loads
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      //   console.log("Request", request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //   console.log("MOVIES", movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
