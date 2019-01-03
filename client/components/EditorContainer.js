import React, { Component } from 'react'
import { connect } from 'react-redux'

import EditorBasic from './EditorBasic'
import EditorAdvanced from './EditorAdvanced'
import Input from './Input'

import { openColorPicker, deleteItem } from '../AC'

class EditorContainer extends Component {
	state = {
		currentTab: 0
	};

	render() {
		let {
			id,
			type,
			position,
			advanced
		} = this.props;

		return (
			<div
				style={ position }
				className={ advanced ? "editor-container advanced" : "editor-container" }
			>
				<div
					className="editor-header"
				>
					<div className="editor-name">
						{
							type === 'templates' ?
								'Настройка шаблона' :
								'Настройка кнопки'
						}
					</div>
				</div>
				{
					advanced ?
						<EditorAdvanced
							id = { id }
							type = { type }
						/> :
						<EditorBasic
							id = { id }
							type = { type }
							currentTab = { this.state.currentTab }
							switchTabs = { this.switchTabs }
						/>
				}
				<div className="editor-footer">
					<button
						className = 'delete-item'
						onClick = { () => this.deleteItem(id) }
					>
						Delete
					</button>
				</div>
			</div>
		)
	}

	deleteItem = id => {
		let { deleteItem } = this.props;
		deleteItem('btn', id);
	};

	switchTabs = (index) => {
		this.setState({
			currentTab: index
		})
	}
}

export default connect(null, { openColorPicker, deleteItem })(EditorContainer)
