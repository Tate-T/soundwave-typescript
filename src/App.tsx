import "./reset.css";
import "./common.css";
import Artists from "./components/Artists/Artists";
import Banners from "./components/Banner/Banner";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Phone from "./components/Phone/Phone";
import Reviews from "./components/Reviews/Reviews";
import Arrow from "./components/arrow/arrow";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Arrow></Arrow>
      <Artists />
      <Banners />
      <Phone />
      <Feedback />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
