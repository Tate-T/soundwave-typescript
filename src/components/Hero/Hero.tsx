import React, { useRef, useState, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'
import css from './Hero.module.css'
// import popStar from '../../images/hero/girlPopStar.png'

const Hero = () => {
	const audioRef = useRef<HTMLAudioElement>(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [duration, setDuration] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)

	const togglePlay = () => {
		const audio = audioRef.current
		if (!audio) return

		if (isPlaying) {
			audio.pause()
		} else {
			audio.play().catch(e => {
				console.error("Playback failed:", e)
			})
		}
		setIsPlaying(!isPlaying)
	}

	const handleTimeUpdate = () => {
		const audio = audioRef.current
		if (audio) {
			setCurrentTime(audio.currentTime)
		}
	}

	const handleLoadedMetadata = () => {
		const audio = audioRef.current
		if (audio) {
			setDuration(audio.duration)
		}
	}

	const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
		const audio = audioRef.current
		if (audio) {
			audio.currentTime = Number(e.target.value)
			setCurrentTime(Number(e.target.value))
		}
	}

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
		return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
	}

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
					<audio
						ref={audioRef}
						src="/musicpidmanula.mp3"
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
				</div>
				{/* <img alt="pop star" className={css.imgpopStar} src={popStar} /> */}
			</div>
		</section>
	)
}

export default Hero

