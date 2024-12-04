import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function HomePageCarousel({ data: carouselData }) {
  return (
    <div>
        <BsArrowLeftCircleFill />
      {carouselData.map((items, index) => {
        return <img src={items.src} alt={items.alt} key={index}/>;
      })}
      <BsArrowRightCircleFill />
    </div>
  );
}
