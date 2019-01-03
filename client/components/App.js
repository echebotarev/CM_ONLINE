import React, { Component } from 'react'
import Tooltip from 'react-tooltip'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { checkAuthenticate, openColorPicker } from './../AC';

import Header      from './Header';
import MainPage    from './routes/MainPage';
import LoginPage   from './routes/LoginPage';
import LogoutPage  from './routes/LogoutPage';
import Constructor from './Constructor';

import Editor from './Editor'
import ColorPickerCircle from './ColorPickerCircle'

class App extends Component {

	componentDidMount(){
		this.props.checkAuthenticate();
	}

	render() {
		return (
			<div
				className = "main"
				ref = "main"
				onClick = { this.handlerColorPickerOpen }
			>
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
				{ this.getColorPicker() }
				{ this.props.editorOpen ? <Editor /> : '' }
			</div>
		)
	}

	notFound = () => <h1>Not Found</h1>;

	getColorPicker = () => {
		return this.props.colorPicker.isOpen ?
			<ColorPickerCircle
				data = { this.props.colorPicker }
				parent = { this.refs.main }
			/> : ""
	};

	handlerColorPickerOpen = (event) => {
		// не обрабатываем клики по
		// ColorPickerInput и ColorPickerCircle
		if (
			this.props.colorPicker.isOpen &&
			!event.target.closest('.narrative-colorpicker') &&
			!event.target.classList.contains('color-picker-color')
		) {
			this.props.openColorPicker(false);
		}
	};
}

export default connect(state => {
	return {
		router: state.router,
		colorPicker: state.colorPicker,
		editorOpen: state.editor.open
	}
}, { checkAuthenticate, openColorPicker })(App)
