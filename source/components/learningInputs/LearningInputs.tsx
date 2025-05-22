import { useState } from 'react';
import { Box, Text } from 'ink';
import TextInput from 'ink-text-input';
import { DecisionTree } from '../../logic/decisionTree.js';
import { TreeLearning } from '../../logic/treeLearning.js';
import path from 'path';
import { fileURLToPath } from 'url';

interface LearningInputsProps {
	decisionTree: DecisionTree;
	setIsLearningNewAnimal: (value: boolean) => void;
	updateTree: {
		updateTree: boolean;
		setUpdateTree: (value: boolean) => void;
	};
}

export const LearningInputs = ({ decisionTree, setIsLearningNewAnimal, updateTree }: LearningInputsProps): JSX.Element => {
	const [formStep, setFormStep] = useState<1 | 2>(1);
	const [formData, setFormData] = useState<{ animal: string; question: string }>({ animal: '', question: '' });
	const [inputValue, setInputValue] = useState<string>('');

	const text = formStep === 1 ? '¿Nombre del nuevo animal?' : `¿Pregunta que caracteriza al ${formData.animal}?`;
	const placeholderValue = formStep === 1 ? 'Ejemplo: Leopardo' : 'Ejemplo: ¿Tiene manchas?';

	const { updateTree: updateTreeValue, setUpdateTree } = updateTree;

	const handlerSubimt = (value: string) => {
		if (!value.trim()) {
			return;
		}

		if (formStep === 1) {
			setFormData({ ...formData, animal: value });
			setFormStep(2);
			setInputValue('');
			return;
		}

		if (formStep === 2) {
			setFormData({ ...formData, question: value });

			const __filename = fileURLToPath(import.meta.url);
			const __dirname = path.dirname(__filename);
			const parentDirt = path.join(__dirname, '../..');
			const jsonPath = path.join(parentDirt, 'data', 'initTree.json');

			const treeLearning = new TreeLearning(decisionTree.getRoadmapRoute(), jsonPath);

			treeLearning.setNewValues(value, formData.animal);
			treeLearning.updateTree();

			setFormStep(1);
			setIsLearningNewAnimal(false);
			setUpdateTree(!updateTreeValue); // Toggle updateTree to trigger useMemo
		}
	}

	return (
		<Box flexDirection='column' gap={1}>
			<Box>
				<Text>{text}</Text>
			</Box>
			<TextInput value={inputValue} placeholder={placeholderValue} onSubmit={handlerSubimt} onChange={setInputValue} />
		</Box>
	);
}