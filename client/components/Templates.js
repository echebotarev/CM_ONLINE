import React, {Component} from 'react'
import {connect}          from 'react-redux';
import {
	Nav,
	Col
}                         from 'react-bootstrap'

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
		return (
			<Col className='float-left pl-0' sm={3} md={3}>
				{ this.getTemplates() }
			</Col>
		)
	}

	getTemplates() {
		const { templates, currentTemplate, loading } = this.props;
		if (loading) return <Loader />;

		return templates.length ? (
			<div className='templates'>
				<Nav
					className='flex-column'
					activeKey={ currentTemplate ? currentTemplate : templates[0]._id }
					stacked
				>
					{
						templates.map(template =>
							<Template
								className='clearfix'
								template={template}
								key={template._id}
								eventKey={template._id}
							/>
						)
					}
				</Nav>
				<span onClick={ this.handleClick } className="addItem">Добавить шаблон</span>
			</div>
		) : <h3>No templates yet</h3>;
	}

	handleClick = () => {
		let { addItem } = this.props;
		addItem('tmp', false)
	};
}

export default connect(state => {
	return {
		templates: filtratedTemplatesSelector(state),
		currentTemplate: state.templates.currentTemplate,
		loading: state.templates.loading
	}
}, { checkAndLoadTemplates, addItem, setCurrentTemplate })(Templates)