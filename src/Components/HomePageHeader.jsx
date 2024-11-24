import styles from "./homepageheader.module.css";

export default function HomePageHeader() {
  return (
    <header>
      <div className={styles.header}>
        <h1 className={styles.title}>Cinema Hub</h1>
        <input placeholder="Search for Moives..."></input>
        <button>
          <i className="fas fa-search"></i> Search
        </button>
        <button>Sign In</button>
        <span>OFFERS</span>
        <span>|</span>
        <span>CONTACT US</span>
      </div>
    </header>
  );
}
