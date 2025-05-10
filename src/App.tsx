import "./common.css";
import Artists from "./components/Artists/Artists";
import Banners from "./components/Banners/Banners";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Reviews from "./components/Reviews/Reviews";
import "./reset.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Artists />
      <Banners />
      <Feedback />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
