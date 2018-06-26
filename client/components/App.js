import React, { Component } from 'react'
import Tooltip from 'react-tooltip'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { checkAuthenticate } from './../AC';

import Header from './Header';
import MainPage from './routes/MainPage';
import LoginPage from './routes/LoginPage';
import LogoutPage from './routes/LogoutPage';
import Constructor from './Constructor';

class App extends Component {

	componentDidMount(){
		this.props.checkAuthenticate();
	}

	render() {
		return (
			<div className="main">
				<Header />
				<Switch>
					<Route path = "/register" component = { LoginPage } />
					<Route path = "/login" component = { LoginPage } />
					<Route path = "/logout" component = { LogoutPage } />
					<Route path = "/constructor" component = { Constructor } />
					<Route path = "/" component = { MainPage } />
					<Route path = "*" render = { this.notFound } />
				</Switch>
				<Tooltip data-type="light"/>
			</div>
		)
	}

	notFound = () => <h1>Not Found</h1>;
}

export default connect(state => {
	return {
		router: state.router
	}
}, { checkAuthenticate })(App)