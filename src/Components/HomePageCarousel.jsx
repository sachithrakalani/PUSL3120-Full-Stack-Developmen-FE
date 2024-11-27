export default function HomePageCarousel({ data: carouselData }) {
  return (
    <div>
      {carouselData.map((items, index) => {
        return <img src={items.src} alt={items.alt} key={index}/>;
      })}
    </div>
  );
}
