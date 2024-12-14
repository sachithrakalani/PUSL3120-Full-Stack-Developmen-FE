import HomePageHeader from "./HomePageHeader";

export default function SignIn() {
  return (
    <div>
      <HomePageHeader />
      <h1>Sign In</h1>

      <input type="email" placeholder="Email" name="Email" />
      <input type="password" placeholder="Password" name="Password" />

      <button type="submit">Sign In</button>
      <div>
        Not a member?<a href="">Register Now</a>
      </div>
    </div>
  );
}
