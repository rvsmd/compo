import React from 'react';
import styles from './style.module.scss';
import messageIcon from '../../../assets/images/icons/message.svg';
import promotionsIcon from '../../../assets/images/icons/promotions.svg';

const MainNavbar: React.FC = () => {
	return (
		<nav className={styles['main-navbar']}>
			<ul>
				<li onClick={() => console.log('My orders')}>Мои заказы</li>
				<li onClick={() => console.log('Employees')}>Сотрудники</li>
				<li onClick={() => console.log('Order templates')}>Шаблоны заказов</li>
				<li onClick={() => console.log('Appeals')}>Обращения</li>
			</ul>
			<section className={styles['navbar-section']}>
				<button className={styles['message']} onClick={() => console.log('message')}>
					<img src={messageIcon} alt='' width={16} />
					<span>Ваш менеджер</span>
				</button>
				<button className={styles['promotions']} onClick={() => console.log('promotions')}>
					<img src={promotionsIcon} alt='' width={16} />
					<span>Акции</span>
				</button>
				<span className={styles['blog']} onClick={() => console.log('blog')}>
					Блог
				</span>
			</section>
		</nav>
	);
};

export default MainNavbar;
