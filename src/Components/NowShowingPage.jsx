import style from "./nowshowingpage.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function NowShowingPage() {
  const [nowShowMovies, setNowShowMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movie")
      .then((response) => {
        setNowShowMovies(response.data.movies);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className={style.nowshowing}>
        <h1>NOW SHOWING</h1>
        <div className={style.imgecontainer}>
          {console.log({ NOW: nowShowMovies })}
          {nowShowMovies.length > 0 &&
            nowShowMovies.map((movie, index) => (
              <div key={index} className={style.card}>
                <img
                  src={movie.nowshowingImage}
                  alt={movie.title || "Movie Poster"}
                  className={style.cardImg}
                  onClick={() => console.log(`Clicked on ${movie.title}`)}
                />
                <button
                  className={style.button}
                  onClick={() =>
                    console.log(`Buying tickets for ${movie.title}`)
                  }
                >
                  Buy Tickets
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
