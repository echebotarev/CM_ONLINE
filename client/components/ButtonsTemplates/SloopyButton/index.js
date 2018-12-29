import React, { Component } from 'react'
import Input                from "../../Input";

class SloopyButton extends Component {
	render() {
		let { onChange, styles } = this.props,
			{ text, _id } = this.props.button;

		return (
			<div>
				<div className="border border_top"></div>
				<div className="border border_bottom"></div>
				<a href="#">
					<span style={{color: styles.color}}>
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

export default SloopyButton
