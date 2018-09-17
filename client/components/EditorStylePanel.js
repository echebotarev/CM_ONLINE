import React, { Component } from 'react'
import { connect } from 'react-redux'

import { content } from '../fixturesEditor'

import EditorStyleContent from './EditorStyleContent'

import {
	Fill,
	Border,
	Corners,
	Shadow,
	Text
}                                from './EditorStylePanelItems'
import {filtratedButtonSelector} from "../selectors";

class EditorStylePanel extends Component {
	state = {
		category: false,
		isOpen: false,
		templatesButton: null
	};

	componentWillMount() {
		let { templatesButton } = this.props.button;
		this.setState({ templatesButton });
	}

	componentWillReceiveProps(nextProps) {
		let {templatesButton} = nextProps.button;

		if (this.state.templatesButton === templatesButton) return;

		this.setState({
			templatesButton,
			isOpen: false,
			category: false
		})
	}

	render() {
		let { buttonsPreviewEditor } = content,
			{ templatesButton } = this.props.button,
			fixtures = buttonsPreviewEditor[templatesButton];

		return (
			<div className='style-panel-container'>
				<div className="content-container flex-child">
					<div
						onClick={this.onOpen}
						className={`control-tabs-vertical ${this.state.isOpen ? '' : 'closed'}`}
					>
						{
							fixtures ?
								fixtures.map((item, index) => {
									switch(item) {
										case 'fill':
											return <div key = { index }>
												<Fill />
											</div>;
										case 'border':
											return <div key = { index }>
												<Border />
											</div>;
										case 'text':
											return <div key = { index }>
												<Text />
											</div>;
										/*case 'corners':
											return <div key = { index }>
												<Corners />
											</div>;
										case 'shadow':
											return <div key = { index }>
												<Shadow />
											</div>;
										*/
									}
								}) :
								''
						}
					</div>
					{
						this.state.category ?
							<EditorStyleContent
								id = { this.props.id }
								button = { this.props.button }
								category={ this.state.category }
							/> : ''
					}
				</div>
			</div>
		)
	}

	onOpen = (e) => {
		if (e.target.tagName.toLowerCase() !== 'input') return;

		this.setState({
			category: e.target.value,
			isOpen: true
		})
	}
}

export default connect(state => {
	return {
		button: filtratedButtonSelector(state)
	}
})(EditorStylePanel)