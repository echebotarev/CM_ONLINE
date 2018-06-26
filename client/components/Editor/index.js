import React, { Component } from 'react'
import { connect } from 'react-redux'

import EditorContainer from '../EditorContainer'

import {setEditableData} from "../../AC";
import {
	filtratedTemplateSelector,
	filtratedButtonSelector
}                        from "../../selectors";

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

	componentWillMount() {
		// сохраняем начальные данные на случай,
		// если пользователь отменит введенные изменения
		let { type, setEditableData } = this.props;

		setEditableData(
			type === 'templates' ?
				this.props.template :
				this.props.button
		);
	}

	render() {
		return this.props.open ? (
			<div
				className="editor"
				onMouseMove={ this.onMouseMove }
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
			position = { this.state.position }
			onMouseDown = { this.onMouseDown }
			onMouseUp = { this.onMouseUp }
		/>
	};

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
		template: filtratedTemplateSelector(state),
		button: filtratedButtonSelector(state),
		advanced: state.editor.advanced
	}
}, { setEditableData })(Editor)
