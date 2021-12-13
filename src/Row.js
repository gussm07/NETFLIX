import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  /* EL TITLE ES UN PROP, QUE PERMITE PASAR EL COMPONENTE DE App.js y Row.js */
  const [movies, setMovies] = useState([]);

  /* URL PARA OBTENER LAS CARATULAS DE LAS PELICULAS */
  const baseURL = "https://image.tmdb.org/t/p/original";

  //A SNIPET OF CODE WHICH RUNS BASED ON A SPECIFIC CONDITION
  useEffect(() => {
    //IF [], RUN ONCE WHE THE ROW LOADS, AND DONT RUN AGAIN
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      //console.log(request.data.results);
      //CON LA SENTENCIA ANTERIOR OBTENEMOS LA INFO DE LA API DE LA TMDB
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      {/* TITLE */}
      <div className="row__posters">
        {/* CARGAR LAS PELICULAS */}
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                /* OBTENER LA URL BASE PARA OBTENER CARATULA */
                src={`${baseURL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
