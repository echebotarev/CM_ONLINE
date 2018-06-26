import React, { Component } from 'react'
import {connect} from 'react-redux'

import Menu, { MenuItem } from './../Menu'

class Header extends Component {

	getLink = () => {
		return this.props.isAuthenticate ?
			<MenuItem className = "ml-3" to = '/logout'>Выйти</MenuItem> : (
				<span>
					<MenuItem className="ml-3" to='/register'>Зарегистрироваться</MenuItem>
					<MenuItem className = "ml-3" to = '/login'>Войти</MenuItem>
				</span>
			)
	};

	render() {
		const { username } = this.props;

		return (
			<div className="header">
				<h1>Contact Me</h1>
				{
					username ?
						<span className="float-right">{username}</span> :
						''
				}
				<div className="line"></div>
				<Menu className="float-left">
					<MenuItem className = "mr-3" to = '/'>Главная</MenuItem>
					<MenuItem className = "mr-3" to = '/constructor'>Конструктор</MenuItem>
				</Menu>
				<Menu className="float-right">
					{ this.getLink() }
				</Menu>
			</div>
		)
	}
}

export default connect(state => {
	return {
		router: state.router,
		isAuthenticate: state.isAuthenticate.auth,
		username: state.isAuthenticate.username
	}
})(Header)