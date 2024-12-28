import { Link } from "react-router-dom";
import HomePageHeader from "./HomePageHeader";
import style from "./signinpage.module.css";

export default function SignUpUser() {
  const handleSignUp = async () => {
    const username = document.querySelector("[name='Username']").value;
    const email = document.querySelector("[name='Email']").value;
    const password = document.querySelector("[name='Password']").value;

    const response = await fetch("http://localhost:3000/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();
    // alert(data.message);
  };

  return (
    <div className={style.signcontainer}>
      <HomePageHeader />
      <center>
        <div className={style.wrapper}>
          <h1>Sign Up User</h1>
          <input type="username" placeholder="Username" name="Username" />
          <input type="email" placeholder="Email" name="Email" />
          <input type="password" placeholder="Password" name="Password" />
          <button type="submit">
            <Link
              to="/homepage"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <button type="button" onClick={() => handleSignUp()}>
                Sign Up
              </button>
            </Link>
          </button>
          <div>
            Not a member? <Link to="/signinadminanduser">Log Now</Link>
          </div>
        </div>
      </center>
    </div>
  );
}
