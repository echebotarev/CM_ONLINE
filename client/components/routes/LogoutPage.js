import React, { Component } from 'react'
import { connect } from 'react-redux'

import { authorization } from './../../AC'
import { isNotAuthenticated } from "./../../AC";

class LogoutPage extends Component {

	componentDidMount() {
		this.props.authorization()
	}

	componentWillReceiveProps(nextProps) {
		if (!nextProps.isAuthenticate) this.props.isNotAuthenticated();
	}

	render() {
		return (
			<div>
				Подождите пожалуйста...
			</div>
		)
	}
}

export default connect(state => {
	return {
		isAuthenticate: state.isAuthenticate.auth
	}
}, { authorization, isNotAuthenticated })(LogoutPage)