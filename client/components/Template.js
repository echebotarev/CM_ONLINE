import {connect}          from 'react-redux';
import React, {Component} from 'react'
import {NavItem}          from 'react-bootstrap'
import FA                 from 'react-fontawesome'

import {setCurrentTemplate, deleteItem, openEditor} from '../AC';

class Template extends Component {

	componentWillMount() {
		let { setCurrentTemplate } = this.props;
		if (this.props.active) setCurrentTemplate(this.props.activeKey);
	}

	render() {
		let { template } = this.props;

		return (
			<span>
				<NavItem
					className={ this.props.active ? 'active_template' : null }
					active={ this.props.active }
					eventKey={ this.props.eventKey }
					onClick={ this.handleClick }
				>
					{ template.displayName }
				</NavItem>
				<FA
					onClick={ this.openEditor }
					name="cog"
				/>
				<FA
					onClick={ this.deleteItem }
					name="trash"
				/>
			</span>
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