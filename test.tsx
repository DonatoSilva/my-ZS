import React from 'react';
import test from 'ava';
import {render} from 'ink-testing-library';
import App from './source/app.js';

test('greet unknown user', t => {
	const {lastFrame} = render(<App/>);

	t.is(lastFrame(), '');
});
