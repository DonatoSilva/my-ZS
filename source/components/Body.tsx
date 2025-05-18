import React from 'react';
import { Box, Text } from 'ink';
import { BodyProps } from '../interfaces/Body.js';

export default function Body({ currentAnimal, animals, questionCount, children }: BodyProps) {
    return (
        <Box flexDirection='column' minWidth={80}>
            <Box flexDirection='row' justifyContent='space-between' padding={1} paddingBottom={0}>
                <Text bold color={'blackBright'}>ZOO en la Sombra</Text>
                <Text bold>Preguntas: {questionCount}</Text>
            </Box>
            <Box flexDirection="row" borderStyle={'round'} paddingX={4} paddingY={2} borderColor={'#666666'} gap={8}>
                {animals[currentAnimal]!()}
                {children}
            </Box>
        </Box>
    );
}