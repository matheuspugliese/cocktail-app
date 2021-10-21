import axios from 'axios';

const http = axios.create({
	baseURL: `https://www.thecocktaildb.com/api/json/v1/${process.env.REACT_APP_TOKEN}/`,
	method: 'GET',
});

export default http;
