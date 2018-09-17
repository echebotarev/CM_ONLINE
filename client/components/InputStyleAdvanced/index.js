import React, { Component } from 'react'

class InputStyleAdvanced extends Component {
	state = {
		editing: false,
		maxValue: 0,
		value: 0
	};

	componentDidMount() {
		this.setState({
			maxValue: this.props.maxValue,
			value: this.props.value
		})
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.value === nextProps.value) return;

		this.setState({ value: nextProps.value })
	}

	render() {

		return (
			<div
				className = {
					`input-stepper ${this.props.units ? 'has-units small' : ''} ${this.state.editing ? 'editing' : ''}`
				}
			>
				<input
					type="text" step="1"
					data-aid = "bg-slider-stepper"
					className='input'
					value = { this.state.value }
					maxLength = { this.state.maxValue }
					onChange = { this.onChange }
					onFocus = { this.onFocus }
					onBlur = { this.onBlur }
				/>

				{
					this.props.units ?
						<span className='units-container'>
							<span className='units'>%</span>
						</span> : ''

				}
			</div>
		)
	}

	onChange = (event) => {
		let { value } = event.target;

		this.setState({
			value: value !== '' ? parseInt(value) : ''
		});
	};

	onFocus = () => {
		this.setState({
			editing: true
		})
	};

	onBlur = (event) => {
		let { value } = event.target;

		value = value !== '' ? parseInt(value) : 0;
		value = value > this.state.maxValue ? this.state.maxValue : value;

		this.props.callback(value);

		this.setState({
			editing: false
		})
	};
}

export default InputStyleAdvanced