import React, { Component } from 'react'
import { connect } from 'react-redux'

import { content } from '../fixturesEditor'

import Input from './Input'
import Select from './Select'

import { filtratedButtonSelector } from '../selectors'
import { updateItem } from '../AC'

class InputMessengers extends Component {
	render() {
		let { button } = this.props;

		return (
			<div className = 'input-messengers'>
				<Input
					id = { button._id }
					text = { button.link }
					placeholder = 'https://'
					onChange = { this.onChangeInput }
				/>
				<Select
					id = { button._id }
					options = { content.messengers }
					selected = { button.type }
					onChange = { this.onChangeSelect }
				/>
			</div>
		)
	}

	onChangeInput = (id, value) => {
		this.props.updateItem({
			id,
			value,
			type: 'buttons',
			name: 'link'
		})
	};

	onChangeSelect = (id, value) => {
		this.props.updateItem({
			id,
			value,
			type: 'buttons',
			name: 'type'
		})
	}
}

export default connect(state => {
	return {
		button: filtratedButtonSelector(state)
	}
}, { updateItem })(InputMessengers)
