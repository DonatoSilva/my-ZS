import React from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';
import { NavOptionsPanelProps } from '../../interfaces/NavOptionsPanel.js';

const handleSelect = (label: string, value: string) => {
    console.log(`Selected ${label} with value ${value}`);
};

export default function QuestionPanel({ question, options }: NavOptionsPanelProps) {
    return (
        <Box flexDirection='column' rowGap={2}>
            <Text bold>{question}</Text>
            <SelectInput items={options ?? []} onSelect={(item) => handleSelect(item.label, item.value)} />
        </Box>
    );
}