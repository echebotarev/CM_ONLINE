import {connect}          from 'react-redux';
import React, {Component} from 'react'

import ImageUpload       from './ImageUpload'
import ButtonList        from './ButtonList'
import CustomizationBar  from './CustomizationBar'

import {setCurrentTemplate, deleteItem, openEditor} from '../AC';

class Template extends Component {

	componentWillMount() {
		let { setCurrentTemplate } = this.props;
		console.log('CUR TMP', this.props.currentTemplate);

		if (this.props.currentTemplate) {
			setCurrentTemplate(this.props.active);
		}
	}

	render() {
		let { template, size } = this.props,
			backgroundColor = template ? template.backgroundColor : '#fff',
			className = this.props.currentTemplate === template._id ? 'template active' : "template";

		return (
			<div
				className = { className }
				key = { this.props.key }
				onClick = { this.handleClick }

				style = {{
					background: backgroundColor,
					width: `${size.width}px`,
					height: `${size.height}px`
				}}
			>
				<ImageUpload
					picture = { this.props.template.logotypePicture }
				/>
				<ButtonList
					templateId = { this.props.template._id }
				/>

				<CustomizationBar />

			</div>
		)
	}

	getActionActiveTemplate = () => {

	};

	handleClick = () => {
		let { setCurrentTemplate } = this.props;
		setCurrentTemplate(this.props.template._id);
	};

	deleteItem = () => {
		let { deleteItem } = this.props;
		deleteItem('tmp', this.props.template._id);
	};

	openEditor = () => {
		this.props.openEditor('templates', this.props.template._id);
	}
}

export default connect(null, { setCurrentTemplate, deleteItem, openEditor })(Template);
