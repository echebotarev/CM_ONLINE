import React, { Component } from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import App from './components/App'

class Root extends Component {
	static propTypes = {
		store: PropTypes.object.isRequired
	};

	render() {
		return (
			<Provider store={this.props.store}>
				<App />
			</Provider>
		)
	}
}

export default Root