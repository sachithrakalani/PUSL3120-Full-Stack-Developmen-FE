export default function AddMoviesPage() {
  return (
    <div>
      <div>
        <div>
          <h1 >Add Movies</h1>
          <form >
            <div >
              <label>Movie Name:</label>
              <input
                id="movieName"
                
                placeholder="Movie Name"
              />
            </div>
            <div >
              <label >Movie Description:</label>
              <input
                id="movieDescription"
                
                placeholder="Movie Description"
              />
            </div>
            <div >
              <label >Actors:</label>
              <input id="actors" placeholder="Actors" />
            </div>
            <div>
              <label >Release Date:</label>
              <input
                id="releaseDate"
                placeholder="Release Date"
                type="date"
              />
            </div>
            <div >
              <label >Available Dates:</label>
              <input
                id="availableDates"
                placeholder="Available Dates"
                type="date"
              />
            </div>
            <div >
              <label >Movie Image:</label>
              <input
                id="movieImage"
                placeholder="Movie Image"
              />
            </div>
            <div >
              <label >Now Showing Movie:</label>
              <input
                id="nowShowing"
                placeholder="Now Showing Movie"
              />
            </div>
            <div >
              <label >Coming Soon Movie:</label>
              <input
                id="comingSoon"
                placeholder="Coming Soon Movie"
              />
            </div>
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
