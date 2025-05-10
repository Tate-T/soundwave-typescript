import css from './Hero.module.css'
import popStar from '../../images/Hero/girlPopStar.png'
const Hero = () => {
	return (
		<section className={css.sectionHero}>
			<div className={css.cardOne}>
				<p>awd</p>
			</div>
			<div className={css.cardTwo}>
				<img className={css.imgpopStar} src={popStar}></img>
			</div>
		</section>
	)
}

export default Hero
