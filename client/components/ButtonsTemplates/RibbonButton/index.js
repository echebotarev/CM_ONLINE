import React, { Component } from 'react'

class RibbonButton extends Component {
	render() {
		let { styles } = this.props,
			{ text } = this.props.button;

		return (
			<div>
				<div style={{background: styles.background}} className = "body"></div>
				<div className = "ribbon">
					<div style={{borderLeftColor: styles.background}}></div>
					<div style={{borderLeftColor: styles.background}}></div>
					<div style={{borderLeftColor: styles.background}}></div>
					<div style={{borderLeftColor: styles.background}}></div>
					<div style={{borderLeftColor: styles.background}}></div>
					<div style={{borderLeftColor: styles.background}}></div>
					<div style={{borderLeftColor: styles.background}}></div>
					<div style={{borderLeftColor: styles.background}}></div>
					<div style={{borderLeftColor: styles.background}}></div>
					<div style={{borderLeftColor: styles.background}}></div>
					<div style={{borderLeftColor: styles.background}}></div>
					<div style={{borderLeftColor: styles.background}}></div>
					<div style={{borderLeftColor: styles.background}}></div>
					<div style={{borderLeftColor: styles.background}}></div>
					<div style={{borderLeftColor: styles.background}}></div>
					<div style={{borderLeftColor: styles.background}}></div>
					<div style={{borderLeftColor: styles.background}}></div>
					<div style={{borderLeftColor: styles.background}}></div>
				</div>
				<a href="#">
					<span style={{color: styles.color}}>{ text }</span>
				</a>
			</div>
		)
	}
}

export default RibbonButton