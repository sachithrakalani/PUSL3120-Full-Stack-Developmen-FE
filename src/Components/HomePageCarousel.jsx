import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import style from "./homepagecarousel.module.css";

export default function HomePageCarousel({ data: carouselData }) {
  return (
    <div className={style.carousel}>
        <BsArrowLeftCircleFill
        style={{
          position: "absolute",
          filter: "drop-shadow(0px 0px 5px #555)",
          width: "3rem",
          height: "3rem",
          color: "white",
          cursor: "pointer",
        }}
        className={style.arrowLeft}
      />
      {carouselData.map((items, index) => {
        return <img src={items.src} alt={items.alt} key={index} className={style.slide}/>;
      })}
      <BsArrowRightCircleFill style={{
          position: "absolute",
          filter: "drop-shadow(0px 0px 5px #555)",
          width: "3rem",
          height: "3rem",
          color: "white",
          cursor: "pointer",
        }}
        className={style.arrowRight} />
      <span>
        {carouselData.map((_,index)=>{
          return(
            <button key={index} onClick={null}></button>
          )
        })}
      </span>
    </div>
  );
}

