import React from 'react';
import { Text, Box, Static } from 'ink';
import BigText from 'ink-big-text';

export default function Header() {
	return (
		<Box flexDirection="column" alignItems="center">
			<BigText key='' text="Play ZS" />
			<Text key='asss'>Piensa en un animal y miremos si lo adivino</Text>
		</Box>
	);
}
