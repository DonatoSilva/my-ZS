import React from 'react';
import { Box, Text } from 'ink';
import { BodyProps } from '../interfaces/Body.js';

export default function Body({ currentAnimal, animals, questionCount, children }: BodyProps) {
    return (
        <Box flexDirection='column' minWidth={"80%"}>
            <Box flexDirection='row' justifyContent='space-between' padding={1} paddingBottom={0}>
                <Text bold color={'blackBright'}>ZOO en la Sombra</Text>
                <Text bold>Preguntas: {questionCount}</Text>
            </Box>
            <Box justifyContent='center' alignItems='center' flexDirection="row" flexWrap='wrap' borderStyle={'round'} paddingX={2} paddingY={1} borderColor={'#666666'} gap={4}>
                {animals[currentAnimal]!()}
                {children}
            </Box>
        </Box>
    );
}