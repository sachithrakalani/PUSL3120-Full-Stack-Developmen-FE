import HomePageHeader from "./HomePageHeader";
import styles from "./signinadminanduser.module.css";

export default function SignUpAdminAndUserPage() {
  return (
    <div>
      <div className={styles.signcontainer}>
        <HomePageHeader />
        <center>
          <div className={styles.wrapper}>
            <h1>Sign Up</h1>
            <button className={`${styles.button} ${styles.admin}`}>
              Admin
            </button>
            <button className={`${styles.button} ${styles.user}`}>User</button>
          </div>
        </center>
      </div>
    </div>
  );
}
