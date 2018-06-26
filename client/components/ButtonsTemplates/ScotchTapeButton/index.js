import React, { Component } from 'react'
import styles from './styles.scss'

class ScotchTapeButton extends Component {
	render() {
		let { text, style } = this.props.button;

		return (
			<div style={style} className={styles.button + ' button'}>
				<div className={styles.left}></div>
				<a href="#">
					<span>{ text }</span>
				</a>
				<div className={styles.right}></div>
			</div>
		)
	}
}

export default ScotchTapeButton