import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';

import SearchInput from './SeacrhInput';
import SearchListItem from './SearchListItem';

const BSearch: React.FC = () => {
	const [isOpenSearchList, setIsOpenSearchList] = useState<boolean>(false);
	const [keySearch, setKeySearch] = useState('');
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [searchList, setSearchList] = useState<any[]>([]);

	useEffect(() => {
		console.log(keySearch);
	}, [keySearch]);

	return (
		<div className={styles['search-container']}>
			<SearchInput setIsOpenSearchList={setIsOpenSearchList} onChange={(value: string) => setKeySearch(value)} />
			{isOpenSearchList &&
				keySearch &&
				(searchList.length ? (
					<div className={styles['preview-container']}>
						<ul className={styles['search-preview-container']}>
							{searchList.map((item) => (
								<SearchListItem
									key={item}
									searchItem={item}
									onClick={() => console.log('searchItem', item)}
								/>
							))}
						</ul>
					</div>
				) : (
					<div className={styles['search-nothing']} onClick={(e) => e.stopPropagation()}>
						Ничего не найдено
					</div>
				))}
		</div>
	);
};

export default BSearch;
