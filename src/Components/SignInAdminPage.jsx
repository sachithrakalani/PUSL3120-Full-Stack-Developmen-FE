import { Link } from "react-router-dom";
import HomePageHeader from "./HomePageHeader";
import style from "./signinpage.module.css";

export default function SignInAdminPage() {
  return (
    <div className={style.signcontainer}>
      <HomePageHeader />
      <center>
        <div className={style.wrapper}>
          <h1>Sign In Admin</h1>
          <input type="username" placeholder="Username" name="username" />
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
              Sign In
            </Link>
          </button>
          <div>
            Not a member?
            <Link to= "/signupadminanduser">Register Now</Link>
          </div>
        </div>
      </center>
    </div>
  );
}
