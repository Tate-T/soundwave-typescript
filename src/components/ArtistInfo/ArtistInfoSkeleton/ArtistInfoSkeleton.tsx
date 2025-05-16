import css from "./ArtistInfoSkeleton.module.css";

const ArtistInfoSkeleton = () => {
  return (
    <div className={css.artistInfoBackdrop}>
      <div className={css.artistInfoModal}>
        <button type="button" className={css.closeArtistInfoBtn}>
          {/* <img src={closeIcon} alt="iconForClose" /> */}
        </button>
        <div className={css.test}>
          <div className={css.artistInfoImg}></div>
          <div className={css.artistInfoBox}>
            <h2 className={css.artistInfoName}></h2>
            <p className={css.artistInfoDescription}></p>
            {/* <h2 className={css.artistInfoSongsTitle}></h2> */}
            {/* <ul className={css.artistsInfoSongsList}>
            <li className={css.artistInfoSongItem}>
              <p className={css.artistInfoSongNumber}></p>
              <h3 className={css.artistInfoSongName}></h3>
              <p className={css.artistInfoSongAlbum}></p>
              <p className={css.artistInfoSongDuration}></p>
              <a className={css.artistInfoMovieLink}></a>
            </li>
            <li className={css.artistInfoSongItem}>
              <p className={css.artistInfoSongNumber}></p>
              <h3 className={css.artistInfoSongName}></h3>
              <p className={css.artistInfoSongAlbum}></p>
              <p className={css.artistInfoSongDuration}></p>
              <a className={css.artistInfoMovieLink}></a>
            </li>
            <li className={css.artistInfoSongItem}>
              <p className={css.artistInfoSongNumber}></p>
              <h3 className={css.artistInfoSongName}></h3>
              <p className={css.artistInfoSongAlbum}></p>
              <p className={css.artistInfoSongDuration}></p>
              <a className={css.artistInfoMovieLink}></a>
            </li>
            <li className={css.artistInfoSongItem}>
              <p className={css.artistInfoSongNumber}></p>
              <h3 className={css.artistInfoSongName}></h3>
              <p className={css.artistInfoSongAlbum}></p>
              <p className={css.artistInfoSongDuration}></p>
              <a className={css.artistInfoMovieLink}></a>
            </li>
            <li className={css.artistInfoSongItem}>
              <p className={css.artistInfoSongNumber}></p>
              <h3 className={css.artistInfoSongName}></h3>
              <p className={css.artistInfoSongAlbum}></p>
              <p className={css.artistInfoSongDuration}></p>
              <a className={css.artistInfoMovieLink}></a>
            </li>
          </ul> */}
            {window.screen.width > 1200 || window.screen.width < 768 ? (
              <>
                <h2 className={css.artistInfoSongsTitle}></h2>
                <ul className={css.artistsInfoSongsList}>
                  <li className={css.artistInfoSongItem}>
                    <p className={css.artistInfoSongNumber}></p>
                    <h3 className={css.artistInfoSongName}></h3>
                    <p className={css.artistInfoSongAlbum}></p>
                    <p className={css.artistInfoSongDuration}></p>
                    <a className={css.artistInfoMovieLink}></a>
                  </li>
                  <li className={css.artistInfoSongItem}>
                    <p className={css.artistInfoSongNumber}></p>
                    <h3 className={css.artistInfoSongName}></h3>
                    <p className={css.artistInfoSongAlbum}></p>
                    <p className={css.artistInfoSongDuration}></p>
                    <a className={css.artistInfoMovieLink}></a>
                  </li>
                  <li className={css.artistInfoSongItem}>
                    <p className={css.artistInfoSongNumber}></p>
                    <h3 className={css.artistInfoSongName}></h3>
                    <p className={css.artistInfoSongAlbum}></p>
                    <p className={css.artistInfoSongDuration}></p>
                    <a className={css.artistInfoMovieLink}></a>
                  </li>
                  <li className={css.artistInfoSongItem}>
                    <p className={css.artistInfoSongNumber}></p>
                    <h3 className={css.artistInfoSongName}></h3>
                    <p className={css.artistInfoSongAlbum}></p>
                    <p className={css.artistInfoSongDuration}></p>
                    <a className={css.artistInfoMovieLink}></a>
                  </li>
                  <li className={css.artistInfoSongItem}>
                    <p className={css.artistInfoSongNumber}></p>
                    <h3 className={css.artistInfoSongName}></h3>
                    <p className={css.artistInfoSongAlbum}></p>
                    <p className={css.artistInfoSongDuration}></p>
                    <a className={css.artistInfoMovieLink}></a>
                  </li>
                </ul>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        {window.screen.width >= 768 && window.screen.width < 1200 && (
          <>
            <h2 className={css.artistInfoSongsTitle}></h2>
            <ul className={css.artistsInfoSongsList}>
              <li className={css.artistInfoSongItem}>
                <p className={css.artistInfoSongNumber}></p>
                <h3 className={css.artistInfoSongName}></h3>
                <p className={css.artistInfoSongAlbum}></p>
                <p className={css.artistInfoSongDuration}></p>
                <a className={css.artistInfoMovieLink}></a>
              </li>
              <li className={css.artistInfoSongItem}>
                <p className={css.artistInfoSongNumber}></p>
                <h3 className={css.artistInfoSongName}></h3>
                <p className={css.artistInfoSongAlbum}></p>
                <p className={css.artistInfoSongDuration}></p>
                <a className={css.artistInfoMovieLink}></a>
              </li>
              <li className={css.artistInfoSongItem}>
                <p className={css.artistInfoSongNumber}></p>
                <h3 className={css.artistInfoSongName}></h3>
                <p className={css.artistInfoSongAlbum}></p>
                <p className={css.artistInfoSongDuration}></p>
                <a className={css.artistInfoMovieLink}></a>
              </li>
              <li className={css.artistInfoSongItem}>
                <p className={css.artistInfoSongNumber}></p>
                <h3 className={css.artistInfoSongName}></h3>
                <p className={css.artistInfoSongAlbum}></p>
                <p className={css.artistInfoSongDuration}></p>
                <a className={css.artistInfoMovieLink}></a>
              </li>
              <li className={css.artistInfoSongItem}>
                <p className={css.artistInfoSongNumber}></p>
                <h3 className={css.artistInfoSongName}></h3>
                <p className={css.artistInfoSongAlbum}></p>
                <p className={css.artistInfoSongDuration}></p>
                <a className={css.artistInfoMovieLink}></a>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ArtistInfoSkeleton;
