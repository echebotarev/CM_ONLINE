import React, { Component } from 'react'
import Input                from "../../Input";

class ButtonShadowRight extends Component {
	render() {
		let { onChange, styles } = this.props,
			{ text, _id } = this.props.button;

		return (
			<div>
				<div className="shadow right_shadow"></div>
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

export default ButtonShadowRight
