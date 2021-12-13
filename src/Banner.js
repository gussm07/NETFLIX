import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      /* OBTENER LA API DESEADA */
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          /* GENERAR UN NUMERO ALEATORIO DESDE 0 HASTA LA LONGITUD DEL RESULTADO */
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  /* FUNCION PARA PONER ... CUANDO HAY MUCHO TEXTO */
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      /* EN LA URL:*/
      /* ELIGE LA IMAGEN CONFORME A LA PELICULA ALEATORIA TRAIDA DEL BACKEND */
      /* BACKDROP_PATH BIENE DEFINIDA EN LA API PARA TOMAR LA IMAGEN */
      /* SE PONE EL ? CUANDO NO SE SABE EL RESULTADO QUE VA A ALOJARSE */
      style={{
        backgroundSize: "cover",

        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {/* VARIAS VARIABLES YA QUE PUEDEN TENER DIFERENTES NOMBRES PARA EL TITULO */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {/* OBTENER LA DESCRIPCION DE LA API CON "OVERVIEW" */}
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
