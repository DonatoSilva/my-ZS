import React, { useContext } from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';
import { navInitOptions, NavOptionsContext } from '../../contexts/index.js';
import { NavOptionsContextProps, NavOptionsPanelProps } from '../../interfaces/NavOptionsPanel.js';

const handleSelect = (value: string, navOptions: NavOptionsPanelProps, setNavOptions: (navOptions: NavOptionsPanelProps) => void) => {
    if (value === "exit") {
        setNavOptions({
            question: "Saliendo...",
            options: navOptions.options
        });
        setTimeout(() => process.exit(), 1000);
        return;
    }
    if (value === "credits") {
        setNavOptions({
            question: "Créditos y Agradecimientos: \n\nCreado con la intención de poner en práctica un árbol básico de nodos binarios, este juego consiste en adivinar el animal que piensa el usuario por medio de preguntas y respuestas. \n\nCreado por: @DonatoSilva - 2025 \n\nAgradezco al semillero ADA y a sus tutores por tomarse el tiempo para explicarnos las bases.",
            options: [
                { label: 'Volver al menú', value: "menu" },
                { label: 'Salir', value: "exit" }
            ]
        });
    }
    if (value === "menu") {
        setNavOptions({
            question: "¿Que desea hacer?",
            options: navInitOptions
        });
    }
};

export default function NavPanel() {  // Eliminar props innecesarias
    const { navOptions, setNavOptions } = useContext<NavOptionsContextProps>(NavOptionsContext);

    return (
        <Box flexDirection='column' rowGap={2} flexWrap='wrap'>
            <Box width={45} alignItems='center'>
                <Text bold>{navOptions.question}</Text>
            </Box>
            <SelectInput items={navOptions.options} onSelect={(item) => handleSelect(item.value, navOptions, setNavOptions)} />
        </Box>
    );
}