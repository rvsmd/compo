import React from 'react';
import styles from './style.module.scss';
import BSearch from '../../../components/ui/BSearch';
import BMenuButton from '../../../components/ui/BMenuButton';
import logoIcon from '../../../assets/images/icons/logo.svg';
import notificationIcon from '../../../assets/images/icons/notification.svg';
import dislikedIcon from '../../../assets/images/icons/not-liked-dark.svg';
import basketIcon from '../../../assets/images/icons/basket.svg';
import vectorDownIcon from '../../../assets/images/icons/vector-down.svg';

const Header: React.FC = () => {
	return (
		<header className={styles['header']}>
			<img src={logoIcon} alt='logo' width={144} className={styles['header-logo']} />
			<BMenuButton />
			<BSearch />
			<button className={styles['icon-wrap']} onClick={() => console.log('notification')}>
				<img src={notificationIcon} alt='notification' width={32} />
			</button>
			<span className={styles['separative-line']}></span>
			<button className={styles['icon-wrap']} onClick={() => console.log('liked')}>
				<img src={dislikedIcon} alt='liked' width={32} />
			</button>
			<button className={styles['basket']} onClick={() => console.log('basket')}>
				<img src={basketIcon} alt='' width={24} />
				<span>144 235₽</span>
			</button>
			<button className={styles['profile']} onClick={() => console.log('profile')}>
				<img src={require('../../../assets/images/avatar.png')} alt='' />
				<span>Ермаков Е.</span>
				<img src={vectorDownIcon} alt='' width={24} />
			</button>
		</header>
	);
};

export default Header;
