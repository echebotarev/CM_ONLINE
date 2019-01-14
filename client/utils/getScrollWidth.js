let SCROLL_WIDTH = 0;

const getScrollWidth = elem => {
  console.log("ELEM", elem);
  if (SCROLL_WIDTH || !elem) {
    return SCROLL_WIDTH;
  }

  let overflowXValue = getComputedStyle(elem).overflowX,
    overflowYValue = getComputedStyle(elem).overflowY,
    values = ["scroll", "auto"];

  if (values.includes(overflowXValue)) {
    SCROLL_WIDTH = getWidth(elem, "horizontal");
  } else if (values.includes(overflowYValue)) {
    SCROLL_WIDTH = getWidth(elem, "vertical");
  }

  return SCROLL_WIDTH;

  function getWidth(elem, state) {
    if (state === "vertical") {
      return elem.offsetWidth - elem.clientWidth;
    }

    return elem.offsetHeight - elem.clientHeight;
  }
};

export default getScrollWidth;
