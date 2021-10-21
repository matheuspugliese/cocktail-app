import { BrowserRouter } from 'react-router-dom';

import withProvider from '../context';

const Provider: React.FC = ({ children }) => {
	return (
		<BrowserRouter>
			{children}
		</BrowserRouter>
	);
};

export default withProvider(Provider);
