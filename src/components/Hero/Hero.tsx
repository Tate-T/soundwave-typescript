import css from './Hero.module.css'
import popStar from '../../images/hero/girlPopStar.png'
const Hero = () => {
	// const audio = document.getElementById("audio");
	// const playPauseBtn = document.getElementById("playPauseBtn");
	// const seekBar = document.getElementById("seekBar");
	// const currentTimeEl = document.getElementById("currentTime");
	// const durationEl = document.getElementById("duration");

	// function formatTime(seconds) {
	//   const minutes = Math.floor(seconds / 60);
	//   const secs = Math.floor(seconds % 60);
	//   return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
	// }

	// playPauseBtn.addEventListener("click", () => {
	//   if (audio.paused) {
	//     audio.play();
	//     playPauseBtn.textContent = "⏸️";
	//   } else {
	//     audio.pause();
	//     playPauseBtn.textContent = "▶️";
	//   }
	// });

	// audio.addEventListener("loadedmetadata", () => {
	//   durationEl.textContent = formatTime(audio.duration);
	// });

	// audio.addEventListener("timeupdate", () => {
	//   seekBar.value = (audio.currentTime / audio.duration) * 100;
	//   currentTimeEl.textContent = formatTime(audio.currentTime);
	// });

	// seekBar.addEventListener("input", () => {
	//   audio.currentTime = (seekBar.value / 100) * audio.duration;
	// });

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
						id="audio"
						src="./boris-sichevskiy-ti-zh-mene-pidmanula-(meloua.com).mp3"
					></audio>
					<button id="playPauseBtn">▶️</button>
					<input type="range" id="seekBar" value="0" />
					<span id="currentTime">0:00</span>
					<span id="duration">4:38</span>
				</div>
				{/* <img alt="awd" className={css.imgpopStar} src={popStar}></img> */}
			</div>
		</section>
	)
}

export default Hero
