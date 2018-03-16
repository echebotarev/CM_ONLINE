import React, { Component } from 'react'
import Tooltip from 'react-tooltip'

import Header from './Header';
import PreviewPage from './PreviewPage';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<PreviewPage />
				<Tooltip data-type="light"/>
			</div>
		)
	}
}

export default App