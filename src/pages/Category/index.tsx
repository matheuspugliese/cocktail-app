import { useEffect, useState } from 'react';

import { AxiosResponse } from 'axios';
import { NavLink, useParams } from 'react-router-dom';

import http from '../../services/http';
import styles from './styles';

export interface CategoryDrinksProps {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface RequestResponse {
  drinks: CategoryDrinksProps[];
}

export default function Category() {
	const [data, setData] = useState<Array<CategoryDrinksProps>>();
	const { id } = useParams() as Record<'id', string>;

	const handleDetails = ({
		data: { drinks },
	}: AxiosResponse<RequestResponse>) => setData(drinks);

	useEffect(() => {
		http.get<RequestResponse>(`/filter.php?c=${id}`).then(handleDetails);
	}, [id]);

	return (
		<div className={styles}>
			{data && (
				<>
					<div id="div">
						<p>Drinks</p>
						<ul>
							{data.map(({ idDrink, strDrink, strDrinkThumb }) => (
								<li key={idDrink}>
									<img src={strDrinkThumb} width="50px" height="50px"/>
									<NavLink to={`/cocktail/${idDrink}`} id="link" >
										{strDrink}
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
