import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import style from "./homepagecarousel.module.css";

export default function HomePageCarousel({ data: carouselData }) {
  return (
    <div className={style.carousel}>
        <BsArrowLeftCircleFill />
      {carouselData.map((items, index) => {
        return <img src={items.src} alt={items.alt} key={index} className={style.slide}/>;
      })}
      <BsArrowRightCircleFill />
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
