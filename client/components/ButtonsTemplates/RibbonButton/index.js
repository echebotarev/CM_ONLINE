import React, { Component } from 'react'
import styles from './styles.scss'

class RibbonButton extends Component {
	render() {
		let { text, style } = this.props.button;

		return (
			<div style={style} className={styles.button + ' button'}>
				<div style={{background: style.background}} className={styles.body}></div>
				<div className={styles.ribbon}>
					<div style={{borderLeftColor: style.background}}></div>
					<div style={{borderLeftColor: style.background}}></div>
					<div style={{borderLeftColor: style.background}}></div>
					<div style={{borderLeftColor: style.background}}></div>
					<div style={{borderLeftColor: style.background}}></div>
					<div style={{borderLeftColor: style.background}}></div>
					<div style={{borderLeftColor: style.background}}></div>
					<div style={{borderLeftColor: style.background}}></div>
					<div style={{borderLeftColor: style.background}}></div>
					<div style={{borderLeftColor: style.background}}></div>
					<div style={{borderLeftColor: style.background}}></div>
					<div style={{borderLeftColor: style.background}}></div>
					<div style={{borderLeftColor: style.background}}></div>
					<div style={{borderLeftColor: style.background}}></div>
					<div style={{borderLeftColor: style.background}}></div>
					<div style={{borderLeftColor: style.background}}></div>
					<div style={{borderLeftColor: style.background}}></div>
					<div style={{borderLeftColor: style.background}}></div>
				</div>
				<a href="#">
					<span>{ text }</span>
				</a>
			</div>
		)
	}
}

export default RibbonButton