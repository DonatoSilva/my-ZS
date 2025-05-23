
import { Box } from 'ink';
import Header from './components/Header.js';
import Body from './components/Body.js';
import NavOptions from './components/navOptions/NavOptionsPanel.js';

import { NavOptionsProvider } from './contexts/NavOptionsContext.js';
import { CountQuiestionsProvider } from './contexts/CountQuestions.js';

export default function App() {
	return (
		<NavOptionsProvider>
			<CountQuiestionsProvider>
				<Box flexDirection="column" alignItems="center" width={'100%'}>
					<Header />
					<Body>
						<NavOptions />
					</Body>
				</Box>
			</CountQuiestionsProvider>
		</NavOptionsProvider>
	);
}
