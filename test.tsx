import React from 'react';
import test from 'ava';
import { render } from 'ink-testing-library';
import App from './source/app.js';

test('Renderizado inicial correcto', t => {
	const { frames } = render(<App />);
	t.true(frames.some(frame => frame.includes('Play ZS')));
	t.true(frames.some(frame => frame.includes('ZOO en la Sombra')));
});
