import React, { Component } from 'react'

class IronButton extends Component {
	render() {
		let { styles } = this.props,
			{ text } = this.props.button;

		return (
			<div>
				<div className="body"></div>
				<div className="screw tl"></div>
				<div className="screw bl"></div>
				<div className="screw tr"></div>
				<div className="screw br"></div>
				<a href="#">
					<span style={{color: styles.color}}>{ text }</span>
				</a>
			</div>
		)
	}
}

export default IronButton