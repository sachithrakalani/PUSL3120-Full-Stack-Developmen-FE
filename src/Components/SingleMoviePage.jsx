// import HomePageHeader from "./HomePageHeader";
// import style from "./singlemoviepage.module.css";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function SingleMoviePage() {
//   const { id } = useParams();
//   const [movieDetails, setMovieDetails] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:3000/movie/${id}`)
//       .then((response) => {
//         console.log(response.data); // Debug response
//         setMovieDetails(response.data.movie);
//       })
//       .catch((error) => console.error("Error fetching movie details:", error));
//   }, [id]);

//   if (!movieDetails) {
//     return <div>Loading...</div>;
//   }

//   const dates = [
//     { day: "WED", date: 20 },
//     { day: "THU", date: 21 },
//     { day: "FRI", date: 22 },
//     { day: "SAT", date: 23 },
//     { day: "SUN", date: 24 },
//   ];

//   return (
//     <div>
//       <HomePageHeader />
//       <div className={style.innerContainer}>
//         <div className={style.imageContainer}>
//           {console.log("MOVIE DETAILS", movieDetails)}
//           <img
//             src={movieDetails.nowshowingImage}
//             alt={movieDetails.title || "Movie Poster"}
//             className={style.img}
//           />
//           <div className={style.details}>
//             <h3> Movie Title: {movieDetails.title}</h3>
//             <h3> Movie Description: {movieDetails.description}</h3>
//             <h3> Movie Release Date: {new Date(movieDetails.releaseDate).toISOString().split("T")[0]}</h3>
//             <h3> Movie End Date: {new Date(movieDetails.endDate).toISOString().split("T")[0]}</h3>
//           </div>
//         </div>
//         <div className={style.calendarContainer}>
//           {dates.map((item) => (
//             <div key={item.date}>
//               <div className={style.day}>{item.day}</div>
//               <div className={style.date}>{item.date}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import HomePageHeader from "./HomePageHeader";
import style from "./singlemoviepage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SingleMoviePage() {
  
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [dates, setDates] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
    const seats = [
      { id: "A1", occupied: false },
      { id: "A2", occupied: true },
      { id: "A3", occupied: false },
      { id: "A4", occupied: false },
      { id: "A5", occupied: true },
      { id: "A6", occupied: false },
      { id: "B1", occupied: false },
      { id: "B2", occupied: false },
      { id: "B3", occupied: true },
      { id: "B4", occupied: false },
      { id: "B5", occupied: false },
      { id: "B6", occupied: false },
      { id: "C1", occupied: false },
      { id: "C2", occupied: false },
      { id: "C3", occupied: false },
      { id: "C4", occupied: true },
      { id: "C5", occupied: true },
      { id: "C6", occupied: false },
      { id: "D1", occupied: false },
      { id: "D2", occupied: false },
      { id: "D3", occupied: false },
      { id: "D4", occupied: false },
      { id: "D5", occupied: false },
      { id: "D6", occupied: false }
    ];
  
    const handleSeatClick = (seatId) => {
      if (seats.find((seat) => seat.id === seatId).occupied) return;
      setSelectedSeats((prev) =>
        prev.includes(seatId)
          ? prev.filter((id) => id !== seatId)
          : [...prev, seatId]
      );
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Seats booked: ${selectedSeats.join(", ")}`)
    };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movie/${id}`)
      .then((response) => {
        setMovieDetails(response.data.movie);
        if (response.data.movie) {
          const startDate = new Date(response.data.movie.releaseDate);
          const endDate = new Date(response.data.movie.endDate);
          generateDates(startDate, endDate);
        }
      })
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  const generateDates = (start, end) => {
    const datesArray = [];
    let currentDate = new Date(start);

    while (currentDate <= end) {
      datesArray.push({
        day: currentDate.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
        date: currentDate.getDate(),
        fullDate: currentDate.toISOString().split("T")[0], // For API compatibility
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setDates(datesArray);
  };

  const handleDateClick = (selectedDate) => {
    axios
      .post("http://localhost:3000/selected-date", {
        movieId: id,
        date: selectedDate,
      })
      .then(() => alert("Date selected successfully!"))
      .catch((error) => console.error("Error storing selected date:", error));
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HomePageHeader />
      <div className={style.innerContainer}>
        <div className={style.imageContainer}>
          <img
            src={movieDetails.nowshowingImage}
            alt={movieDetails.title || "Movie Poster"}
            className={style.img}
          />
          <div className={style.details}>
            <h3>Movie Title: {movieDetails.title}</h3>
            <h3>Movie Description: {movieDetails.description}</h3>
            <h3>Movie Release Date: {new Date(movieDetails.releaseDate).toISOString().split("T")[0]}</h3>
            <h3>Movie End Date: {new Date(movieDetails.endDate).toISOString().split("T")[0]}</h3>
          </div>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
        {/* Date Picker */}
        <label>
          Choose a Date:
          <input type="date" required />
        </label>

        {/* Time Slot Selector */}
        <label>
          Choose a Show Time:
          <select required>
            <option value="" disabled>
              Select a show time
            </option>
            <option value="9-12">9:00 AM - 12:00 PM</option>
            <option value="12-14">12:00 PM - 2:00 PM</option>
            <option value="14-17">2:00 PM - 5:00 PM</option>
            <option value="17-20">5:00 PM - 8:00 PM</option>
            <option value="20-23">8:00 PM - 11:00 PM</option>
          </select>
        </label>

        {/* Seat Selection */}
        <div className="seat-container">
          {seats.map((seat) => (
            <div
              key={seat.id}
              className={`seat ${
                seat.occupied ? "occupied" : selectedSeats.includes(seat.id) ? "selected" : ""
              }`}
              onClick={() => handleSeatClick(seat.id)}
            >
              {seat.id}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button type="submit">Book Now</button>
      </form>
        </div>
        {/* <div className={style.calendarContainer}>
          {dates.map((item) => (
            <div
              key={item.fullDate}
              className={style.dateContainer}
              onClick={() => handleDateClick(item.fullDate)}
            >
              <div className={style.day}>{item.day}</div>
              <div className={style.date}>{item.date}</div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
