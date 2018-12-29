import React, { Component } from 'react'

class Input extends Component {
	state = {
		isActive: false
	};

	render() {
		let { text, onChange, id } = this.props,
			{ isActive } = this.state;

		return (
			<div className = { isActive ? 'input-text active' : 'input-text' }>
				<input
					type = "text"
					value = { text }

					onChange = { e => onChange(id, e.target.value) }

					onFocus = { this.toggleActiveClassName }
					onBlur = { e => this.onBlur(e) }
				/>
				<span></span>
			</div>
		)
	}

	onBlur = e => {
		let { id } = this.props;

		this.toggleActiveClassName();
		this.props.onChange(id, e.target.value, true);
	};

	toggleActiveClassName = () => {
		this.setState({
			isActive: !this.state.isActive
		})
	}

}

export default Input
