import { Link } from "react-router-dom";
import HomePageHeader from "./HomePageHeader";
import style from "./signinpage.module.css";

export default function SignInUserPage() {
  return (
    <div className={style.signcontainer}>
      <HomePageHeader />
      <center>
        <div className={style.wrapper}>
          <h1>Sign In User</h1>
          <input type="username" placeholder="Username" name="username" />
          <input type="email" placeholder="Email" name="Email" />
          <input type="password" placeholder="Password" name="Password" />
          <input
            type="TelephoneNo"
            placeholder="Telephone No"
            name="Telephone No"
          />
          <button type="submit">
            <Link
              to="/homepage"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Sign In
            </Link>
          </button>
          <div>
            Not a member? <Link to="/signupadmin">Register Now</Link>
          </div>
        </div>
      </center>
    </div>
  );
}