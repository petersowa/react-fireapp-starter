import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import '@babel/polyfill';

import './style.scss';
import App from './App';
import DefaultErrorBoundary from './DefaultErrorBoundary';

if (process.env.NODE_ENV === 'development') {
	// Currently causes warning when used in React.StrictMode:
	// Warning: findDOMNode is deprecated in StrictMode.
	// Seems to occur only on class based components
	const axe = require('react-axe');
	axe(React, ReactDOM, 1000);
}

const HotApp = hot(App);

ReactDOM.render(
	<React.StrictMode>
		<DefaultErrorBoundary>
			<HotApp />
		</DefaultErrorBoundary>
	</React.StrictMode>,
	document.querySelector('#app')
);
