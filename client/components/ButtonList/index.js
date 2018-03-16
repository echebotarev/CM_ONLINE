import React, { Component } from 'react'
import { connect } from 'react-redux'

import { filtratedButtonsSelector } from '../../selectors'
import { checkAndLoadButtons } from '../../AC'
import Button from '../Button'
import Loader from '../Loader'
import FA from 'react-fontawesome'

class ButtonList extends Component {

	componentDidMount() {
		const { checkAndLoadButtons } = this.props;
		checkAndLoadButtons();
	}

	render() {
		return (
			<div>
				{ this.getButtons() }
			</div>
		)
	}

	getButtons() {
		const { buttons, loading } = this.props;
		if (loading) return <Loader />;

		return buttons.length ? (
			<ul>
				{
					buttons.map(button =>
						<li key = { button.id }>
							<Button button = { button } />
						</li>
					)
				}
				<FA name="plus-circle" />
			</ul>
		) : <h3>No buttons yet</h3>;
	}
}

export default connect(state => {
	return {
		buttons: filtratedButtonsSelector(state),
		loading: state.buttons.loading
	}
}, { checkAndLoadButtons })(ButtonList)