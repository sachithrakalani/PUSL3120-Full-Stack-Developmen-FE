import { Link } from "react-router-dom";
import HomePageHeader from "./HomePageHeader";
import style from "./signinpage.module.css";

export default function SignUpAdmin() {
  return (
    <div className={style.signcontainer}>
      <HomePageHeader />
      <center>
        <div className={style.wrapper}>
          <h1>Sign Up Admin</h1>
          <input type="email" placeholder="Email" name="Email" />
          <input type="password" placeholder="Password" name="Password" />
          <button type="submit">
            <Link
              to="/admindashboard"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Sign Up
            </Link>
          </button>
          <div>
            Not a member?
            <Link to= "/signinadminanduser">Log Now</Link>
          </div>
        </div>
      </center>
    </div>
  );
}
