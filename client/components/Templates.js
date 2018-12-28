import React, { Component } from 'react'
import { connect }          from 'react-redux';

import { filtratedTemplatesSelector } from '../selectors'
import Template                     from './Template';
import Loader                       from './Loader';

import getTemplateSize from './../utils/getTemplateSize'

import { checkAndLoadTemplates, addItem, setCurrentTemplate } from '../AC';

class Templates extends Component {

	componentDidMount() {
		const { checkAndLoadTemplates } = this.props;
		checkAndLoadTemplates();
	}

	render() {
		return this.getTemplates();
	}

	getTemplates() {
		const { templates, currentTemplate, loading } = this.props;
		if (loading) {
			return <Loader />;
		}

		let height = this.getContainerHeight(),
			size = getTemplateSize(height),
			isDeleted = templates.length > 1;

		return templates.length ? (
			<div
				ref="container"
				className='templates'
			>
				<div style={{
					width: `${size.width / 2}px`,
					height: '32px',
					flex: '0 0 auto'
				}}></div>
				{
					templates.map(template =>
						{

							return <Template
								className = 'clearfix'
								template = { template }
								size = { size }
								key = { template._id }
								isDeleted = { isDeleted }
								currentTemplate = { currentTemplate ? currentTemplate : templates[0]._id }
							/>
						}
					)
				}
				<div
					className = 'template type-add'
					onClick = { this.handleClick }
					style = {{
						width: `${size.width}px`,
						height: `${size.height}px`
					}}
				>+</div>
				<div style={{
					width: `calc(100vw - ${size.height}px)`,
					height: '32px',
					flex: '0 0 auto'
				}}></div>
			</div>
		) : <h3>No templates yet</h3>;
	}

	handleClick = () => {
		let { addItem } = this.props;
		addItem('tmp', false)
	};

	getContainerHeight = () => {
		let { container } = this.refs,
			height = 0;

		if (container) {
			height = container.clientHeight;
		}

		return height;
	}
}

export default connect(state => {
	return {
		templates: filtratedTemplatesSelector(state),
		currentTemplate: state.templates.currentTemplate,
		loading: state.templates.loading
	}
}, { checkAndLoadTemplates, addItem, setCurrentTemplate })(Templates)
