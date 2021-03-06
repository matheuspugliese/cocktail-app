import { useEffect, useState } from 'react';

import { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';

import { DrinkProps } from '../../context';
import http from '../../services/http';
import styles from './styles';

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
		<div className={styles}>
			{data ? (
				<>
					<div id="container">
						<div id="header"></div>
						<h1 id="h1">{data.strDrink}</h1>
						<img src={data.strDrinkThumb} width="500px" id="img"/>
					</div>
				</>
			) : (
				<p id="load">Carregando...</p>
			)}
		</div>
	);
}
