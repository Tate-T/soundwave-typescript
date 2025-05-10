import { FC } from "react";
import css from "./ArtistInfo.module.css";

interface ArtistInfoSchema {
  _id: string;
}

const ArtistsInfo: FC<ArtistInfoSchema> = ({ _id }) => {
  return (
    <div className={css.artistInfoBackdrop}>
      <div>
        <img
          src="https://ftp.goit.study/img/musicbox/artist/strArtistThumb_qvuxvs1347997318.jpg"
          alt="artist_photo"
        />
        <div>
          <h2>U2</h2>
          <p>
            U2 are an Irish rock band from Dublin, formed in 1976. The group
            consists of Bono (lead vocals and rhythm guitar), the Edge (lead
            guitar, keyboards, and backing vocals), Adam Clayton (bass guitar),
            and Larry Mullen Jr. (drums and percussion). Initially rooted in
            post-punk, U2's musical style has evolved throughout their career,
            yet has maintained an anthemic quality built on Bono's expressive
            vocals and the Edge's chiming, effects-based guitar sounds.{" "}
          </p>
          <h2>Songs</h2>
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default ArtistsInfo;
