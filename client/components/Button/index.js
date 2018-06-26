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

class Button extends Component {
	render() {
		return this.getTemplateButton()
	}

	getTemplateButton = () => {
		let { templatesButton } = this.props.button;

		switch(templatesButton) {
			case 'BasicButton':
				return <BasicButton button={this.props.button} />;

			case 'ButtonThreeD':
				return <ButtonThreeD button={this.props.button} />;

			case 'ButtonLiftedShadow':
				return <ButtonLiftedShadow button={this.props.button} />;

			case 'ShinyButtonInverted':
				return <ShinyButtonInverted button={this.props.button} />;

			case 'ButtonArrow':
				return <ButtonArrow button={this.props.button} />;

			case 'ButtonArrowLeft':
				return <ButtonArrowLeft button={this.props.button} />;

			case 'ButtonInnerShadow':
				return <ButtonInnerShadow button={this.props.button} />;

			case 'ButtonShadowRight':
				return <ButtonShadowRight button={this.props.button} />;

			case 'ButtonShadowLeft':
				return <ButtonShadowLeft button={this.props.button} />;

			case 'TextOnlyButtonSkin':
				return <TextOnlyButtonSkin button={this.props.button} />;

			case 'ShinyButtonISkin':
				return <ShinyButtonISkin button={this.props.button} />;

			case 'ShinyButtonIISkin':
				return <ShinyButtonIISkin button={this.props.button} />;

			case 'RibbonButton':
				return <RibbonButton button={this.props.button} />;

			case 'CircleButton':
				return <CircleButton button={this.props.button} />;

			case 'SloopyButton':
				return <SloopyButton button={this.props.button} />;

			case 'IronButton':
				return <IronButton button={this.props.button} />;

			case 'GamingButton':
				return <GamingButton button={this.props.button} />;

			case 'ScotchTapeButton':
				return <ScotchTapeButton button={this.props.button} />;

			default:
				return <BasicButton button={this.props.button} />;
		}
	}
}

export default Button