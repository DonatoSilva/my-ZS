import { useContext, useMemo, useState } from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';
import { navInitOptions, NavOptionsContext } from '../../contexts/NavOptionsContext.js';
import {
	NavOptionsContextProps,
	NavOptionsPanelProps,
} from '../../interfaces/navOptionsPanel.js';
import { DecisionTree } from '../../logic/decisionTree.js';
import { LearningInputs } from '../learningInputs/LearningInputs.js';
import { CountQuiestionsContext } from '../../contexts/CountQuestions.js';
import { CountQuestionsType } from '../../interfaces/countQuestions.js';



export default function NavPanel() {
	const { navOptions, setNavOptions } =
		useContext<NavOptionsContextProps>(NavOptionsContext);

	const { count, incrementCount, resetCount } = useContext<CountQuestionsType>(CountQuiestionsContext);

	const [updateTree, setUpdateTree] = useState<boolean>(true);
	const [isLearningNewAnimal, setIsLearningNewAnimal] = useState<boolean>(false);

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
			resetCount();
			return;
		}

		if (value === 'teach_animal') {
			setIsLearningNewAnimal(true);

			setNavOptions({
				question: '¿Desea intentarlo de nuevo?',
				options: [
					{ label: 'Volver al menú', value: 'initNav' },
					{ label: 'Salir', value: 'exit' }
				],
			});

			return;
		}

		const { question, options } = decisionTree.processAnswerAndGetUI(value);

		if (value == 'reset') {
			resetCount()
		}

		if (value === 'yes' || value === 'no') {
			incrementCount();
		}

		setNavOptions({
			question,
			options,
		})
	};

	return (
		<Box key='navPanel' flexDirection="column" rowGap={2} flexWrap="wrap">
			{!isLearningNewAnimal ?
				(
					<>
						<Box width={45} alignItems="center">
							<Text bold>{navOptions.question}</Text>
						</Box>
						<SelectInput
							items={navOptions.options}
							onSelect={item => handleSelect(item.value, navOptions)}
						/>
					</>
				)
				:
				(
					<>
						<LearningInputs
							decisionTree={decisionTree}
							setIsLearningNewAnimal={setIsLearningNewAnimal}
							updateTree={{ updateTree, setUpdateTree }}
						/>
					</>
				)
			}
		</Box>
	);
}
