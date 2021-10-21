import { useEffect, useState } from 'react';

import { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';

import { DrinkProps } from '../../context';
import http from '../../services/http';

export default function Details() {
	const [data, setData] = useState<DrinkProps>();
	const { id } = useParams() as Record<'id', string>;

	const handleDetails = ({
		data: {
			drinks: [drink],
		},
	}: AxiosResponse<{ drinks: Array<DrinkProps> }>) => setData(drink);

	useEffect(() => {
		http.get<any>(`/lookup.php?i=${id}`).then(handleDetails);
	}, [id]);

	return (
		<div>
			{data ? (
				<>
					<h1>{data.strDrink}</h1>
					<img src={data.strDrinkThumb} width="500px" />
				</>
			) : (
				<>Carregando...</>
			)}
		</div>
	);
}
