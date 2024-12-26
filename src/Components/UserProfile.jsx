import userprofile from "./../../public/assets/images/userprofile.jpg";
import HomePageHeader from "./HomePageHeader";


export default function UserProfile(){
  return (
    <div>
        <HomePageHeader />
      <div>
        <img
          src={userprofile}
          alt="User Avatar"
        />
      </div>
      <div>
        <h2>John Doe</h2>
        <p>john.doe@example.com</p>
        <p>Software Engineer | Tech Enthusiast | Coffee Lover</p>
      </div>
    </div>
  );
};

