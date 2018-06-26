import React, { Component } from 'react'
import styles from './styles.scss'

class ShinyButtonISkin extends Component {
	render() {
		let { text, style } = this.props.button;

		return (
			<div style={style} className={styles.button + ' button'}>
				<a href="#">
					<span>{ text }</span>
				</a>
			</div>
		)
	}
}

export default ShinyButtonISkin