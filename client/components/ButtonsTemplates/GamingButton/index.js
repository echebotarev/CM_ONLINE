import React, { Component } from 'react'

class GamingButton extends Component {
	render() {
		let { styles } = this.props,
			{ text } = this.props.button;

		return (
			<div>
				<span className="substrate left"></span>
				<span className="substrate right"></span>
				<span className="top"></span>
				<a href="#">
					<span style={{color: styles.color}}>{ text }</span>
				</a>
			</div>
		)
	}
}

export default GamingButton