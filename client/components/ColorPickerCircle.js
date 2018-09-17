import React, { Component } from 'react'

const rgbToString = {
	'rgb(0, 0, 0)': 'black',
	'rgb(255, 255, 255)': 'white',
	'rgb(255, 26,24)': 'red',
	'rgb(255, 240, 0)': 'yellow',
	'rgb(11, 227, 97)': 'green',
	'rgb(179, 0, 188)': 'violet',
	'rgb(7, 97, 219)': 'blue',
	'rgb(168, 168, 168)': 'grey',

	'linear-gradient(0deg, #c1c1c1, #000)': 'black_gradient',
	'linear-gradient(180deg, #fff, #ffc800)': 'white_gradient',
	'linear-gradient(180deg, #c90174, #eb5c57)': 'red_gradient',
	'linear-gradient(0deg, #fbda61, #f76b1c)': 'yellow_gradient',
	'linear-gradient(0deg, #b4ed50, #429321)': 'green_gradient',
	'linear-gradient(180deg, #c90174, #0164fd)': 'violet_gradient',
	'linear-gradient(180deg, #3023ae, #53a0fe 48%, #b4ed50)': 'blue_gradient',
	'linear-gradient(0deg, #e2e2e2, #959595)': 'grey_gradient'
};
const stringToRgb = {
	'black': 'rgb(0, 0, 0)',
	'white': 'rgb(255, 255, 255)',
	'red': 'rgb(255, 26,24)',
	'yellow': 'rgb(255, 240, 0)',
	'green': 'rgb(11, 227, 97)',
	'violet': 'rgb(179, 0, 188)',
	'blue': 'rgb(7, 97, 219)',
	'grey': 'rgb(168, 168, 168)',

	'black_gradient': 'linear-gradient(0deg, #c1c1c1, #000)',
	'white_gradient': 'linear-gradient(180deg, #fff, #ffc800)',
	'red_gradient': 'linear-gradient(180deg, #c90174, #eb5c57)',
	'yellow_gradient': 'linear-gradient(0deg, #fbda61, #f76b1c)',
	'green_gradient': 'linear-gradient(0deg, #b4ed50, #429321)',
	'violet_gradient': 'linear-gradient(180deg, #c90174, #0164fd)',
	'blue_gradient': 'linear-gradient(180deg, #3023ae, #53a0fe 48%, #b4ed50)',
	'grey_gradient': 'linear-gradient(0deg, #e2e2e2, #959595)'
};

class ColorPickerCircle extends Component {
	state = {
		colors: [
			'black', 'white', 'red', 'yellow',
			'green', 'violet', 'blue', 'grey'
		],
		gradients: [
			'black_gradient', 'white_gradient', 'red_gradient', 'yellow_gradient',
			'green_gradient', 'violet_gradient', 'blue_gradient', 'grey_gradient'
		],
		currentColor: null,
		callback: () => {},

		isGradient: false,

		width: 272,
		height: 44,
		margin: 5,
	};

	componentDidMount() {
		let { currentColor, isGradient, callback } = this.props.data;
		
		this.setState({
			currentColor: rgbToString[currentColor],
			height: isGradient ? 88 : 44,
			isGradient,
			callback
		})
	}

	render() {
		let position = this.getPosition();

		return (
			<div
				className = "narrative-colorpicker"
				onClick = { this.onClick }
				style = { position }
			>
				<div className="narrative-colorpicker_type_solid">
					{ this.getButtons('colors') }
				</div>
				{
					this.state.isGradient ?
						<div className="narrative-colorpicker_type_gradient">
							{ this.getButtons('gradients') }
						</div> : ''

				}
			</div>
		)
	}

	getButtons = (type) => {
		return this.state[type].map((color, item) =>
			<button
				type="button"
				title={color}
				className = {
					`button_color_${color} ${this.state.currentColor === color ? 'checked' : ''}`
				}
				key={item}
			>
				<span className="button_color"></span>
			</button>
		)
	};

	getPosition = () => {
		let { rect } = this.props.data,
			{ margin, width, height } = this.state,
			positionName = __checkPosition(rect, this);

		switch (positionName) {
			case 'RIGHT':
				return {
					top: rect.top,
					left: rect.right + margin,
					width, height
				};

			case 'DOWN_RIGHT':
				return {
					top: rect.bottom + margin,
					left: rect.left,
					width, height
				};

			case 'DOWN_LEFT':
				return {
					top: rect.bottom + margin,
					left: rect.right - width,
					width, height
				};

			case 'UP_RIGHT':
				return {
					top: rect.top - height - margin,
					left: rect.left,
					width, height
				};

			case 'UP_LEFT':
				return {
					top: rect.top - height - margin,
					left: rect.right - width,
					width, height
				}
		}

		function __checkPosition(rect, ctx) {
			const picker = ctx.state,
				{ parent } = ctx.props;

			let pickerWidth = picker.width + picker.margin,
				pickerHeight = picker.height + picker.margin,
				parentWidth = parent.clientWidth,
				parentHeight = parent.clientHeight;

		    if (parentWidth - rect.right > pickerWidth) return 'RIGHT';
		    if (
				parentHeight - rect.bottom + picker.margin > pickerHeight &&
				parentWidth - rect.left > picker.width
		    ) return 'DOWN_RIGHT';
			if (
				parentHeight - rect.bottom + picker.margin > pickerHeight &&
				rect.right > picker.width
			) return 'DOWN_LEFT';
			if (
				rect.top + picker.margin > pickerHeight &&
				parentWidth - rect.left > picker.width
			) return 'UP_RIGHT';
			if (
				rect.top + picker.margin > pickerHeight &&
				rect.right > picker.width - rect.width
			) return 'UP_LEFT';

			return 'RIGHT'
		}
	};

	onClick = (event) => {
		let target = event.target.closest('button'),
			color = target.getAttribute('title');

		if (color !== this.state.currentColor) {
			this.setState({ currentColor: color });
			this.state.callback(stringToRgb[color]);
		}
	}
}

export default ColorPickerCircle