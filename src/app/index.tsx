import { Global } from '@emotion/react';

import Provider from '../provider';
import Routes from '../routes';

export default function App() {
	return (
		<Provider>
			<Global
				styles={{
					'*': {
						boxSizing: 'border-box',
						padding: 0,
						margin: 0,
						fontFamily: 'Poppins, sans-serif',
					},
					'body': {
						backgroundColor: '#f6f6f6'
					}
				}}
			/>
			<Routes />
		</Provider>
	);
}
