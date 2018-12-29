import React, { Component } from 'react'
import Input                from "../../Input";

class ScotchTapeButton extends Component {
	render() {
		let { onChange, styles } = this.props,
			{ text, _id } = this.props.button;

		return (
			<div>
				<div className="left"></div>
				<a href="#">
					<span style={{color: styles.color}}>
						<Input
							id = { _id }
							text = { text }
							onChange = { onChange }
						/>
					</span>
				</a>
				<div className="right"></div>
			</div>
		)
	}
}

export default ScotchTapeButton
