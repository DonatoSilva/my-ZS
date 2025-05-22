import { useContext, useMemo, useState } from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';
import { navInitOptions, NavOptionsContext } from '../../contexts/index.js';
import {
	NavOptionsContextProps,
	NavOptionsPanelProps,
} from '../../interfaces/navOptionsPanel.js';
import { DecisionTree } from '../../logic/decisionTree.js';

export default function NavPanel() {
	const { navOptions, setNavOptions } =
		useContext<NavOptionsContextProps>(NavOptionsContext);

	const [updateTree, setUpdateTree] = useState<boolean>(true);
	const decisionTree = useMemo(() => { return new DecisionTree() }, [updateTree]);

	const handleSelect = (
		value: string,
		navOptions: NavOptionsPanelProps,
	) => {
		if (value === 'exit') {
			setNavOptions({
				question: 'Saliendo...',
				options: navOptions.options,
			});
			setTimeout(() => process.exit(), 1000);
			return;
		}

		if (value === 'credits') {
			setNavOptions({
				question:
					'Créditos y Agradecimientos: \n\nCreado con la intención de poner en práctica un árbol básico de nodos binarios, este juego consiste en adivinar el animal que piensa el usuario por medio de preguntas y respuestas. \n\nCreado por: @DonatoSilva - 2025 \n\nAgradezco al semillero ADA y a sus tutores por tomarse el tiempo para explicarnos las bases.',
				options: [
					{ label: 'Volver al menú', value: 'initNav' },
					{ label: 'Salir', value: 'exit' },
				],
			});
			return;
		}

		if (value === 'initNav') {
			setNavOptions({
				question: '¿Que desea hacer?',
				options: navInitOptions,
			});

			setUpdateTree(!updateTree)
			return;
		}

		const { question, options } = decisionTree.processAnswerAndGetUI(value);

		setNavOptions({
			question,
			options,
		})
	};

	return (
		<Box flexDirection="column" rowGap={2} flexWrap="wrap">
			<Box width={45} alignItems="center">
				<Text bold>{navOptions.question}</Text>
			</Box>
			<SelectInput
				items={navOptions.options}
				onSelect={item => handleSelect(item.value, navOptions)}
			/>
		</Box>
	);
}
