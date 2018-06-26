import React, { Component } from 'react'
import styles from './styles.scss'

class GamingButton extends Component {
	render() {
		let { text, style } = this.props.button;

		return (
			<div style={style} className={styles.button + ' button'}>
				<span className={styles.substrate + ' ' + styles.left}></span>
				<span className={styles.substrate + ' ' + styles.right}></span>
				<span className={styles.top}></span>
				<a href="#">
					<span>{ text }</span>
				</a>
			</div>
		)
	}
}

export default GamingButton