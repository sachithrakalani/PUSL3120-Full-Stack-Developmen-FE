import AdminDashboard from "./AdminDashboard";
import styles from "./addmoviespage.module.css";

export default function AddMoviesPage() {
  return (
    <div>
      <AdminDashboard />
      <div className={styles.innerContainer}>
        <div className={styles.container}>
          <h1 className={styles.title}>Add Movies</h1>
          <form className={styles.form}>
            <div className={styles.formgroup}>
              <label htmlFor="movieName">Movie Name:</label>
              <input
                id="movieName"
                className={styles.input}
                placeholder="Movie Name"
              />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="movieDescription">Movie Description:</label>
              <input
                id="movieDescription"
                className={styles.input}
                placeholder="Movie Description"
              />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="actors">Actors:</label>
              <input
                id="actors"
                className={styles.input}
                placeholder="Actors"
              />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="releaseDate">Release Date:</label>
              <input
                id="releaseDate"
                className={styles.input}
                placeholder="Release Date"
                type="date"
              />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="availableDates">Available Dates:</label>
              <input
                id="availableDates"
                className={styles.input}
                placeholder="Available Dates"
                type="date"
              />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="movieImage">Movie Image:</label>
              <input
                id="movieImage"
                className={styles.input}
                placeholder="Movie Image"
              />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="nowShowing">Now Showing Movie:</label>
              <input
                id="nowShowing"
                className={styles.input}
                placeholder="Now Showing Movie"
              />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="comingSoon">Coming Soon Movie:</label>
              <input
                id="comingSoon"
                className={styles.input}
                placeholder="Coming Soon Movie"
              />
            </div>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
