import React, { Component } from "react";

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
} from "../ButtonsTemplates";

import getButtonStyle from "../../utils/getButtonStyle";

class Button extends Component {
  state = {
    style: null
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let { button } = nextProps;

    if (!button) {
      return null;
    }

    let { style, templatesButton } = button;
    return { style: getButtonStyle(style, templatesButton) };
  }

  render() {
    let { templatesButton } = this.props.button,
      { onChange } = this.props;

    return (
      <div style={this.state.style} className={`${templatesButton} button`}>
        {this.getTemplateButton(
          templatesButton,
          this.props.button,
          this.state.style ? this.state.style : {},
          onChange
        )}
      </div>
    );
  }

  getTemplateButton = (template, data, styles, onChange) => {
    switch (template) {
      case "BasicButton":
        return (
          <BasicButton button={data} onChange={onChange} styles={styles} />
        );

      case "ButtonThreeD":
        return (
          <ButtonThreeD button={data} onChange={onChange} styles={styles} />
        );

      case "ButtonLiftedShadow":
        return (
          <ButtonLiftedShadow
            button={data}
            onChange={onChange}
            styles={styles}
          />
        );

      case "ShinyButtonInverted":
        return (
          <ShinyButtonInverted
            button={data}
            onChange={onChange}
            styles={styles}
          />
        );

      case "ButtonArrow":
        return (
          <ButtonArrow button={data} onChange={onChange} styles={styles} />
        );

      case "ButtonArrowLeft":
        return (
          <ButtonArrowLeft button={data} onChange={onChange} styles={styles} />
        );

      case "ButtonInnerShadow":
        return (
          <ButtonInnerShadow
            button={data}
            onChange={onChange}
            styles={styles}
          />
        );

      case "ButtonShadowRight":
        return (
          <ButtonShadowRight
            button={data}
            onChange={onChange}
            styles={styles}
          />
        );

      case "ButtonShadowLeft":
        return (
          <ButtonShadowLeft button={data} onChange={onChange} styles={styles} />
        );

      case "TextOnlyButtonSkin":
        return (
          <TextOnlyButtonSkin
            button={data}
            onChange={onChange}
            styles={styles}
          />
        );

      case "ShinyButtonISkin":
        return (
          <ShinyButtonISkin button={data} onChange={onChange} styles={styles} />
        );

      case "ShinyButtonIISkin":
        return (
          <ShinyButtonIISkin
            button={data}
            onChange={onChange}
            styles={styles}
          />
        );

      case "RibbonButton":
        return (
          <RibbonButton button={data} onChange={onChange} styles={styles} />
        );

      case "CircleButton":
        return (
          <CircleButton button={data} onChange={onChange} styles={styles} />
        );

      case "SloopyButton":
        return (
          <SloopyButton button={data} onChange={onChange} styles={styles} />
        );

      case "IronButton":
        return <IronButton button={data} onChange={onChange} styles={styles} />;

      case "GamingButton":
        return (
          <GamingButton button={data} onChange={onChange} styles={styles} />
        );

      case "ScotchTapeButton":
        return (
          <ScotchTapeButton button={data} onChange={onChange} styles={styles} />
        );

      default:
        return (
          <BasicButton button={data} onChange={onChange} styles={styles} />
        );
    }
  };
}

export default Button;
