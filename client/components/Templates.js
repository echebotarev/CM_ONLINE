import React, {Component} from 'react'
import {connect}          from 'react-redux';

import {filtratedTemplatesSelector} from '../selectors'
import Template                     from './Template';
import Loader                       from './Loader';

import {checkAndLoadTemplates, addItem, setCurrentTemplate} from '../AC';

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

		return templates.length ? (
			<div
				ref="container"
				className='templates'
			>
				{
					templates.map(template =>
						{
							let height = this.getContainerHeight();

							return <Template
								className = 'clearfix'
								template = { template }
								containerHeight = { height }
								key = { template._id }
								eventKey = { template._id }
								active = { currentTemplate ? currentTemplate : templates[0]._id }
							/>
						}
					)
				}
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
