
import { Box } from 'ink';
import Header from './components/Header.js';
import Body from './components/Body.js';
import NavOptions from './components/navOptions/NavOptionsPanel.js';

import { NavOptionsProvider } from './contexts/index.js';

export default function App() {



	// Mover el Provider al nivel más alto
	return (
		<NavOptionsProvider>
			<Box flexDirection="column" alignItems="center" width={'100%'}>
				<Header />
				<Body questionCount={0}>
					<NavOptions />
				</Body>
			</Box>
		</NavOptionsProvider>
	);
}
