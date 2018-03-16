import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader';

import store from './store'
import Root from './Root'
import './main.gscss'

render(
	<AppContainer>
		<Root store={store} />
	</AppContainer>,
	document.getElementById('root')
);

if(module.hot) {
	module.hot.accept('./Root', () => {
		console.log("index.js HMR");
		const NewApp = require('./Root').default;
		render(<AppContainer><NewApp store={store} /></AppContainer>, document.getElementById('root'));
	});
}