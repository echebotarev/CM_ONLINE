import React, { Component } from 'react'
import styles from './styles.scss'

class ButtonArrowLeft extends Component {
	render() {
		let { text, style } = this.props.button;

		return (
			<div style={style} className={styles.button + ' button'}>
				<div
					style={{borderBottomColor: style.background}}
					className={styles.top + ' ' + styles.border}
				></div>
				<div
					style={{borderTopColor: style.background}}
					className={styles.bottom + ' ' + styles.border}
				></div>
				<div
					style={{background: style.background}}
					className={styles.body}
				></div>
				<a className={styles.a} href="#">
					<span>{ text }</span>
				</a>
			</div>
		)
	}
}

export default ButtonArrowLeft