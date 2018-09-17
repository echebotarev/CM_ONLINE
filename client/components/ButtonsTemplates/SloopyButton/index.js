import React, { Component } from 'react'

class SloopyButton extends Component {
	render() {
		let { styles } = this.props,
			{ text } = this.props.button;

		return (
			<div>
				<div className="border border_top"></div>
				<div className="border border_bottom"></div>
				<a href="#">
					<span style={{color: styles.color}}>{ text }</span>
				</a>
			</div>
		)
	}
}

export default SloopyButton