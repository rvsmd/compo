import React from 'react';
import styles from './style.module.scss';

interface SearchListItemPropsType {
	searchItem: any;
	onClick?: () => void;
}

const SearchListItem = (props: SearchListItemPropsType) => {
	const { searchItem, onClick } = props;

	return (
		<li className={styles['search-list-preview']} onClick={onClick}>
			{searchItem}
		</li>
	);
};

export default SearchListItem;
