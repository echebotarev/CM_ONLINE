import React, {Component} from 'react'
import {connect}          from 'react-redux'

import EditorContainer from '../EditorContainer'

import {
	setEditableData,
	setDraggableSlider,
	closeEditor,
	openColorPicker,
	returnData,
	saveData
} from "../../AC";

import {
	filtratedTemplateSelector,
	filtratedButtonSelector
} from "../../selectors";

class Editor extends Component {
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
				onClick = { e => this.closeEditor(e) }
				onMouseUp={ this.handlerSliderStepperMouseUp }
			>
				{ this.getEditor() }
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

	closeEditor = e => {
		if (
			!e.target.closest('.delete-item') &&
			e.target.closest('.editor-container')
		) {
			return false;
		}

		this.props.saveData();

		// если в момент закрытия Editor
		// ColorPicker открыт, скрываем
		this.props.openColorPicker(false);

		this.props.closeEditor(
			this.props.type,
			this.props.id
		);
	};
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
}, { setEditableData, setDraggableSlider, closeEditor, openColorPicker, returnData, saveData })(Editor)
