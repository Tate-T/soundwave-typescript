import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import css from "./Hero.module.css";
import popSrar from "../../images/Hero/girlPopStar.png";
// import song from '../../../public/song.mp3';
import song from "../../audio/song.mp3";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<string>();
  const [currentTime, setCurrentTime] = useState<number>();
  const [seekBarProgress, setSeekBarProgress] = useState<number>(0.0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const seekBarRef = useRef<HTMLInputElement>(null);

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
  }

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
      //   playPauseBtn.textContent = "⏸️";
    } else {
      audio.pause();
      setIsPlaying(false);
      //   playPauseBtn.textContent = "▶️";
    }
  };

  return (
    <section className={css.sectionHero}>
      <div className={css.cardOne}>
        <div className={css.titleBox}>
          <h1 className={css.title}>
            Choose your <span className={css.titleSpan}> music</span> & enjoy
          </h1>
          <p className={css.titleTxt}>
            Welcome to Soundwave, where music comes alive. Experience a universe
            of endless tunes, handpicked playlists, and personalized
            recommendations just for you.
          </p>
        </div>
        <ul className={css.listHesh}>
          <li className={css.listHeshItem}>#Musicbands</li>
          <li className={css.listHeshItem}>#Artist</li>
          <li className={css.listHeshItem}>#Sound</li>
          <li className={css.listHeshItem}>#Popular</li>
          <li className={css.listHeshItem}>#Collection</li>
          <li className={css.listHeshItem}>#Art</li>
        </ul>
      </div>
      <div className={css.cardTwo}>
        <div className={css.audioPlayer}>
          <audio
            src={song}
            ref={audioRef}
            preload="metadata"
            onLoadedMetadata={(evt) => {
              const duration = audioRef.current?.duration;
              if (typeof duration === "number") {
                // console.log(formatTime(duration));
                setDuration(formatTime(duration));
              }
            }}
            onTimeUpdate={() => {
              const audio = audioRef.current;
              if (audio && audio.duration) {
                setCurrentTime(audio.currentTime);
                setSeekBarProgress((audio.currentTime / audio.duration) * 100);
              }
            }}
          />
          <input
            type="range"
            id="seekBar"
            value={seekBarProgress}
            className={css.seekBar}
            onInput={(evt) => {
              const audio = audioRef.current;
              const target = evt.target as HTMLInputElement;

              if (audio && audio.duration) {
                const value = parseFloat(target.value);
                const newTime = (value / 100) * audio.duration;
                audio.currentTime = newTime;
                setSeekBarProgress(value);
              }
            }}
          />
          <div className={css.timeTextsBox}>
            <span id="currentTime" className={css.currentTimeSpan}>
              {formatTime(Number(seekBarProgress))}
            </span>
            <span id="duration" className={css.durationSpan}>
              {duration}
            </span>
          </div>
          <button
            type="button"
            className={css.playPauseBtn}
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <svg
                width="30"
                height="30"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="32" fill="white" />
                <rect x="24" y="24" width="16" height="16" fill="black" />
              </svg>
            ) : (
              <svg
                width="30"
                height="30"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="32" fill="white" />
                <polygon points="25,20 25,44 45,32" fill="black" />
              </svg>
            )}
            {/* <Play /> */}
          </button>
        </div>
        {/* <div className={css.audioPlayer}>
          <audio
            ref={audioRef}
            src="./musucpidmanula.mp3"
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />
          <button onClick={togglePlay} id="playPauseBtn">
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <input
            type="range"
            id="seekBar"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
          />
          <span id="currentTime">{formatTime(currentTime)}</span>
          <span id="duration"> / {formatTime(duration)}</span>
        </div> */}
        <img alt="pop star" className={css.imgpopStar} src={popSrar} />
      </div>
    </section>
  );
};

export default Hero;
