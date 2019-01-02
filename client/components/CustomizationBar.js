import React, { Component } from 'react'

import { connect }                                   from 'react-redux'
import { openColorPicker, updateItem, pureSaveData, openEditor } from "../AC";
import { filtratedButtonsSelector, filtratedTemplateSelector , currentButtonSelector }  from "../selectors";

class CustomizationBar extends Component {
	render() {
		let { buttons } = this.props;

		return (
			<div className = "customization-bar">
				<div className="customization-item">
					<svg className="customization-icon" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">
						<g fill="none" fillRule="evenodd">
							<path d="m33 29.478v-7h-3v7h-7v3h7v7h3v-7h7v-3h-7" transform="translate(-23-22)" fill="#000"></path>
						</g>
					</svg>
				</div>
				{ buttons.length ? (
					buttons.map(button =>
						{
							let className = this.props.currentButton === button._id ?
								"customization-item active" : "customization-item";

							return (
								<div
									className = { className }
									onClick = { e => this.openEditor(e, button._id) }
									key = { button._id }
								>
									<span>Btn</span>
								</div>
							)
						})
				) :
					'' }
				<div
					className="customization-item"
					ref="container"
					onClick={ this.onClick }
				>
					<svg className="customization-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
						<circle stroke="#000000" strokeWidth="2" fill="#FFFFFF" cx="8" cy="8" r="7"></circle>
					</svg>
				</div>
			</div>
		)
	}

	onClick = () => {

		console.log('BACK', this.props.template.background);
		console.log('CALLBACK', this.callback);

		this.props.openColorPicker(true, {
			currentColor: this.props.template.backgroundColor,
			rect: this.refs.container.getBoundingClientRect(),
			isGradient: true,
			callback: this.onChange
		})
	};

	openEditor = (e, id) => {
		const getCoords = target => {
			let SHIFT = 35,
				targetCoords = target.getBoundingClientRect(),
				containerCoords = document.querySelector('.templates').getBoundingClientRect();

			return {
				top: targetCoords.top,
				left: targetCoords.left - containerCoords.left + SHIFT
			}
		};

		this.props.openEditor('buttons', id, true, getCoords(e.target));
	};

	onChange = value => {
		console.log('VALUE 1', value);

		console.log('TMP ID', this.props.template._id);

		let payload = {
			id: this.props.template._id,
			type: 'templates',
			style: true,
			name: 'backgroundColor',
			value
		};

		this.props.updateItem(payload);
		this.props.pureSaveData(payload);

	}
}

export default connect(state => {
	return {
		colorPickerIsOpen: state.colorPicker.isOpen,
		template: filtratedTemplateSelector(state),
		buttons: filtratedButtonsSelector(state),
		currentButton: currentButtonSelector(state)
	}
}, { openColorPicker, updateItem, pureSaveData, openEditor })(CustomizationBar)
