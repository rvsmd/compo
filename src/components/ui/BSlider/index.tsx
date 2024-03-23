import React, { useMemo, useState } from 'react';
import styles from './style.module.scss';
import leftIcon from '../../../assets/images/icons/slider-left.svg';
import rigthIcon from '../../../assets/images/icons/slider-right.svg';

interface BSliderPropsType {
	slides?: any[];
	style?: React.CSSProperties;
}

const testSliderData = [
	{
		image: require('../../../assets/images/slide-2.jpg'),
	},
	{
		image: require('../../../assets/images/slide-1.png'),
	},
	{
		image: require('../../../assets/images/slide-3.jpg'),
	},
	{
		image: require('../../../assets/images/slide-4.jpg'),
	},
	{
		image: require('../../../assets/images/avatar.png'),
	},
	{
		image: require('../../../assets/images/icons/basket.svg'),
	},
];

const BSlider = (props: BSliderPropsType) => {
	const { slides = testSliderData, style } = props;
	const [current, setCurrent] = useState<number>(0);

	const nextSlide = () => {
		setCurrent(current === slides.length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? slides.length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) return null;

	const memoizedSlideTransition = useMemo(() => {
		if (slides.length < 5) return;
		if (current === 0) return;
		if (current > slides.length - 4) return -(slides.length - 4) * 76 + 'px';
		return -(current - 1) * 76 + 'px';
	}, [current]);

	return (
		<section className={styles['slider']} style={style}>
			<img
				src={slides.find((item, index) => index === current)?.image}
				alt=''
				className={styles['main-preview']}
			/>
			<div className={styles['slider-container']}>
				<button className={styles['left-arrow']} onClick={prevSlide}>
					<img src={leftIcon} alt='' />
				</button>
				<div style={{ overflow: 'hidden' }}>
					<div
						style={{
							marginLeft: -12,
							display: 'flex',
							width: 'max-content',
							translate: memoizedSlideTransition,
						}}
					>
						{slides.map((slide, index) => {
							return (
								<div
									key={slide.image}
									className={styles['slide']}
									style={index === current ? { border: '2px solid #1551E5' } : {}}
									onClick={() => setCurrent(index)}
								>
									<img src={slide.image} alt='' className={styles['slider-image']} />
								</div>
							);
						})}
					</div>
				</div>
				<button className={styles['right-arrow']} onClick={nextSlide}>
					<img src={rigthIcon} alt='' />
				</button>
			</div>
		</section>
	);
};

export default BSlider;
