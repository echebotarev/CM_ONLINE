import React, { Component } from 'react'

import { connect }                 from 'react-redux'
import { openColorPicker, updateItem, pureSaveData }           from "../AC";
import { filtratedTemplateSelector } from "../selectors";

class CustomizationBar extends Component {
	render() {
		return (
			<div className = "customization-bar">
				<div className="customization-item">
					<svg className="customization-icon" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">
						<g fill="none" fillRule="evenodd">
							<path d="m33 29.478v-7h-3v7h-7v3h7v7h3v-7h7v-3h-7" transform="translate(-23-22)" fill="#000"></path>
						</g>
					</svg>
				</div>
				<div
					className="customization-item"
					ref="container"
					onClick={this.onClick}
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
		template: filtratedTemplateSelector(state)
	}
}, { openColorPicker, updateItem, pureSaveData })(CustomizationBar)