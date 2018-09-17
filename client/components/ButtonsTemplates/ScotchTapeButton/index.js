import React, { Component } from 'react'

class ScotchTapeButton extends Component {
	render() {
		let { styles } = this.props,
			{ text } = this.props.button;

		return (
			<div>
				<div className="left"></div>
				<a href="#">
					<span style={{color: styles.color}}>{ text }</span>
				</a>
				<div className="right"></div>
			</div>
		)
	}
}

export default ScotchTapeButton