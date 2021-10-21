import { useEffect, useState } from 'react';

import { AxiosResponse } from 'axios';
import { NavLink, useParams } from 'react-router-dom';

import http from '../../services/http';

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
		<div>
			{data && (
				<>
					<p>Drinks</p>
					<ul>
						{data.map(({ idDrink, strDrink }) => (
							<li key={idDrink}>
								<NavLink to={`/cocktail/${idDrink}`}>
									{strDrink}
								</NavLink>
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
}
