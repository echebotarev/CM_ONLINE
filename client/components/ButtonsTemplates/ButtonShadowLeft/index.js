import React, { Component } from 'react'
import styles from './styles.scss'

class ButtonShadowLeft extends Component {
	render() {
		let { styles } = this.props,
			{ text } = this.props.button;

		return (
			<div>
				<div className="shadow left_shadow"></div>
				<a href="#">
					<span style={{color: styles.color}}>{ text }</span>
				</a>
			</div>
		)
	}
}

export default ButtonShadowLeft