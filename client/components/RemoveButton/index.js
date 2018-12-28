import React, { Component } from 'react'
import { connect }          from 'react-redux';

import styles from './styles.scss'

import { deleteItem } from "../../AC";

class RemoveButton extends Component {
	render() {
		return (
			<div
				onClick = { this.handleClick }
				className={styles["button-remove"]}
			>
				<svg className="zen-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
					<path
						d="m10.4996 0h-.99992v9.50037h-9.49968v.99993h9.49968v9.4996h.99992v-9.4996h9.5003v-.99993h-9.5003z"
						fillRule="evenodd"
						transform="matrix(.707107 .707107 -.707107 .707107 8 -6.139999999999)"></path>
				</svg>
			</div>
		)
	}

	handleClick = () => {
		let { id, deleteItem } = this.props;
		deleteItem('tmp', id);
	}
}

export default connect(null, { deleteItem })(RemoveButton)
