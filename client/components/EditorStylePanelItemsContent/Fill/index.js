import React, { Component } from 'react'

import Slider from '../../SliderStyleAdvanced';
import InputStyleAdvanced from '../../InputStyleAdvanced';
import ColorPickerInput from '../../ColorPickerInput';

class Fill extends Component {
	state = {
		backgroundOpacity: 0,
		maxValue: 100,
		backgroundColor: null
	};

	componentWillMount() {
		this.setState({
			backgroundOpacity: this.props.backgroundOpacity,
			backgroundColor: this.props.backgroundColor
		});
	}

	render() {
		return (
			<div className='scrolled-content'>
				<span className='tab-text'>Цвета и прозрачность</span>
				<div className="section">
					<div>
						<div className="color-picker-input-with-opacity">
							<label className="color-picker-input-with-opacity-label">Фон</label>
							<div className="color-picker-input-with-opacity-slider">
								<div className="input-slider">
									<label className="label"></label>
									<div className="clearfix sliderArea">
										<div className="sliderContainer">
											<InputStyleAdvanced
												maxValue = { this.state.maxValue }
												value = { this.state.backgroundOpacity }
												units = { true }
												callback = { this.callback('backgroundOpacity') }
											/>
											<Slider
												maxValue = { this.state.maxValue }
												value = { this.state.backgroundOpacity }
												callback = { this.callback('backgroundOpacity') }
											/>
										</div>
									</div>
									<ColorPickerInput
										opacity = { this.state.backgroundOpacity }
										background = { this.state.backgroundColor }
										callback = { this.callback('backgroundColor') }
									/>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	callback = (type) => {
		return (value) => {
			this.setState({ [type]: value });

			value = type === 'backgroundOpacity' ? value / 100 : value;
			this.props.onChange(value, type);
		}
	}
}

export default Fill