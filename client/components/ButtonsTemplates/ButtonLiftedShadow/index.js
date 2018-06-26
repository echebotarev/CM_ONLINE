import React, { Component } from 'react'
import styles from './styles.scss'

class ButtonLiftedShadow extends Component {
	render() {
		let { text, style } = this.props.button;

		return (
			<div style={style} className={styles.button + ' button'}>
				<div className={styles.shadow + ' ' + styles.left_shadow}></div>
				<div className={styles.shadow + ' ' + styles.right_shadow}></div>
				<a href="#">
					<span>{ text }</span>
				</a>
			</div>
		)
	}
}

export default ButtonLiftedShadow