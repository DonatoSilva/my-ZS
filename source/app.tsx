import React, { useState } from 'react';
import { Text, Box } from 'ink';
import SelectInput from 'ink-select-input';
import BigText from 'ink-big-text';

const firtCat = () => {
  return (
    <Box flexDirection="column" >
      <Text>     /\-/\ </Text>
      <Text>    ( o.o )</Text>
      <Text>/    \   /</Text>
      <Text>|     \_/ </Text>
      <Text> \   /   \ </Text>
      <Text>  \_(_____)</Text>
    </Box>
  );
}

const secondCat = () => {
  return (
    <Box flexDirection="column">
      <Text>     /\-/\ </Text>
      <Text>    (  o.o)</Text>
      <Text>\    \   /</Text>
      <Text> |    \_/ </Text>
      <Text> \   /   \ </Text>
      <Text>  \_(_____)</Text>
    </Box>
  )
}

const thirdCat = () => {
  return (
    <Box flexDirection="column">
      <Text>     /\-/\ </Text>
      <Text>    (o.o  )</Text>
      <Text>/    \   /</Text>
      <Text>|     \_/ </Text>
      <Text> \   /   \ </Text>
      <Text>  \_(_____)</Text>
    </Box>
  )
}

/// TODO: Animation the gat
export default function App() {
  const [cat, setCat] = useState<number>(0);
  const cats: Array<Function> = [firtCat, secondCat, thirdCat];

  const handleResponse = [
    {
      label: 'Si',
      value: "Y"
    },
    {
      label: 'No',
      value: "N"
    }
  ]

  setTimeout(() => {
    if (cat < cats.length - 1) {
      setCat(cat + 1);
      return;
    }

    setCat(0);
  }, 2000);

  return (
    <Box flexDirection='column' alignItems='center'>
      <BigText text='Play ZS' />
      <Text>Piensa en un animal y miremos si lo adivino</Text>
      <Box flexDirection='column' minWidth={80} >
        <Box flexDirection='row' justifyContent='space-between' padding={1} paddingBottom={0}>
          <Text bold color={'blackBright'}>ZOO en la Sombra</Text>
          <Text bold>Preguntas: 0</Text>
        </Box>
        <Box flexDirection="row" borderStyle={'round'} paddingX={4} paddingY={2} borderColor={'#666666'} gap={8}>
          {cats[cat] ? cats[cat]() : firtCat()}
          <Box flexDirection='column' rowGap={2}>
            <Text bold>¿ Pregunta sobre el animal ?</Text>
            <SelectInput items={handleResponse} />
          </Box>
        </Box>
      </Box>
    </Box>
  );

}
