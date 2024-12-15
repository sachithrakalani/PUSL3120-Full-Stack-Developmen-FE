import HomePageHeader from "./HomePageHeader";
import style from "./signinpage.module.css";

export default function SignUpPage() {
  return (
    <div className={style.signcontainer}>
      <HomePageHeader />
      <center>
        <div className={style.wrapper}>
          <h1>Sign Up</h1>
          <input type="username" placeholder="Username" name="Username" />
          <input type="email" placeholder="Email" name="Email" />
          <input type="password" placeholder="Password" name="Password" />
          <input
            type="TelephoneNo"
            placeholder="Telephone No"
            name="Telephone No"
          />
          <button type="submit">Sign Up</button>
          <div>
            Not a member? <a href="">Login Now</a>
          </div>
        </div>
      </center>
    </div>
  );
}
