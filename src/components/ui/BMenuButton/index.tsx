import React from 'react';
import styles from './style.module.scss';
import menuBurgerIcon from '../../../assets/images/icons/menu_burger.svg';

const BMenuButton: React.FC = () => {
	return (
		<button className={styles['menu-burger']} onClick={() => console.log('menu_burger')}>
			<img src={menuBurgerIcon} alt='' width={24} />
			<span>Меню</span>
		</button>
	);
};

export default BMenuButton;
