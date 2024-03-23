import React from 'react';
import styles from './style.module.scss';

interface SecondaryNavbarPropsType {
	navigationStack?: any[];
}

const SecondaryNavbar = (props: SecondaryNavbarPropsType) => {
	const { navigationStack } = props;

	return (
		<nav className={styles['secondary-navbar']}>
			<ul>
				{navigationStack && navigationStack.length
					? navigationStack.map((item) => (
							<li key={item} onClick={() => console.log(item)}>
								{item}
							</li>
					  ))
					: null}
			</ul>
		</nav>
	);
};

export default SecondaryNavbar;
