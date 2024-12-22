import HomePageCarousel from "./Components/HomePageCarousel";
import HomePageHeader from "./Components/HomePageHeader"
import '@fortawesome/fontawesome-free/css/all.min.css';
import image1 from "./../public/assets/images/1st.jpg";
import image2 from "./../public/assets/images/2nd.webp";
import image3 from "./../public/assets/images/3rd.webp";
import image4 from "./../public/assets/images/4th.jpg";
import NowShowingPage from "./Components/NowShowingPage";
import ComingSoonSection from "./Components/ComingSoonSection";
import SingleMoviePage from "./Components/SingleMoviePage";
import SignIn from "./Components/SignInPage";
import SignUpPage from "./Components/SignUpPage";
import SeatBookingPage from "./Components/SeatBookingPage";

const carouselData = [
  { src: image1, alt: "1st image" },
  { src: image2, alt: "2nd image" },
  { src: image3, alt: "3rd image" },
  { src: image4, alt: "4th image" },
];

function App() {
  return (
    <div className="App">
      {/* <HomePageHeader /> */}
      {/* <HomePageCarousel  data={carouselData}/> */}
      {/* <NowShowingPage  data={carouselData}/> */}
      {/* <ComingSoonSection data={carouselData} /> */}
      {/* <SingleMoviePage data={carouselData} /> */}
      {/* <SignIn /> */}
      {/* <SignUpPage /> */}
     <SeatBookingPage />
    </div>
  )
}

export default App
