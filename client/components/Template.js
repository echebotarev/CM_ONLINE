import {connect}          from 'react-redux';
import React, {Component} from 'react'

import ImageUpload       from './ImageUpload'
import ButtonList        from './ButtonList'
import CustomizationBar  from './CustomizationBar'

import getManageControl from '../utils/getManageControl'

import {setCurrentTemplate, deleteItem, openEditor} from '../AC';

class Template extends Component {

	componentWillMount() {
		let { setCurrentTemplate, currentTemplate } = this.props;

		if (currentTemplate) {
			setCurrentTemplate(currentTemplate);
		}
	}

	render() {
		let { template, size } = this.props,
			backgroundColor = template ? template.backgroundColor : '#fff',
			isActive = this.props.currentTemplate === template._id;

		return (
			<div
				className = { isActive ? 'template active' : "template" }
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
					isActive = { isActive }
				/>
				<ButtonList
					templateId = { this.props.template._id }
					isActive = { isActive }
				/>

				{ getManageControl(<CustomizationBar />, isActive) }

			</div>
		)
	}

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
