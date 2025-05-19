import React, {useState} from 'react';
import {Box} from 'ink';
import Header from './components/Header.js';
import Body from './components/Body.js';
import NavOptions from './components/navOptions/NavOptionsPanel.js';

import FirstCat from './components/animals/cat/FirstCat.js';
import SecondCat from './components/animals/cat/SecondCat.js';
import ThirdCat from './components/animals/cat/ThirdCat.js';

import {NavOptionsProvider} from './contexts/index.js';

export default function App() {
	const [indexAnimal, setIndexAnimal] = useState<number>(0);
	const animal: Array<() => JSX.Element> = [FirstCat, SecondCat, ThirdCat];

	setTimeout(() => {
		if (indexAnimal < animal.length - 1) {
			setIndexAnimal(indexAnimal + 1);
			return;
		}

		setIndexAnimal(0);
	}, 2000);

	// Mover el Provider al nivel más alto
	return (
		<NavOptionsProvider>
			<Box flexDirection="column" alignItems="center" width={'100%'}>
				<Header />
				<Body currentAnimal={indexAnimal} animals={animal} questionCount={0}>
					<NavOptions />
				</Body>
			</Box>
		</NavOptionsProvider>
	);
}
