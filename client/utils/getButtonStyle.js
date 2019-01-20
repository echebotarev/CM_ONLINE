import { content } from "../fixturesEditor";
const { buttonsPreviewEditor } = content;

const getButtonStyle = (inputStyle, templatesButton) => {
  let styles = {
    background: getRGBA(
      inputStyle.backgroundColor,
      inputStyle.backgroundOpacity
    ),
    color: getRGBA(inputStyle.textColor, inputStyle.textOpacity)
  };

  if (buttonsPreviewEditor[templatesButton].includes("border")) {
    styles.border = `${inputStyle.borderWidth}px solid ${getRGBA(
      inputStyle.borderColor,
      inputStyle.borderOpacity
    )}`;
    styles.lineHeight = `calc(2em - ${inputStyle.borderWidth * 2}px)`;
  }

  return styles;

  function getRGBA(color, opacity) {
    return color.replace("rgb", "rgba").replace(")", `, ${opacity})`);
  }
};

export default getButtonStyle;
