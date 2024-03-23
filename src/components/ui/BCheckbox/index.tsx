import React from 'react';
import styles from './style.module.scss';

interface BCheckboxPropsType {
	value: boolean;
	changeValue: (value: boolean) => void;
	style?: React.CSSProperties;
}

const BCheckbox = (props: BCheckboxPropsType) => {
	const { value, changeValue, style } = props;

	return (
		<div className={styles['toggle-container']} style={style}>
			<label className={styles['switch']} htmlFor='checkbox' data-testid='Sidebar-Replay'>
				<input type='checkbox' id='checkbox' checked={value} onChange={() => changeValue(!value)} />
				<div className={styles['slider']}></div>
			</label>
		</div>
	);
};

export default BCheckbox;
