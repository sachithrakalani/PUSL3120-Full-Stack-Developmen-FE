import HomePageHeader from "./HomePageHeader";
import image4 from "./../../public/assets/images/4th.jpg";

export default function SingleMoviePage() {
  return (
    <div>
      <div>
        <HomePageHeader />
      </div>
      <div>
        <div>
          <img src={image4} alt={image4.alt}/>
        </div>
      </div>
    </div>
  );
}
