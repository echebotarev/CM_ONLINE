import React, { Component } from 'react'
import Input                from "../../Input";

class GamingButton extends Component {
	render() {
		let { onChange, styles } = this.props,
			{ text, _id } = this.props.button;

		return (
			<div>
				<span className="substrate left"></span>
				<span className="substrate right"></span>
				<span className="top"></span>
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

export default GamingButton
