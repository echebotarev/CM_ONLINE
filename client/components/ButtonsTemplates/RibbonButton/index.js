import React, { Component } from 'react'
import Input                from "../../Input";

class RibbonButton extends Component {
	render() {
		let { onChange, styles } = this.props,
			{ text, _id } = this.props.button;

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
					<span style={{color: styles.color}}>
						<Input
							id = { _id }
							text = { text }
							onChange = { onChange }
						/>
					</span>
				</a>
			</div>
		)
	}
}

export default RibbonButton
