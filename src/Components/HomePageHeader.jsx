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
        <button className={styles.signInButton}>Sign In</button>
        <div className={styles.links}>
          <span>User Profile</span>
          <span>|</span>
          <span>Logout</span>
        </div>
      </div>
    </header>
  );
}
