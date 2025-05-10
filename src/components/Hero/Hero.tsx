import React, { useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react'
import css from './Hero.module.css'
import popStar from '../../images/hero/girlPopStar.png'



const Hero = () => {
	const audioRef = useRef<HTMLAudioElement>(null)
	const [isPlaying, setIsPlaying] = useState(false)


const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
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
			</div>
			<div className={css.cardTwo}>
				<div className={css.audioPlayer}>
					<audio ref={audioRef} src="./musucpidmanula.mp3" preload='metadata'  />
					<button onClick={togglePlay} id="playPauseBtn">{isPlaying ? <Pause size={20} /> : <Play size={20} />}</button>
					<input type="range" id="seekBar" value="0" />
					<span id="currentTime">0:00</span>
					<span id="duration"> 00</span>
				</div>
				<img alt="awd" className={css.imgpopStar} src={popStar}></img>
			</div>
		</section>
	)
}

export default Hero
