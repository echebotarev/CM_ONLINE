import React, { Component } from 'react'

import Input from '../../Input/index'

class BasicButton extends Component {
	render() {
		let { onChange, styles } = this.props,
			{ text, _id } = this.props.button;

		return (
			<div>
				<a href="#">
					<span style={{color: styles.color}} >
						<Input
							id = { _id }
							text = { text }
							onChange = { onChange }
						/>
					</span>
				</a>
			</div>
		)
	}
}

export default BasicButton
