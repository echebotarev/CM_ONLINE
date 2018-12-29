import React, { Component } from 'react'

import {
	BasicButton,
	ButtonThreeD,
	ButtonLiftedShadow,
	ShinyButtonInverted,
	ButtonArrow,
	ButtonArrowLeft,
	ButtonInnerShadow,
	ButtonShadowRight,
	ButtonShadowLeft,
	TextOnlyButtonSkin,
	ShinyButtonISkin,
	ShinyButtonIISkin,
	RibbonButton,
	CircleButton,
	SloopyButton,
	IronButton,
	GamingButton,
	ScotchTapeButton
} from '../ButtonsTemplates'

import { content } from '../../fixturesEditor'
const { buttonsPreviewEditor } = content,
	BUTTON_HEIGHT = 60;

class Button extends Component {
	state = {
		style: null
	};

	componentDidMount() {
		let { style, templatesButton } = this.props.button;
		this.setState({ style: this.renderStyle(style, templatesButton) });
	}

	componentWillReceiveProps(nextProps) {
		let { style, templatesButton } = nextProps.button;
		this.setState({ style: this.renderStyle(style, templatesButton) });
	}

	render() {
		let { templatesButton } = this.props.button,
			{ onChange } = this.props;

		return <div style = { this.state.style } className = {`${templatesButton} button`}>
			{
				this.getTemplateButton(
					templatesButton,
					this.props.button,
					this.state.style ? this.state.style : {},
					onChange
				)
			}
		</div>
	}

	getTemplateButton = (template, data, styles, onChange) => {
		switch(template) {
			case 'BasicButton':
				return <BasicButton
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;

			case 'ButtonThreeD':
				return <ButtonThreeD
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;

			case 'ButtonLiftedShadow':
				return <ButtonLiftedShadow
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;

			case 'ShinyButtonInverted':
				return <ShinyButtonInverted
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;

			case 'ButtonArrow':
				return <ButtonArrow
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;

			case 'ButtonArrowLeft':
				return <ButtonArrowLeft
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;

			case 'ButtonInnerShadow':
				return <ButtonInnerShadow
					button = { data } onChange = { onChange }
					styles = { styles } />;

			case 'ButtonShadowRight':
				return <ButtonShadowRight
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;

			case 'ButtonShadowLeft':
				return <ButtonShadowLeft
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;

			case 'TextOnlyButtonSkin':
				return <TextOnlyButtonSkin
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;

			case 'ShinyButtonISkin':
				return <ShinyButtonISkin
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;

			case 'ShinyButtonIISkin':
				return <ShinyButtonIISkin
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;

			case 'RibbonButton':
				return <RibbonButton
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;

			case 'CircleButton':
				return <CircleButton
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;

			case 'SloopyButton':
				return <SloopyButton
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;

			case 'IronButton':
				return <IronButton
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;

			case 'GamingButton':
				return <GamingButton
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;

			case 'ScotchTapeButton':
				return <ScotchTapeButton
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;

			default:
				return <BasicButton
					button = { data } onChange = { onChange }
					styles = { styles }
				/>;
		}
	};

	renderStyle = (inputStyle, templatesButton) => {
		let styles = {
				background: getRGBA(inputStyle.backgroundColor, inputStyle.backgroundOpacity),
				color: getRGBA(inputStyle.textColor, inputStyle.textOpacity)
			};


		if (buttonsPreviewEditor[templatesButton].includes('border')) {
			styles.border = `${inputStyle.borderWidth}px solid ${getRGBA(inputStyle.borderColor, inputStyle.borderOpacity)}`;
			styles.lineHeight = `calc(2em - ${inputStyle.borderWidth*2}px)`;
		}

		return styles;

		function getRGBA(color, opacity) {
			return color
				.replace('rgb', 'rgba').
				replace(')', `, ${opacity})`)
		}
	}
}

export default Button
