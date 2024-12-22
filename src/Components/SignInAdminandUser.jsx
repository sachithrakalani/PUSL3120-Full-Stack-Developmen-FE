import HomePageHeader from "./HomePageHeader";

export default function SignInAdminAndUserPage() {
  return (
    <div>
      <div>
        <HomePageHeader />
        <center>
          <div>
            <h1>Sign In</h1>
            <button>Admin</button>
            <button>User</button>
          </div>
        </center>
      </div>
    </div>
  );
}
