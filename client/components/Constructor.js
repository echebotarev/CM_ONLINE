import React, { Component } from 'react'

import { isNotAuthenticated } from "../AC";
import { connect } from "react-redux";

import Templates         from './Templates'
import Editor            from './Editor'

import { filtratedTemplateSelector } from '../selectors';

class Constructor extends Component {

	componentDidMount() {
		const { isAuthenticate, isNotAuthenticated } = this.props;
		if (!isAuthenticate) {
			isNotAuthenticated();
		}
	}

	render() {
		let { template } = this.props;

		return (
			<div className="content clearfix">
				<Templates />
				{ this.props.editorOpen ? <Editor /> : '' }
			</div>
		)
	}
}

export default connect(state => {
	return {
		isAuthenticate: state.isAuthenticate.auth,
		template: filtratedTemplateSelector(state),
		editorOpen: state.editor.open
	}
}, { isNotAuthenticated })(Constructor);
