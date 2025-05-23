import { createContext, ReactNode, useState } from 'react';
import {
	NavOptionsContextProps,
	NavOptionsPanelProps,
} from '../interfaces/NavOptionsPanel.js';

export const navInitOptions = [
	{
		label: 'Iniciar Juego',
		value: 'start',
	},
	{
		label: 'Creditos y Agradecimientos',
		value: 'credits',
	},
	{
		label: 'Salir',
		value: 'exit',
	},
];

export const NavOptionsContext = createContext<NavOptionsContextProps>({
	navOptions: {
		question: '¿Que desea hacer?',
		options: navInitOptions,
	},
	setNavOptions: () => { },
});

export const NavOptionsProvider = ({ children }: { children: ReactNode }) => {
	const [navOptions, setNavOptions] = useState<NavOptionsPanelProps>({
		question: '¿Que desea hacer?',
		options: navInitOptions,
	});

	return (
		<NavOptionsContext.Provider value={{ navOptions, setNavOptions }}>
			{children}
		</NavOptionsContext.Provider>
	);
};
