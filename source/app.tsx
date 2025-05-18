import React, { useState } from 'react';
import { Box } from 'ink';
import Header from './components/Header.js';
import Body from './components/Body.js';
import NavOptions from './components/navOptions/NavOptionsPanel.js';

import FirstCat from './components/animals/cat/FirstCat.js';
import SecondCat from './components/animals/cat/SecondCat.js';
import ThirdCat from './components/animals/cat/ThirdCat.js';

export default function App() {
  const [indexAnimal, setIndexAnimal] = useState<number>(0);
  const [navTitle, _] = useState<string>('Selecciona una opción');
  const animal: Array<() => JSX.Element> = [FirstCat, SecondCat, ThirdCat];

  const handleResponse = [
    {
      label: 'Iniciar Juego',
      value: "start"
    },
    {
      label: 'Creditos y Agradecimientos',
      value: "credits"
    },
    {
      label: 'Salir',
      value: "exit"
    }
  ]

  setTimeout(() => {
    if (indexAnimal < animal.length - 1) {
      setIndexAnimal(indexAnimal + 1);
      return;
    }

    setIndexAnimal(0);
  }, 2000);

  return (
    <Box flexDirection='column' alignItems='center'>
      <Header />
      <Body currentAnimal={indexAnimal} animals={animal} questionCount={0} >
        <NavOptions question={navTitle} options={handleResponse} />
      </Body>
    </Box>
  );

}
