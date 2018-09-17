import React, { Component } from 'react'

class ButtonShadowRight extends Component {
	render() {
		let { styles } = this.props,
			{ text } = this.props.button;

		return (
			<div>
				<div className="shadow right_shadow"></div>
				<a href="#">
					<span style={{color: styles.color}}>{ text }</span>
				</a>
			</div>
		)
	}
}

export default ButtonShadowRight