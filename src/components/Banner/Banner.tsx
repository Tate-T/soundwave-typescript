import css from "./Banner.module.css";
import HeadphonesImg from "../../images/banners/heaphones.png";
import Container from "../Common/Container/Container";

const Banner = () => {
  return (
    <section className={css.banner}>
      <Container>
        <img
          className={css.bannerImg}
          src={HeadphonesImg}
          alt="headphones"
          loading="lazy"
        />
        <div className={css.bannerBlock}>
          <p className={css.bannerTitle}>
            Discover a wide range of genres, from{" "}
            <span className={css.bannerSubtext}>classical to contemporary</span>
            , and enjoy our music selection
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
