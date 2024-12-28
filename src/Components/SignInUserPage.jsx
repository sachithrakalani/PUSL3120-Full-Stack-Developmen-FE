import { Link } from "react-router-dom";
import HomePageHeader from "./HomePageHeader";
import style from "./signinpage.module.css";

export default function SignInUserPage() {
  const handleLogin = async () => {
    const email = document.querySelector("[name='Email']").value;
    const password = document.querySelector("[name='Password']").value;

    const response = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("id", data.id);
      alert("Login successful!");
      window.location.href = role === "user" ? "/homepage" : "/admindashboard";
    } else {
      alert(data.message);
    }
  };

  return (
    <div className={style.signcontainer}>
      <HomePageHeader />
      <center>
        <div className={style.wrapper}>
          <h1>Sign In User</h1>
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
              <button type="button" onClick={() => handleLogin()}>
                Sign In
              </button>
            </Link>
          </button>
          <div>
            Not a member? <Link to="/signupadminanduser">Register Now</Link>
          </div>
        </div>
      </center>
    </div>
  );
}
