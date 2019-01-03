import React, { Component } from 'react'
import { connect } from 'react-redux'

import { buttonsSelector } from '../../selectors'
import { deleteItem, openEditor, updateItem, pureSaveData }      from '../../AC'
import Button                     from '../Button'
import Loader                     from '../Loader'

class ButtonList extends Component {

	render() {
		return (
			<div className='buttons'>
				{ this.getButtons() }
			</div>
		)
	}

	getButtons() {
		const { buttons, loading, templateId } = this.props;
		if (loading) {
			return <Loader />;
		}

		return buttons.length ? (
			<ul>
				{
					buttons.map(button => {
						if (templateId !== button.template) {
							return '';
						}

						return (
							<li
								key = { button._id }
							>
								<Button
									button = { button }
									onChange = { this.handleTextChange }
								/>
							</li>
						)
					}
				)}
			</ul>
		) : (
			<div>
				<h3>No buttons yet</h3>
			</div>
		);
	}

	handleTextChange = (id, value, save) => {
		if (save) {
			this.props.pureSaveData({
				id,
				type: 'buttons'
			})
		}
		else {
			this.props.updateItem({
				id,
				value,
				type: 'buttons',
				name: 'text'
			})
		}
	}
}

export default connect(state => {
	return {
		buttons: buttonsSelector(state),
		loading: state.templates.loading
	}
}, { deleteItem, openEditor, updateItem, pureSaveData })(ButtonList)
