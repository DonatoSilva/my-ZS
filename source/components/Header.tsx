import React from 'react';
import { Text, Box } from 'ink';
import BigText from 'ink-big-text';

export default function Header() {
	return (
		<Box flexDirection="column" alignItems="center">
			<BigText text="Play ZS" />
			<Text>Piensa en un animal y miremos si lo adivino</Text>
		</Box>
	);
}
