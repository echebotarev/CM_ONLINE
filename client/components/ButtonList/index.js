import React, { Component } from 'react'
import { connect } from 'react-redux'

import getManageControl from '../../utils/getManageControl'

import { buttonsSelector } from '../../selectors'
import { addItem, deleteItem, openEditor }      from '../../AC'
import Button                     from '../Button'
import Loader                     from '../Loader'
import FA                         from 'react-fontawesome'

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
							<li key = { button._id }>
								<Button button = { button } />
								{
									getManageControl(
										<span>
												<FA
													onClick={ this.openEditor.bind(null, button._id, true) }
													name="cog"
												/>
												<FA
													onClick={ this.deleteItem.bind(this, button._id) }
													name="trash"
												/>
											</span>,
										isActive
									)
								}
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

	openEditor = (id, advanced) => {
		this.props.openEditor('buttons', id, advanced);
	};

	deleteItem = id => {
		let { deleteItem } = this.props;
		deleteItem('btn', id);
	}
}

export default connect(state => {
	return {
		// templateId: state.templates.currentTemplate,
		buttons: buttonsSelector(state),
		loading: state.templates.loading
	}
}, { addItem, deleteItem, openEditor })(ButtonList)
