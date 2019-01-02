import React, { Component } from 'react'

import { isNotAuthenticated } from "../AC";
import { connect } from "react-redux";

import Templates         from './Templates'
import Editor            from './Editor'

class Constructor extends Component {

	componentDidMount() {
		const { isAuthenticate, isNotAuthenticated } = this.props;
		if (!isAuthenticate) {
			isNotAuthenticated();
		}
	}

	render() {
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
		editorOpen: state.editor.open
	}
}, { isNotAuthenticated })(Constructor);
