import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import history from '../history';
import PropTypes from 'prop-types'
import App from './App'

class Root extends Component {
	static propTypes = {
		store: PropTypes.object.isRequired
	};

	render() {
		return (
			<Provider store={ this.props.store }>
				<ConnectedRouter history={history}>
					<App />
				</ConnectedRouter>
			</Provider>
		)
	}

}

export default Root
