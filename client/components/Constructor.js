import React, { Component } from 'react'

import { Col } from 'react-bootstrap'
import { isNotAuthenticated } from "../AC";
import { connect } from "react-redux";

import ImageUpload                 from './ImageUpload'
import ButtonList                  from './ButtonList'
import Templates                   from './Templates'
import Editor                      from './Editor'
import { filtratedTemplateSelector } from '../selectors';

class Constructor extends Component {

	componentDidMount() {
		const { isAuthenticate, isNotAuthenticated } = this.props;
		if (!isAuthenticate) isNotAuthenticated();
	}

	render() {
		let { template } = this.props,
			background = template ? template.background : '#fff';

		return (
			<div className="content clearfix">
				<Templates />
				<Col className="constructor float-left pt-4" sm={9} md={9}>
					<div
						className="wrapper col-7 mx-auto pl-0 pr-0"
						style={{ backgroundColor: background }}
					>
						<ImageUpload />
						<ButtonList />
						<div className="wrapper_line_top"></div>
						<div className="wrapper_line_right"></div>
						<div className="wrapper_line_bottom"></div>
						<div className="wrapper_line_left"></div>
					</div>
				</Col>
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