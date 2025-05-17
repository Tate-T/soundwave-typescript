import Container from "../Common/Container/Container";
import css from "./Phone.module.css";
import YoutubeIcon from "../../images/icons/youtube.svg";
// import PhoneBg from "../../images/banners/phone25.PNG";

const SongItem = () => {
  return (
    <li className={css.phoneItem}>
      <p className={css.phoneTextNumber}>01</p>
      <h3 className={css.phoneSubtitle}>Shadows and Tall Trees</h3>
      <p className={css.phoneTextAuthor}>U2</p>
      <p className={css.phoneTextDuration}>05:43</p>
      <img className={css.phoneIcon} src={YoutubeIcon} alt="youtube logo" />
    </li>
  );
};

const Phone = () => {
  return (
    <section className={css.phone}>
      <Container>
        <ul className={css.phoneList}>
          <SongItem />
          <SongItem />
        </ul>
      </Container>
    </section>
  );
};
export default Phone;
