import React, { useEffect } from 'react';
import styles from './style.module.scss';
import useFormState from '../../../hooks/useFormState';
import useDebounce from '../../../hooks/useDebounce';

interface SearchInputPropsType {
	onChange: (e: any) => void;
	setIsOpenSearchList: any;
}

const SearchInput = (props: SearchInputPropsType) => {
	const { onChange, setIsOpenSearchList } = props;

	const searchState = useFormState('');
	const debouncedValue = useDebounce(searchState.value, 500);

	const closeSearchList = () => {
		setIsOpenSearchList(false);
	};

	useEffect(() => {
		onChange(debouncedValue);
	}, [debouncedValue]);

	return (
		<>
			<label className={styles['search-line']}>
				<input
					type='search'
					placeholder='Название запроса'
					{...searchState}
					onBlur={() => setTimeout(closeSearchList, 0)}
					onFocus={() => setIsOpenSearchList(true)}
				/>
			</label>
		</>
	);
};

export default SearchInput;
