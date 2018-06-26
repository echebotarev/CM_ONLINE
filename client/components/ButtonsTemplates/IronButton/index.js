import React, { Component } from 'react'
import styles from './styles.scss'

class IronButton extends Component {
	render() {
		let { text, style } = this.props.button;

		return (
			<div style={style} className={styles.button + ' button'}>
				<div className={styles.body}></div>
				<div className={styles.screw + ' ' + styles.tl}></div>
				<div className={styles.screw + ' ' + styles.bl}></div>
				<div className={styles.screw + ' ' + styles.tr}></div>
				<div className={styles.screw + ' ' + styles.br}></div>
				<a href="#">
					<span>{ text }</span>
				</a>
			</div>
		)
	}
}

export default IronButton