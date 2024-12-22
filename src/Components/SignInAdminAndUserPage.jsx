import HomePageHeader from "./HomePageHeader";
import styles from "./signinadminanduser.module.css";

export default function SignInAdminAndUserPage() {
  return (
    <div>
      <div className={styles.signcontainer}>
        <HomePageHeader />
        <center>
          <div className={styles.wrapper}>
            <h1>Sign In</h1>
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
