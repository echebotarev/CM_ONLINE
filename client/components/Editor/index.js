import React, { Component } from 'react'
import { connect } from 'react-redux'

import EditorContainer from '../EditorContainer'

import {setEditableData, setDraggableSlider } from "../../AC";
import {
	filtratedTemplateSelector,
	filtratedButtonSelector
}                                            from "../../selectors";

class Editor extends Component {
	state = {
		isDraggable: false,
		shiftX: null,
		shiftY: null,
		position: {
			top: null,
			left: null,
			marginTop: null,
			marginLeft: null
		}
	};

	componentDidMount() {
		// сохраняем начальные данные на случай,
		// если пользователь отменит введенные изменения
		let { type, setEditableData } = this.props;

		if (type === 'buttons') {
			return false;
		}

		setEditableData(this.props.template);
	}

	render() {
		return this.props.open ? (
			<div
				className = "editor"
				ref = "editor"
				onMouseMove={ this.onMouseMove }
				onMouseUp={ this.handlerSliderStepperMouseUp }
				// onMouseDown={ this.handlerColorPickerOpen }
			>
				{ this.getEditor() }
				{/*{ this.getColorPicker() }*/}
			</div>
		) : ''
	}

	getEditor = () => {
		return <EditorContainer
			type = { this.props.type }
			id = { this.props.id }
			advanced = { this.props.advanced }
			position = { this.props.coords }
			onMouseDown = { this.onMouseDown }
			onMouseUp = { this.onMouseUp }
		/>
	};

	handlerSliderStepperMouseUp = () => this.props.setDraggableSlider(false);

	onMouseDown = (event) => {
		if (!event.target.classList.contains('editor-header')) return;

		let rect = event.target.getBoundingClientRect();
		let shiftY = event.pageY - rect.top;
		let shiftX = event.pageX - rect.left;

		this.setState({
			position: {
				top: event.pageY - shiftY,
				left: event.pageX - shiftX,
				marginTop: 0,
				marginLeft: 0
			},
			isDraggable: true,
			shiftX,
			shiftY
		});

	};

	onMouseUp = () => {
		this.setState({
			isDraggable: false,
			shiftX: null,
			shiftY: null
		})

	};

	onMouseMove = (event) => {
		if (!this.state.isDraggable) return;

		this.setState({
			position: {
				top: event.pageY - this.state.shiftY,
				left: event.pageX - this.state.shiftX,
				marginTop: 0,
				marginLeft: 0
			}
		})
	}
}

export default connect(state => {
	return {
		open: state.editor.open,
		id: state.editor.id,
		type: state.editor.type,
		advanced: state.editor.advanced,
		coords: state.editor.coords,
		template: filtratedTemplateSelector(state),
		button: filtratedButtonSelector(state)
	}
}, { setEditableData, setDraggableSlider })(Editor)
