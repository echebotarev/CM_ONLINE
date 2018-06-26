import React from 'react'
import { NavLink } from 'react-router-dom'

function MenuItem(props) {
	return (
		<li className={`nav-item ${props.className}`}>
			<NavLink exact to = {props.to} activeClassName="active-link">{props.children}</NavLink>
		</li>
	)
}

MenuItem.propTypes = {
}

export default MenuItem