import HomePageHeader from "./HomePageHeader";
import image4 from "./../../public/assets/images/4th.jpg";
import style from "./singlemoviepage.module.css";

export default function SingleMoviePage() {
  return (
    <div>
      <div>
        <HomePageHeader />
      </div>
      <div>
        <div className={style.imageContainer}>
          <img src={image4} alt={image4.alt} className={style.img}/>
        </div>
      </div>
    </div>
  );
}
