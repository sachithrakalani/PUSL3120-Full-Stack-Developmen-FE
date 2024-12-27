import HomePageHeader from "./HomePageHeader";
import style from "./singlemoviepage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SingleMoviePage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movie/${id}`)
      .then((response) => {
        console.log(response.data); // Debug response
        setMovieDetails(response.data.movie);
      })
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const dates = [
    { day: "WED", date: 20 },
    { day: "THU", date: 21 },
    { day: "FRI", date: 22 },
    { day: "SAT", date: 23 },
    { day: "SUN", date: 24 },
  ];

  return (
    <div>
      <HomePageHeader />
      <div className={style.back}>
        <div className={style.imageContainer}>
          {console.log("MOVIE DETAILS", movieDetails)}
          <img
            src={movieDetails.nowshowingImage}
            alt={movieDetails.title || "Movie Poster"}
            className={style.img}
          />
          <div className={style.details}>
            <h3>{movieDetails.title}</h3>
            <h3>{movieDetails.description}</h3>
            <h3>{movieDetails.releaseDate}</h3>
          </div>
        </div>
        <div className={style.calendarContainer}>
          {dates.map((item) => (
            <div key={item.date}>
              <div className={style.day}>{item.day}</div>
              <div className={style.date}>{item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
