import { Switch, Route } from 'react-router-dom';

import Category from '../pages/Category';
import Details from '../pages/Details';
import Home from '../pages/Home';
import Notfound from '../pages/Notfound';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/cocktail/:id" component={Details} />
			<Route path="/category/:id" component={Category} />
			<Route path="*" component={Notfound} />
		</Switch>
	);
}
