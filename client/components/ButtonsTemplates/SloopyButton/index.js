import React, { Component } from 'react'
import styles from './styles.scss'

class SloopyButton extends Component {
	render() {
		let { text, style } = this.props.button;

		return (
			<div style={style} className={'button'}>
				<div className={styles.border + ' ' + styles.border_top}></div>
				<div className={styles.border + ' ' + styles.border_bottom}></div>
				<a href="#">
					<span>{ text }</span>
				</a>
			</div>
		)
	}
}

export default SloopyButton