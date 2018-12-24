import {connect}          from 'react-redux';
import React, {Component} from 'react'

import ImageUpload       from './ImageUpload'
import ButtonList        from './ButtonList'
import CustomizationBar  from './CustomizationBar'

import getTemplateSize from './../utils/getTemplateSize'

import {setCurrentTemplate, deleteItem, openEditor} from '../AC';

class Template extends Component {

	componentWillMount() {
		let { setCurrentTemplate } = this.props;
		if (this.props.active) {
			setCurrentTemplate(this.props.active);
		}
	}

	render() {
		let { template } = this.props,
			size = getTemplateSize(this.props.containerHeight),
			backgroundColor = template ? template.backgroundColor : '#fff';

		return (
			<div
				className="wrapper"
				style={{ background: backgroundColor, width: `${size.width}px`, height: `${size.height}px` }}
			>
				<ImageUpload />
				<ButtonList />

				<CustomizationBar />

				<div className="wrapper_line_top"></div>
				<div className="wrapper_line_right"></div>
				<div className="wrapper_line_bottom"></div>
				<div className="wrapper_line_left"></div>
			</div>
		)
	}

	handleClick = () => {
		let { setCurrentTemplate } = this.props;
		setCurrentTemplate(this.props.eventKey);
	};

	deleteItem = () => {
		let { deleteItem } = this.props;
		deleteItem('tmp', this.props.eventKey);
	};

	openEditor = () => {
		this.props.openEditor('templates', this.props.eventKey);
	}
}

export default connect(null, { setCurrentTemplate, deleteItem, openEditor })(Template);
