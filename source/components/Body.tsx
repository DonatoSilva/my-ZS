import { Box, Text } from 'ink';
import { BodyProps } from '../interfaces/body.js';
import { useContext, useState } from 'react';

import FirstCat from '../components/animals/cat/FirstCat.js';
import SecondCat from '../components/animals/cat/SecondCat.js';
import ThirdCat from '../components/animals/cat/ThirdCat.js';
import { CountQuestionsType } from '../interfaces/countQuestions.js';
import { CountQuiestionsContext } from '../contexts/CountQuestions.js';

export default function Body({
	children,
}: BodyProps) {
	const [indexAnimal, setIndexAnimal] = useState<number>(0);

	const { count } = useContext<CountQuestionsType>(CountQuiestionsContext)
	const animal: Array<() => JSX.Element> = [FirstCat, SecondCat, ThirdCat];

	setTimeout(() => {
		if (indexAnimal < animal.length - 1) {
			setIndexAnimal(indexAnimal + 1);
			return;
		}

		setIndexAnimal(0);
	}, 2000);

	return (
		<Box flexDirection="column" minWidth={'80%'}>
			<Box
				key='header'
				flexDirection="row"
				justifyContent="space-between"
				padding={1}
				paddingBottom={0}
			>
				<Text bold color={'blackBright'}>
					ZOO en la Sombra
				</Text>
				<Text bold>Preguntas: {count}</Text>
			</Box>
			<Box
				key='body'
				justifyContent="center"
				alignItems="center"
				flexDirection="row"
				flexWrap="wrap"
				borderStyle={'round'}
				paddingX={2}
				paddingY={1}
				borderColor={'#666666'}
				gap={4}
			>
				{animal[indexAnimal]!()}
				{children}
			</Box>
		</Box>
	);
}
