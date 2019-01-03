import React, { Component } from 'react'
import { connect } from 'react-redux'

import getManageControl from '../../utils/getManageControl'

import { buttonsSelector } from '../../selectors'
import { addItem, deleteItem, openEditor, updateItem, pureSaveData }      from '../../AC'
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
		const { buttons, loading, templateId, isActive } = this.props;
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
				{ getManageControl(<span onClick={ this.addButton } className="addItem">Добавить кнопку</span>, isActive) }
			</ul>
		) : (
			<div>
				<h3>No buttons yet</h3>
				<span onClick={ this.addButton } className="addItem">Добавить кнопку</span>
			</div>
		);
	}

	addButton = () => {
		let { templateId, addItem } = this.props;
		addItem('btn', templateId)
	};

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
}, { addItem, deleteItem, openEditor, updateItem, pureSaveData })(ButtonList)
