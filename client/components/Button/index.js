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
		let { templatesButton } = this.props.button;

		return <div style = { this.state.style } className = {`${templatesButton} button`}>
			{
				this.getTemplateButton(
					templatesButton,
					this.props.button,
					this.state.style ? this.state.style : {}
				)
			}
		</div>
	}

	getTemplateButton = (template, data, styles) => {
		switch(template) {
			case 'BasicButton':
				return <BasicButton
					button = { data }
					styles = { styles }
				/>;

			case 'ButtonThreeD':
				return <ButtonThreeD
					button = { data }
					styles = { styles }
				/>;

			case 'ButtonLiftedShadow':
				return <ButtonLiftedShadow
					button = { data }
					styles = { styles }
				/>;

			case 'ShinyButtonInverted':
				return <ShinyButtonInverted
					button = { data }
					styles = { styles }
				/>;

			case 'ButtonArrow':
				return <ButtonArrow
					button = { data }
					styles = { styles }
				/>;

			case 'ButtonArrowLeft':
				return <ButtonArrowLeft
					button = { data }
					styles = { styles }
				/>;

			case 'ButtonInnerShadow':
				return <ButtonInnerShadow button = { data }
					styles = { styles } />;

			case 'ButtonShadowRight':
				return <ButtonShadowRight
					button = { data }
					styles = { styles }
				/>;

			case 'ButtonShadowLeft':
				return <ButtonShadowLeft
					button = { data }
					styles = { styles }
				/>;

			case 'TextOnlyButtonSkin':
				return <TextOnlyButtonSkin
					button = { data }
					styles = { styles }
				/>;

			case 'ShinyButtonISkin':
				return <ShinyButtonISkin
					button = { data }
					styles = { styles }
				/>;

			case 'ShinyButtonIISkin':
				return <ShinyButtonIISkin
					button = { data }
					styles = { styles }
				/>;

			case 'RibbonButton':
				return <RibbonButton
					button = { data }
					styles = { styles }
				/>;

			case 'CircleButton':
				return <CircleButton
					button = { data }
					styles = { styles }
				/>;

			case 'SloopyButton':
				return <SloopyButton
					button = { data }
					styles = { styles }
				/>;

			case 'IronButton':
				return <IronButton
					button = { data }
					styles = { styles }
				/>;

			case 'GamingButton':
				return <GamingButton
					button = { data }
					styles = { styles }
				/>;

			case 'ScotchTapeButton':
				return <ScotchTapeButton
					button = { data }
					styles = { styles }
				/>;

			default:
				return <BasicButton
					button = { data }
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
