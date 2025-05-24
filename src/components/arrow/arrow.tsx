


import React, { useRef, useState, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'

import css from './arrow.module.css'
import arrow from '../../images/hero/bor.png'


const Arrow = () => {
	return (
		<section className={css.sectionHero}>
			<button
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				className={css.btnScroll}
				type="button"
			>
				<img src={arrow}></img>
			</button>
		</section>
	)
}

export default Arrow
