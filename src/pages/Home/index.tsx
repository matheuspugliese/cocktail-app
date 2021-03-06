import { useCallback, useEffect, useState } from 'react';

import { VscSearch } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';

import { CategoryProps } from '../../context';
import useContext from '../../context/useContext';
import http from '../../services/http';
import styles from './styles';

export interface RequestResponse {
  drinks: CategoryProps[];
}

let timeoutId: NodeJS.Timeout;

export default function Home() {
	const [value, setValue] = useState<string>();

	const { state, setPartial } = useContext();

	const handleInput: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		setValue(target.value);
	};

	const getData = useCallback(async (value: string) => {
		const { data } = await http.get<any>(`/search.php?s=${value}`);

		if (data?.drinks) {
			setPartial('drinks', data.drinks);
		}
	}, [setPartial]);

	const toggleCategories = async () => {
		const { data } = await http.get<RequestResponse>('/list.php?c=list');

		setPartial('categories', data.drinks);
	};

	useEffect(() => {
		if (value) {
			if (timeoutId) clearTimeout(timeoutId);

			timeoutId = setTimeout(() => {
				getData(value);
			}, 500);
		}
	}, [value, getData]);

	return (
		<div className={styles}>
			<div id="logo" />
			<div id="search-box">
				<input type="text" id="search-input" onChange={handleInput} placeholder="Pesquise um Drink" />
				<VscSearch id="icon" />
				<button onClick={toggleCategories} id="button">Mostrar Categorias</button>
			</div>
			{state?.drinks && (
				<>
					<div id="box">
						<p>Drinks</p>
						<ul>
							{state.drinks.map(({ idDrink, strDrink }) => (
								<li key={idDrink}>
									<NavLink to={`/cocktail/${idDrink}`} className="nav">
										{strDrink}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</>
			)}
			{state?.categories && (
				<>
					<div id="box">
						<p>Categorias</p>
						<ul>
							{state.categories.map(({ strCategory }) => (
								<li key={strCategory}>
									<NavLink to={`/category/${strCategory}`} className="nav">
										{strCategory}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</>
			)}
		</div>
	);
}
