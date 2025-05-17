import "./common.css";
import ArtistsInfo from "./components/ArtistInfo/ArtistInfo";
import Artists from "./components/Artists/Artists";
import Banners from "./components/Banners/Banners";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Phone from "./components/Phone/Phone";
import Reviews from "./components/Reviews/Reviews";
import "./reset.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Artists />
      <Phone />
      {/* <Banners /> */}
      <Feedback />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
