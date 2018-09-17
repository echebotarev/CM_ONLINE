import React, { Component } from 'react'

class BasicButton extends Component {
	render() {
		let { styles } = this.props,
			{ text } = this.props.button;

		return (
			<div>
				<a href="#">
					<span style={{color: styles.color}} >{ text }</span>
				</a>
			</div>
		)
	}
}

export default BasicButton