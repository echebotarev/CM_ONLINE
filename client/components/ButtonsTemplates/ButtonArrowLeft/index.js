import React, { Component } from 'react'
import styles from './styles.scss'

class ButtonArrowLeft extends Component {
	render() {
		let { styles } = this.props,
			{ text } = this.props.button;

		return (
			<div>
				<div
					ref = { elem => this.setColor(elem, styles, 'bottom') }
					className='top border'
				></div>
				<div
					ref = { elem => this.setColor(elem, styles, 'top') }
					className='bottom border'
				></div>
				<div
					style={{background: styles.background}}
					className="body"
				></div>
				<a className="a" href="#">
					<span style={{color: styles.color}}>{ text }</span>
				</a>
			</div>
		)
	}

	setColor = (elem, style, direct) => {
		if (elem) {
			elem.style.setProperty(
				direct === 'bottom' ? 'border-bottom-color' : 'border-top-color',
				style.background,
				'important'
			);
		}
	}
}

export default ButtonArrowLeft