import { Link } from "react-router-dom";
import styles from "./homepageheader.module.css";

export default function HomePageHeader() {
  return (
    <header>
      <div className={styles.header}>
        <h1 className={styles.title}>Cinema Hub</h1>
        <div className={styles.searchContainer}>
          <input
            className={styles.searchBar}
            placeholder="Search for Moives..."
          ></input>
          <button className={styles.searchButton}>
            <i className="fas fa-search" style={{ marginRight: "8px" }}></i>
            Search
          </button>
        </div>
        <button className={styles.signInButton}>
          <Link to="/signinadminanduser" className={styles.linkStyle}>
            Sign In
          </Link>
        </button>
        <div className={styles.links}>
          <Link
            to="/userprofile"
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>User Profile</span>
          </Link>
          <span>|</span>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
