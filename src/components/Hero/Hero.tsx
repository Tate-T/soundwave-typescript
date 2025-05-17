import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import css from "./Hero.module.css";
import popSrar from "../../images/Hero/girlPopStar.png";
// import song from '../../../public/song.mp3';
import song from '../../audio/song.mp3';

const Hero = () => {
  // const audioRef = useRef<HTMLAudioElement>(null)
  // const [isPlaying, setIsPlaying] = useState(false)
  // const [duration, setDuration] = useState(0)
  // const [currentTime, setCurrentTime] = useState(0)

  // const togglePlay = () => {
  // 	const audio = audioRef.current
  // 	if (!audio) return

  // 	if (isPlaying) {
  // 		audio.pause()
  // 	} else {
  // 		audio.play().catch(e => {
  // 			console.error("Playback failed:", e)
  // 		})
  // 	}
  // 	setIsPlaying(!isPlaying)
  // }

  // const handleTimeUpdate = () => {
  // 	const audio = audioRef.current
  // 	if (audio) {
  // 		setCurrentTime(audio.currentTime)
  // 	}
  // }

  // const handleLoadedMetadata = () => {
  // 	const audio = audioRef.current
  // 	if (audio) {
  // 		setDuration(audio.duration)
  // 	}
  // }

  // const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
  // 	const audio = audioRef.current
  // 	if (audio) {
  // 		audio.currentTime = Number(e.target.value)
  // 		setCurrentTime(Number(e.target.value))
  // 	}
  // }

  // const formatTime = (time: number) => {
  // 	const minutes = Math.floor(time / 60)
  // 	const seconds = Math.floor(time % 60)
  // 	return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
  // }

  const audioRef = useRef<HTMLAudioElement>(null);

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
      //   playPauseBtn.textContent = "⏸️";
    } else {
      audio.pause();
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
          <audio src={song} ref={audioRef} preload="metadata" />
          <button
            type="button"
            className={css.playPauseBtn}
            onClick={handlePlayPause}
          >
            <Play />
            <input type="range" id="seekBar" value="0" />
            <span id="currentTime">0:00</span>
            <span id="duration">4:38</span>
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
