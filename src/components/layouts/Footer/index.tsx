import React from 'react';
import styles from './style.module.scss';
import logoIcon from '../../../assets/images/icons/logo.svg';
import pdfIcon from '../../../assets/images/icons/pdf-dark.svg';
import videoIcon from '../../../assets/images/icons/video-dark.svg';
import faqIcon from '../../../assets/images/icons/faq-dark.svg';
import youtubeIcon from '../../../assets/images/icons/youtube.svg';
import darkLogoIcon from '../../../assets/images/icons/logo-dark.svg';

const Footer: React.FC = () => {
	return (
		<footer>
			<section className={styles['section-support']}>
				<div className={styles['support-contact']}>
					<img src={logoIcon} alt='' width={206} />
					<div>
						<p>8 800 841-95-95</p>
						<span>Служба поддержки</span>
					</div>
					<div>
						<p>support@sport.ru</p>
						<span>Служба поддержки</span>
					</div>
				</div>
				<ul className={styles['opportunities']}>
					<li onClick={() => console.log('Vacancies')}>Вакансии</li>
					<li onClick={() => console.log('Blog')}>Блог</li>
					<li onClick={() => console.log('Promotions')}>Акции</li>
					<li>
						<button onClick={() => console.log('Suggest idea')}>Предложить идею</button>
					</li>
				</ul>
			</section>
			<section className={styles['footer-menu']}>
				<ul>
					<li onClick={() => console.log('For women')}>Женщинам</li>
					<li onClick={() => console.log('Cloth')}>Одежда</li>
					<li onClick={() => console.log('Shoes')}>Обувь</li>
					<li onClick={() => console.log('Accessories')}>Аксессуары</li>
					<li onClick={() => console.log('Lingerie')}>Белье</li>
					<li onClick={() => console.log('Bra fitting')}>Bra fitting</li>
				</ul>
				<ul>
					<li onClick={() => console.log('For men')}>Мужчинам</li>
					<li onClick={() => console.log('Cloth')}>Одежда</li>
					<li onClick={() => console.log('Shoes')}>Обувь</li>
					<li onClick={() => console.log('Accessories')}>Аксессуары</li>
					<li onClick={() => console.log('Lingerie')}>Белье</li>
				</ul>
				<ul>
					<li onClick={() => console.log('For children')}>Детям</li>
					<li onClick={() => console.log('Cloth')}>Одежда</li>
					<li onClick={() => console.log('Shoes')}>Обувь</li>
					<li onClick={() => console.log('Accessories')}>Аксессуары</li>
					<li onClick={() => console.log('Lingerie')}>Белье</li>
					<li onClick={() => console.log('Toys')}>Игрушки</li>
					<li onClick={() => console.log('Kids')}>Малыши</li>
				</ul>
				<ul>
					<li onClick={() => console.log('Kinds of sports')}>Виды спорта</li>
					<li onClick={() => console.log('Cycling')}>Велоспорт</li>
					<li onClick={() => console.log('Tourism')}>Туризм</li>
					<li onClick={() => console.log('Exercise equipment and fitness')}>Тренажеры и фитнес</li>
					<li onClick={() => console.log('Team sports')}>Командные виды спорта</li>
					<li onClick={() => console.log('Scooters')}>Самокаты</li>
				</ul>
			</section>
			<span className={styles['separative-line']}></span>
			<section className={styles['privacy-policy']}>
				<ul>
					<li onClick={() => console.log('PDF presentation')}>
						<img src={pdfIcon} alt='' width={16} />
						<span>PDF презентация</span>
					</li>
					<li onClick={() => console.log('Video instruction')}>
						<img src={videoIcon} alt='' width={16} />
						<span>Видео инструкция</span>
					</li>
					<li onClick={() => console.log('FAQ')}>
						<img src={faqIcon} alt='' width={16} />
						<span>FAQ</span>
					</li>
					<li onClick={() => console.log('YouTube')}>
						<img src={youtubeIcon} alt='' width={16} />
						<span style={{ color: '#1551E5' }}>Мы на YouTube</span>
					</li>
					<li onClick={() => console.log('Privacy Policy')}>
						<span>Политика конфиденциальности</span>
					</li>
					<li onClick={() => console.log('License agreement')}>
						<span>Лицензионное соглашение</span>
					</li>
				</ul>
				<p>
					Настоящая Политика обработки персональных данных разработана в соответствии с Конституцией
					Российской Федерации, Трудовым кодексом Российской Федерации, Гражданским кодексом Российской
					Федерации, Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации, информационных
					технологиях и о защите информации",
				</p>
				<div style={{ marginTop: 40, display: 'flex', alignItems: 'center' }}>
					<img src={darkLogoIcon} alt='' width={124} />
					<span style={{ marginLeft: 24, fontWeight: 700 }}>Разработка платформы</span>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
