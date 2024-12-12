import HomePageHeader from "./HomePageHeader";
import image4 from "./../../public/assets/images/4th.jpg";
import style from "./singlemoviepage.module.css";

export default function SingleMoviePage() {

  const dates = [
    { day: "WED", date: 20 },
    { day: "THU", date: 21 },
    { day: "FRI", date: 22 },
    { day: "SAT", date: 23 },
    { day: "SUN", date: 24 },
  ];

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
      <div>
        {dates.map((item) => (
          <div key={item.date}>
            <div>{item.day}</div>
            <div>{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
