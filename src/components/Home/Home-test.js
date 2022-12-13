import React from 'react';
import { render } from 'react-test-renderer';
import Home from './Home';

console.log('ok')

test('Render test') => {
	const component = renderer.create(
		<Home/>
	)
}

// // "test": "react-scripts test",