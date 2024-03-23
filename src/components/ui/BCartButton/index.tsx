import React from 'react';
import styles from './style.module.scss';
import basketIcon from '../../../assets/images/icons/basket-white.svg';
import minusIcon from '../../../assets/images/icons/minus.svg';
import plusIcon from '../../../assets/images/icons/plus.svg';

interface BCartButtonPropsType {
	value: number;
	changeValue: (value: number) => void;
	style?: React.CSSProperties;
}

const BCartButton = (props: BCartButtonPropsType) => {
	const { value, changeValue, style } = props;

	return (
		<>
			{value ? (
				<div className={[styles['basket-container'], styles['basket-container-light']].join(' ')} style={style}>
					<button className={styles['icon-wrap']} onClick={() => changeValue(value - 1)}>
						<img src={minusIcon} alt='' width={24} />
					</button>
					<span>{value} штуки</span>
					<button className={styles['icon-wrap']} onClick={() => changeValue(value + 1)}>
						<img src={plusIcon} alt='' width={24} />
					</button>
				</div>
			) : (
				<button
					className={[styles['basket-container'], styles['basket-container-primary']].join(' ')}
					onClick={() => changeValue(1)}
				>
					<img src={basketIcon} alt='' width={24} />
					<span>В корзину</span>
				</button>
			)}
		</>
	);
};

export default BCartButton;
