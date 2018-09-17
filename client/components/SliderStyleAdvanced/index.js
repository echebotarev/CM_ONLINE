import React, { Component } from 'react'
import { connect }          from 'react-redux'

import { setDraggableSlider } from "../../AC";

class Slider extends Component {
	state = {
		step: 1,
		position: 0,
		maxValue: 0
	};

	componentDidMount() {
		let { maxValue, value } = this.props,
			position = ((value * 100) / maxValue);

		this.setState({
			position: position,
			step: 100 / maxValue,
			maxValue
		})
	}
	
	componentWillReceiveProps(nextProps) {
		if (
			this.state.position === nextProps.value ||
			this.props.isDraggable
		) return;

		let position = Math.round((nextProps.value * 100) / this.state.maxValue);

		this.setState({ position })
	}

	render() {
		return (
			<div
				ref="slider"
				onMouseDown={this.onMouseDown}
				onMouseUp={this.onMouseUp}
				onMouseMove={this.onMouseMove}
				className="slider-style-advanced"
			>
				<div className="line"></div>
				<div className="knobContainer">
					<div className="coloredLine" style={{width: `calc(${this.state.position}%)`}}></div>
					<div className="sliderKnob" style={{left: `calc(${this.state.position}% - 8px)`}}></div>
				</div>
			</div>
		)
	}

	onMouseDown = () => this.props.setDraggableSlider(true);

	onMouseUp = (event) => {
		let position = this.getPosition(event);

		this.props.callback( Math.floor(position / this.state.step) );

		this.setState({ position });
	};

	onMouseMove = (event) => {
		if (!this.props.isDraggable) return;
		let position = this.getPosition(event);

		this.props.callback( Math.floor(position / this.state.step) );

		this.setState({ position });
	};

	getPosition = (event) => {
		let rect = this.refs.slider.getBoundingClientRect();
		let shift = Math.round(event.clientX - rect.left);
		let position = Math.round((shift * 100) / rect.width);

		position = position > 100 ? 100 :
			position < 0 ? 0 : position;

		return position;
	};

}

export default connect(state => {
	return {
		isDraggable: state.sliderStepper.isDraggable
	}
}, { setDraggableSlider })(Slider)