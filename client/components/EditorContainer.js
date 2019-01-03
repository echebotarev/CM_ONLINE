import React, { Component } from 'react'
import { connect } from 'react-redux'

import EditorBasic from './EditorBasic'
import EditorAdvanced from './EditorAdvanced'

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
					<div className="editor-close">
						<svg width="25" height="25" viewBox="0 0 25 25">
							<path d="M11.793 12.5L8.146 8.854 7.793 8.5l.707-.707.354.353 3.646 3.647 3.646-3.647.354-.353.707.707-.353.354-3.647 3.646 3.647 3.646.353.354-.707.707-.354-.353-3.646-3.647-3.646 3.647-.354.353-.707-.707.353-.354 3.647-3.646z"></path>
						</svg>
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
